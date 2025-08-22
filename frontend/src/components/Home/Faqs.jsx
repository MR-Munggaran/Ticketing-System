import { useState } from "react";
import { FiPlus, FiMinus, FiSearch } from "react-icons/fi";

const faqs = [
  {
    id: 1,
    question: "Shipping",
    answer:
      "We are covering every major country worldwide. The shipment leaves from US as it is our headquarter. Some extra information you probably need to add here so that the customer is clear of their wanted expectations.",
  },
  {
    id: 2,
    question: "Returns",
    answer:
      "You can return any item within 30 days of purchase. Some extra details here to clarify conditions and expectations.",
  },
  {
    id: 3,
    question: "Exchange",
    answer:
      "We allow exchanges on selected items. Please check our policy page for detailed information.",
  },
  {
    id: 4,
    question: "Tracking",
    answer:
      "After placing an order, you will receive a tracking code via email to follow your package.",
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState(null);
  const [search, setSearch] = useState("");

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="2xl:container 2xl:mx-auto md:py-16 lg:px-20 md:px-6 py-12 px-4">
      {/* Header */}
      <h2 className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500 lg:text-5xl text-3xl text-center py-2">
        Frequently Asked Questions
      </h2>

      {/* Intro + Search */}
      <div className="mt-6 flex md:justify-between md:items-start md:flex-row flex-col justify-start items-start">
        <p className="font-normal text-base text-gray-600 dark:text-gray-400 lg:w-8/12 md:w-9/12">
          Got questions? We’ve got answers! Here are the most common ones we get
          from our amazing community 🎉
        </p>
        <div className="flex items-center mt-6 md:mt-0 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full px-4 py-2 shadow-sm">
          <FiSearch className="text-gray-500 dark:text-gray-400 mr-2" />
          <input
            placeholder="Search FAQs..."
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent focus:outline-none text-base text-gray-700 dark:text-gray-300 w-full"
          />
        </div>
      </div>

      {/* FAQ Content */}
      <div className="flex md:flex-row flex-col md:space-x-10 md:mt-16 mt-10">
        {/* Left Image */}
        <div className="md:w-5/12 lg:w-4/12 w-full">
          <img
            src="https://images.unsplash.com/photo-1755398104003-67d116e62f38?q=80&w=1170&auto=format&fit=crop"
            alt="FAQ Illustration"
            className="w-full md:block hidden rounded-2xl shadow-md"
          />
        </div>

        {/* Right Q&A */}
        <div className="md:w-7/12 lg:w-8/12 w-full md:mt-0 sm:mt-14 mt-10">
          {filteredFaqs.map((faq) => (
            <div key={faq.id} className="mb-6">
              <div
                className="flex justify-between items-center cursor-pointer p-4 rounded-xl hover:bg-orange-50 dark:hover:bg-gray-700 transition"
                onClick={() => toggleFAQ(faq.id)}
              >
                <h3 className="font-semibold text-lg text-gray-800 dark:text-white">
                  {faq.question}
                </h3>
                <button
                  aria-label="toggle"
                  className="text-orange-500 focus:outline-none"
                >
                  {openId === faq.id ? <FiMinus /> : <FiPlus />}
                </button>
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openId === faq.id ? "max-h-40 mt-2 px-4" : "max-h-0"
                }`}
              >
                <p className="text-base text-gray-600 dark:text-gray-400">
                  {faq.answer}
                </p>
              </div>
              <hr className="my-4 border-orange-200 dark:border-gray-700" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
