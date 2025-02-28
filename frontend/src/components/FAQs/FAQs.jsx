import { useState } from "react";

const FAQs = () => {
  // Sample FAQ data
  const faqData = [
    {
      question: "What is your refund policy?",
      answer:
        "We offer a full refund within the first 30 days of purchase if you are not satisfied with the product.",
    },
    {
      question: "How do I access my account?",
      answer:
        'You can access your account by clicking on the "Login" button at the top-right corner of the homepage and entering your credentials.',
    },
    {
      question: "Do you offer customer support?",
      answer:
        "Yes, our customer support team is available 24/7 via email and chat to assist you with any inquiries.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  // Toggle function to show or hide the answer
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full mt-8 mx-auto p-6 bg-white rounded-lg shadow dark:bg-gray-800">
      <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-100 mb-4">
        FAQs
      </h2>

      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="border-t border-gray-200 pt-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left flex justify-between items-center focus:outline-none"
            >
              <span className="text-lg font-medium text-gray-600 dark:text-gray-200">
                {faq.question}
              </span>
              <svg
                className={`w-6 h-6 text-gray-600 dark:text-gray-200  transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            {/* Answer Section */}
            <div
              className={`mt-2 text-gray-600 dark:text-gray-400 ${
                openIndex === index ? "block" : "hidden"
              }`}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
