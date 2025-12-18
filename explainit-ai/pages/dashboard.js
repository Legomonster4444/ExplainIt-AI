import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AIInput from "../components/AIInput";
import { useSession } from "next-auth/react";

export default function Dashboard() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div className="p-6 text-center">
        Please sign in to access the dashboard.
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <main className="p-6">
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
        <AIInput />
      </main>
      <Footer />
    </>
  );
}
