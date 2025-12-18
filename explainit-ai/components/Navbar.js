import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      <Link href="/" className="text-2xl font-bold text-blue-600">ExplainIt.ai</Link>
      <div className="space-x-4 hidden md:flex">
        <Link href="/pricing" className="text-gray-700 hover:text-blue-600">Pricing</Link>
        <Link href="/advertise" className="text-gray-700 hover:text-blue-600">Advertise</Link>
        <Link href="/dashboard" className="text-gray-700 hover:text-blue-600">Dashboard</Link>
      </div>
    </nav>
  );
}
