import { MessageCircle, Book, Mail, Phone } from 'lucide-react';

const HelpCenter = () => {
  const faqs = [
    {
      question: 'How do I earn eco points?',
      answer: 'Log eco-friendly actions like planting trees, saving water, or using public transport. Each action earns you points once verified.',
    },
    {
      question: 'What can I do with my points?',
      answer: 'Redeem points for rewards like eco-friendly products, certificates, and exclusive badges.',
    },
    {
      question: 'How long does verification take?',
      answer: 'Most actions are verified within 24-48 hours by our community moderators.',
    },
    {
      question: 'Can I track my environmental impact?',
      answer: 'Yes! Your dashboard shows total water saved, energy offset, and CO2 reduced based on your logged actions.',
    },
  ];

  const contactOptions = [
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our support team',
      color: 'text-blue-400',
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'support@greentracker.com',
      color: 'text-green-400',
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: '+1 (555) 123-4567',
      color: 'text-purple-400',
    },
  ];

  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Help Center</h1>
        <p className="text-[#94a3b8]">Get answers to your questions</p>
      </div>

      <div className="bg-[#152236] rounded-2xl p-6 mb-8">
        <div className="flex items-center gap-3 mb-6">
          <Book className="w-6 h-6 text-[#22c55e]" />
          <h2 className="text-xl font-bold text-white">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-[#0d1b2a] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{faq.question}</h3>
              <p className="text-[#94a3b8] text-sm">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#152236] rounded-2xl p-6">
        <h2 className="text-xl font-bold text-white mb-6">Contact Support</h2>
        <div className="grid grid-cols-3 gap-4">
          {contactOptions.map((option, index) => {
            const Icon = option.icon;
            return (
              <div
                key={index}
                className="bg-[#0d1b2a] rounded-xl p-5 hover:bg-[#111f2e] transition-colors cursor-pointer"
              >
                <Icon className={`w-8 h-8 ${option.color} mb-3`} />
                <h3 className="text-white font-semibold mb-1">{option.title}</h3>
                <p className="text-[#94a3b8] text-sm">{option.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
