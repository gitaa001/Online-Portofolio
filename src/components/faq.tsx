'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItemProps {
  title: string;
  body1: string;
  semititle: string;
  body2: string;
  imageSrc?: string;
  alt?: string;
}

const FAQItem = ({ title, body1, semititle, body2, imageSrc, alt }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="py-6 border-b border-gray-700 mt-10">
      <button
        className="flex w-full items-center justify-between text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-2xl font-semibold text-[#D4FFA9]">{title}</span>
        <ChevronDown
          className={`h-5 w-5 text-gray-400 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-screen mt-4' : 'max-h-0'
        }`}
      >
        <p className="text-white text-sm text-[16px] mb-3">{body1}</p>
        <p className="text-white font-semibold text-[20px] text-base mb-1">{semititle}</p>
        <p className="text-white text-[16px] text-sm mb-4">{body2}</p>
        {imageSrc && (
          <img
            src={imageSrc}
            alt={alt || title}
            className="rounded-lg w-full max-w-md mx-auto"
          />
        )}
      </div>
    </div>
  );
};

const faqs = [
  {
    title: 'AI Regulation',
    body1:
      "AI opens up new possibilities, but also raises concerns about originality, authorship, and ethical boundaries—especially for artists. I've always been into both tech and art, and I've been thinking a lot about how to connect the two. With all the buzz around generative AI lately, there's been a lot of tension between the tech crowd and artists (they often see things really differently). ",
    semititle: 'Mission',
    body2:
      "Since I get where both sides are coming from, I'd love to be part of finding a middle ground. I love to discuss it with my friends. I want to help shape fair, thoughtful boundaries for how AI is used in creative work, so it becomes something that supports artists, not overshadows them. ",
    imageSrc: "/general/ai.png",
    alt: 'AI and Art'
  },
  {
    title: 'Education',
    body1:
      "Lately, I've been really into watching BBC, CNBC, Tempo, Narasi—basically anything that talks about what's going on in Indonesia. There's one topic I never skip: education. Since junior high school, I've always studied in different cities or districts, and of course I understand how unequal education can be. The quality just isn't the same everywhere. And honestly, sometimes it feels more like a privilege. I've even visited some schools to talk about how important education is. But sadly, many students told me they couldn't imagine going to a good university. It's too far, and it costs too much.",
    semititle: 'Mission',
    body2:
      "That's why this issue really gets my attention. My personal mission is to be part of the change. I want to help make education feel more reachable, more fair, for everyone. Maybe I'll start by joining social activity, teaching children and doing what I can to share what I've learned. There are some communities around me.",
    imageSrc: '/general/education.png',
    alt: 'Equal Education'
  }
];

export default function FAQ() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8 mt-40">
        <h1 className='flex text-center justify-center text-4xl'>
            Mission  <span className="text-[#D4FFA9] italic font-medium">Statement</span>
        </h1>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            title={faq.title}
            body1={faq.body1}
            semititle={faq.semititle}
            body2={faq.body2}
            imageSrc={faq.imageSrc}
            alt={faq.alt}
          />
        ))}
      </div>
    </div>
  );
}
