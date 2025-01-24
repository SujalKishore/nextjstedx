import React, { useState } from "react";
const faqData = [
  {
    question: "What is TED?",
    answer:
      "TED is a nonprofit devoted to spreading ideas in the form of short, powerful talks, usually 18 minutes or less. TED began in 1984 as a conference where Technology, Entertainment, and Design converged, and today covers almost all topics.",
  },
  {
    question: "What is TEDx?",
    answer:
      "TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. TEDx events are independently organized, and they combine live speakers and TED Talk videos.",
  },
  {
    question: "How can I attend a TEDx event?",
    answer:
      "To attend a TEDx event, check for upcoming events in your area on the official TEDx website or local event listings. You can register directly on the event's page.",
  },
  {
    question: "Can I join the team?",
    answer:
      "Yes, we are always looking for passionate individuals to join our team. Please reach out to us through our contact page or follow our social media for opportunities.",
  },
];
const FAQComponent = () => {
  const [activeIndex, setActiveIndex] = useState<number[]>([]);
  const handleToggle = (index: number) => {
    if (activeIndex.includes(index)) {
      setActiveIndex(activeIndex.filter((i) => i !== index));
    } else {
      setActiveIndex([...activeIndex, index]);
    }
  };
  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-red-600 mb-12">FAQ</h2>
        <div className="space-y-4 max-w-4xl mx-auto">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800 bg-opacity-70 p-6 rounded-lg shadow-md transition-all duration-700 ease-in-out"
            >
              <div
                className="flex justify-between items-center cursor-pointer text-lg font-semibold border-b border-gray-600 pb-2"
                onClick={() => handleToggle(index)}
              >
                <span className="text-white">{item.question}</span>
                <span className="text-red-500">
                  {activeIndex.includes(index) ? "-" : "+"}
                </span>
              </div>
              <div
                className={`mt-4 overflow-hidden transition-all duration-700 ease-in-out ${
                  activeIndex.includes(index)
                    ? "max-h-screen opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-300 text-sm">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default FAQComponent;