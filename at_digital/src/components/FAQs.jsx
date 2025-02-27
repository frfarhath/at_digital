import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const FAQs = () => {
  const [open, setOpen] = useState(null);
  const toggle = (index) => setOpen(open === index ? null : index);

  const questions = [
    {
      question: "Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.",
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?",
      answer: "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.",
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?",
      answer: "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.",
    },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto p-8 mt-[5px]">
      <h2 className="text-center text-[22px] font-[Poppins] font-semibold text-[#4F46E5] mb-6">
        Frequently asked questions
      </h2>
      {questions.map((item, index) => (
        <div
          key={index}
          className={`p-5 mb-3 rounded-lg  bg-[#F8F6FF]`}
        >
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggle(index)}
          >
            <span
              className={`text-[16px] font-[Poppins] ${
                open === index ? "text-[#4F46E5]" : "text-black font-normal"
              }`}
            >
              {item.question}
            </span>
            {open === index ? (
              <FaMinus className="text-[#4F46E5]" />
            ) : (
              <FaPlus className="text-black" />
            )}
          </div>
          {open === index && (
            <p className="mt-3 text-[14px] text-gray-600 ">{item.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQs;
