import PricingCard from "../components/PricingCard";
import Navbar from "../components/Navbar";

export default function Pricing() {
  return (
    <>
      <Navbar />
      <div className="p-6 grid md:grid-cols-3 gap-6">
        <PricingCard title="Free" price="$0" features={["10/day", "Ads"]} />
        <PricingCard title="Pro" price="$6" features={["100/day", "No Ads"]} popular />
        <PricingCard title="Premium" price="$12" features={["Unlimited", "Teams"]} />
      </div>
    </>
  );
}
