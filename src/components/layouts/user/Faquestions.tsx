"use client"

import React, { useState } from 'react'
import { IoMdClose } from "react-icons/io"
import { FaPlus } from "react-icons/fa6"


const questions = [
  {
    question: 'Why should I buy the TVK Tribute Cup? Why is it so special?',
    answer: "The TVK Tribute Cup is not an ordinary cup — it is a powerful fan symbol, a unique identity, and a collectible piece of history. Each cup carries a unique serial number and your name will be permanently displayed on our official website, marking your place in this fan movement. This edition will be produced only once, and once bookings close, it will never be made again, which makes it a rare collector's item with value that can grow over time. You also get the ability to resell or transfer ownership in the future, making it more than just a cup — it becomes a digital and physical asset you own. Bringing this cup into your home represents pride, unity, support, and emotional connection. This is not just buying a product; it's proving that you stood with the movement and became a part of the moment forever. Owning this cup is a statement: “I was there. I am part of this legacy.",
  },
  {
    question: 'Is there any extra charge for the Lucky Draw or Reward System?',
    answer: 'No. There is absolutely NO extra charge. The lucky draw is free, and every customer who buys a cup is automatically included. You do not have to pay any separate entry fee.',
  },
  {
    question: 'Will my personal details be publicly visible on the website?',
    answer: 'No. Only your Name + Cup Serial Number will appear publicly. Your phone number, address, email ID and all other personal details are private and accessible only through your secure login.',
  },
  {
    question: 'Is this a limited-time project?',
    answer: 'Yes. Booking is open only for a short duration. Once the booking window closes, cups will not be available again.',
  },
  {
    question: 'Is there a participation fee?',
    answer: 'No, participation is completely free of charge.',
  },
  {
    question: 'How will winners be notified?',
    answer: 'Winners will be notified via email or phone call.',
  },
];

const FaQuestions = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="max-w-5xl mx-4 md:mx-auto my-12">
      <div className="rounded-[32px] p-[2px] bg-gradient-to-br from-[#111] via-[#191821] to-[#07070c]">
        <div className="rounded-[30px] bg-[#050505]/90 backdrop-blur-sm px-6 md:px-12 py-10 border border-white/10 shadow-[0_15px_60px_rgba(0,0,0,0.45)]">
          <h2 className="text-[1.5rem] font-semibold mb-6 text-center text-white md:text-[3rem]">
            Frequently Asked <span className="text-[#F5BB0B]">Questions</span>
          </h2>
          <p className="text-center text-white/70 text-sm md:text-base max-w-2xl mx-auto mb-10">
            Need a quick answer? Browse the questions below—each one opens with a smooth reveal so you can focus on what matters.
          </p>
          <div className="space-y-4">
            {questions.map((q, idx) => (
              <div
                key={idx}
                className="rounded-2xl overflow-hidden bg-gradient-to-br from-[#1A1A1A] via-[#111] to-[#050505] border border-white/5 text-[#F5BB0B] transition-transform duration-300 hover:scale-[1.01]"
              >
                <button
                  className="w-full flex items-center justify-between px-5 py-4 focus:outline-none cursor-pointer"
                  onClick={() => handleToggle(idx)}
                >
                  <span className="flex items-center gap-3 text-left text-[1rem] md:text-lg">
                    <span className="font-semibold text-[#F5BB0B] bg-white/5 rounded-full h-8 w-8 flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <span className="font-medium text-white">{q.question}</span>
                  </span>
                  <span className="ml-4 text-xl text-white">
                    {openIndex === idx ? (
                      <IoMdClose className="cursor-pointer" />
                    ) : (
                      <FaPlus className="cursor-pointer" />
                    )}
                  </span>
                </button>
                {openIndex === idx && (
                  <div className="px-5 pb-5 text-white/80 animate-fade-in text-sm md:text-lg leading-relaxed border-t border-white/5">
                    {q.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FaQuestions


