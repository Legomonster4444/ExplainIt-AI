import Navbar from "../components/Navbar";

export default function Advertise() {
  return (
    <>
      <Navbar />
      <div className="p-6 max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Advertise</h1>
        <p>Ad submission is handled via admin approval.</p>
      </div>
    </>
  );
}
