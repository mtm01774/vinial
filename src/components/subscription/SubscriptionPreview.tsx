import { SubscriptionPlans } from './SubscriptionPlans';

export const SubscriptionPreview = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">Wine Club Memberships</h2>
        <p className="text-center text-gray-600 mb-12">
          Choose the perfect plan for your wine journey
        </p>
        <SubscriptionPlans preview={true} />
      </div>
    </section>
  );
}; 