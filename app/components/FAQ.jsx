"use client";

import React, { useState } from "react";

const FAQItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="border-b border-gray-200 py-4 w-full">
      <div
        className="flex justify-between items-center cursor-pointer w-full p-4 hover:shadow-lg hover:bg-gray-100 transition-all rounded-md"
        onClick={onToggle}
      >
        <h3 className="text-3xl font-semibold text-left w-full">{question}</h3>
        <span className="text-3xl">{isOpen ? "−" : "+"}</span>
      </div>
      {isOpen && (
        <div className="mt-2 p-4 bg-blue-100 rounded-md text-center shadow-md">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Who can invest on leveled?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Eget suspendisse urna ultricies morbi.",
    },
    {
      question: "What is the minimum investment amount?",
      answer: "The minimum investment amount is $10,000.",
    },
    {
      question: "What kind of returns can I expect from SMB investing?",
      answer: "Returns can vary, but historically they have been around 8-12%.",
    },
    {
      question: "How does Leveled make money?",
      answer:
        "Leveled makes money through management fees and performance fees.",
    },
    {
      question: "What is the time horizon of investment?",
      answer: "The typical time horizon is 5-7 years.",
    },
    {
      question: "How can I liquidate my investment?",
      answer:
        "You can liquidate your investment through our platform at any time.",
    },
    {
      question: "What criteria does Leveled utilize for investments?",
      answer:
        "Leveled utilizes a rigorous vetting process for all potential investments.",
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="p-4 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Frequently Asked Questions
      </h2>
      <div className="w-full max-w-[1242px] space-y-4">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
