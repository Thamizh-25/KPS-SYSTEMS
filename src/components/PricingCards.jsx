import { Zap } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '₹999',
    period: '/month',
    icon: '🚀',
    desc: 'For individuals',
    features: ['Up to 2 systems', 'Email support', '99.9% uptime SLA', 'Community access'],
    featured: false
  },
  {
    name: 'Professional',
    price: '₹2,999',
    period: '/month',
    icon: '⭐',
    desc: 'For businesses',
    features: ['Up to 10 systems', '24/7 support', '99.99% uptime SLA', 'Priority support', 'API access', 'Custom reports'],
    featured: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'Contact Us',
    icon: '👑',
    desc: 'For enterprises',
    features: ['Unlimited systems', 'Dedicated support', '99.999% uptime SLA', 'On-site training', 'Custom integration', 'SLA guarantee'],
    featured: false
  }
];

export default function PricingCards() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Choose the plan that fits your enterprise infrastructure needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-lg overflow-hidden transition-all ${
                plan.featured
                  ? 'md:scale-105 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/30 dark:to-teal-900/30 border-2 border-emerald-500 shadow-xl'
                  : 'bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:shadow-lg'
              }`}
            >
              {plan.featured && (
                <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-2 text-center font-semibold text-sm">
                  Most Popular
                </div>
              )}

              <div className="p-8">
                <div className="text-3xl mb-2">{plan.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{plan.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">{plan.desc}</p>

                <div className="mb-8">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">{plan.price}</span>
                  <span className="text-gray-600 dark:text-gray-400">/{plan.period}</span>
                </div>

                <button
                  className={`w-full py-2 rounded-lg font-semibold transition-all mb-8 ${
                    plan.featured
                      ? 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white'
                      : 'border-2 border-emerald-600 text-emerald-600 dark:border-emerald-400 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-gray-800'
                  }`}
                >
                  Get Started
                </button>

                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300">
                      <Zap className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
