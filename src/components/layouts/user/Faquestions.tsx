"use client"

import React, { useState } from 'react'
import { IoMdClose } from "react-icons/io"
import { FaPlus } from "react-icons/fa6"

const questions = [
  {
    question: 'What is Jananayagan?',
    answer: 'Jananayagan is a platform that provides ...',
  },
  {
    question: 'How do I register?',
    answer: 'You can register by clicking the register button and filling out the form.',
  },
  {
    question: 'Is there a participation fee?',
    answer: 'No, participation is completely free of charge.',
  },
  {
    question: 'How will winners be notified?',
    answer: 'Winners will be notified via email and on the dashboard.',
  },
];

const FaQuestions = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="max-w-4xl mx-6 md:mx-auto my-8">
      <h2 className="text-[1.5rem] font-semibold mb-6 text-center text-white md:text-[3rem]">Frequently Asked <span className='text-[#F5D57A]'>Questions</span></h2>
      <div className="space-y-4">
        {questions.map((q, idx) => (
          <div key={idx} className="rounded-lg overflow-hidden bg-[#1C1A1A] shadow text-white">
            <button
              className="w-full flex items-center justify-between px-4 py-3 focus:outline-none cursor-pointer"
              onClick={() => handleToggle(idx)}
            >
              <span className="flex items-center gap-2 text-left py-3 text-[1rem] md:text-lg">
                <span className="font-semibold text-white">{idx + 1}.</span>
                <span className="font-medium">{q.question}</span>
              </span>
              <span className="ml-4 text-xl">
                {openIndex === idx ? (
                  <IoMdClose className='cursor-pointer' />
                ) : (
                  <FaPlus className='cursor-pointer' />
                )}
              </span>
            </button>
            {openIndex === idx && (
              <div className="px-4 pb-4 text-white animate-fade-in text-sm md:text-lg">
                {q.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FaQuestions