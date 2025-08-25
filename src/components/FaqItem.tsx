// src/components/FaqItem.tsx

import React from 'react';

interface FaqItemProps {
  question: string;
  answer: string;
}

export const FaqItem = ({ question, answer }: FaqItemProps) => {
  return (
    <div className="text-left py-4">
      <h4 className="font-bold text-lg mb-2">Q: {question}</h4>
      <p className="text-gray-600 leading-relaxed">A: {answer}</p>
    </div>
  );
};