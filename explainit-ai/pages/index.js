import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AIInput from "../components/AIInput";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col items-center justify-center p-6">
        <h1 className="text-5xl font-bold text-center">
          Explain anything. Clearly. Instantly.
        </h1>
        <p className="mt-4 text-gray-600 text-center max-w-xl">
          AI explanations for students, professionals, and businesses.
        </p>
        <AIInput />
      </main>
      <Footer />
    </>
  );
}
