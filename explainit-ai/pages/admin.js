import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function Admin() {
  const { data: session } = useSession();
  const [stats, setStats] = useState(null);

  useEffect(() => {
    if (session) {
      fetch("/api/admin").then(r => r.json()).then(setStats);
    }
  }, [session]);

  if (!session) return <p className="p-6">Sign in required</p>;
  if (!stats?.allowed) return <p className="p-6">Access denied</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Admin</h1>
      <p>Total Users: {stats.users}</p>
      <p>Requests Today: {stats.requestsToday}</p>
      <p>Active Ads: {stats.ads}</p>
    </div>
  );
}
