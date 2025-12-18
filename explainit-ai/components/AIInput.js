import { useSession, signIn } from "next-auth/react";
import { useState } from "react";

export default function AIInput() {
  const { data: session } = useSession();
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  if (!session) {
    return (
      <button onClick={() => signIn("google")} className="btn">
        Sign in with Google
      </button>
    );
  }

  async function submit() {
    const res = await fetch("/api/ai", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ input, email: session.user.email })
    });
    const data = await res.json();
    setOutput(data.output);
  }

  return (
    <>
      <textarea value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={submit}>Explain</button>
      {output && <div>{output}</div>}
    </>
  );
}
