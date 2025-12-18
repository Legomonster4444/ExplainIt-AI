export default function UpgradeButton({ plan }) {
  const handleClick = async () => {
    try {
      const res = await fetch("/api/stripe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan }),
      });
      const data = await res.json();
      if (data.url) window.location.href = data.url;
    } catch (err) {
      console.error(err);
      alert("Error creating checkout session");
    }
  };

  return (
    <button
      onClick={handleClick}
      className="px-4 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition"
    >
      Upgrade to {plan.charAt(0).toUpperCase() + plan.slice(1)}
    </button>
  );
}
