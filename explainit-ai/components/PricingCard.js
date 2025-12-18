export default function PricingCard({ plan }) {
  return (
    <div className={`p-6 rounded-lg shadow-lg border border-gray-200 bg-white flex flex-col items-center
      ${plan.popular ? "border-blue-600 ring-2 ring-blue-300" : ""}`}>
      <h2 className="text-2xl font-bold mb-2">{plan.title}</h2>
      <p className="text-xl font-semibold mb-4">{plan.price}</p>
      <ul className="mb-6 space-y-2 text-gray-700">
        {plan.features.map((feature, idx) => (
          <li key={idx}>• {feature}</li>
        ))}
      </ul>
      <button className={`px-6 py-3 rounded-lg font-semibold transition ${
        plan.popular ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-gray-200 text-gray-800 hover:bg-gray-300"
      }`}>
        Choose Plan
      </button>
    </div>
  );
}
