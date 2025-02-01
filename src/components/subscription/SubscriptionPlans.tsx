import { Button } from '../ui/Button';

interface SubscriptionPlansProps {
  preview?: boolean;
}

export const SubscriptionPlans = ({ preview = false }: SubscriptionPlansProps) => {
  const plans = [
    {
      name: "Starter",
      price: 49.99,
      bottles: 2,
      features: [
        "2 Premium Wines Monthly",
        "Tasting Notes",
        "Member Discounts",
        "Cancel Anytime"
      ]
    },
    {
      name: "Enthusiast",
      price: 89.99,
      bottles: 4,
      features: [
        "4 Premium Wines Monthly",
        "Tasting Notes",
        "Member Discounts",
        "Priority Access",
        "Free Shipping"
      ]
    },
    {
      name: "Connoisseur",
      price: 159.99,
      bottles: 6,
      features: [
        "6 Premium Wines Monthly",
        "Expert Tasting Notes",
        "VIP Member Discounts",
        "Priority Access",
        "Free Shipping",
        "Exclusive Events"
      ]
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {plans.map((plan) => (
        <div key={plan.name} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
          <p className="text-3xl font-bold text-[var(--primary-color)] mb-4">
            ${plan.price}
            <span className="text-base font-normal text-gray-600">/month</span>
          </p>
          <ul className="mb-6 space-y-2">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
          <Button variant="primary" className="w-full">
            {preview ? 'Learn More' : 'Subscribe Now'}
          </Button>
        </div>
      ))}
    </div>
  );
}; 