// src/components/FaqItem.tsx

import React from 'react';

interface FaqItemProps {
  question: string;
  answer: string | string[];
}

export const FaqItem = ({ question, answer }: FaqItemProps) => {
  return (
    <div className="text-left py-4">
      <h4 className="font-bold text-lg mb-2">Q: {question}</h4>
      <div className="text-gray-600 leading-relaxed">
        A: {Array.isArray(answer) ? (
          <ul className="list-disc list-inside mt-2 space-y-1">
            {answer.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          answer
        )}
      </div>
    </div>
  );
};