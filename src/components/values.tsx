import { useState } from "react";
import IsiValue from "./isi-value"; // pastikan path-nya benar

const valueData = [
  {
    title: "Curious Explorer",
    content: `When I jumped into tech world, I knew really nothing and could do very little. I was really no one in the community I&apos;m living in right now. But, I found it all interesting. My curiosity pushed me to study, to learn, to try everything I could. **I&apos;ve always believed it&apos;s better to be a growing fish in a forever growing pond.** I like pushing myself beyond my comfort zones to expand my capabilities.`,
  },
  {
    title: "Self Secure",
    content: `I&apos;ve had my phase of insecurity, just like anyone else—moments where I doubted everything I had. But through time, i&apos;ve grown into someone who feels home within myself. I no longer feel pressured by society to seek acceptance. I&apos;m confident in what I have, what I believe, and what I can do. I&apos;ve stopped chasing external validation and not see my lacks as weaknessess.`,
  },
  {
    title: "Grit & Idealism",
    content: `“You may say I&apos;m a dreamer…” by John Lennon sometimes feels relatable for me. But I work for them. I work for my dream. I&apos;ve faced failures, it&apos;s hurt—not gonna lie. But each built my resilience. Now, it&apos;s no longer hard for me to wake up after failing. I know there are many ways to Rome, and I will try them all.`,
  },
  {
    title: "Positive Minded",
    content: `I&apos;m a listener. my friends often come to me when they need someone to talk to. I&apos;m try to give space, empathy, and my presence instead of rush someone to give answers.  I believe that even in tough situations, there&apos;s always a way forward—and I&apos;m committed to find it.`,
  },
];

const Values = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-4">
        {valueData.map((item, index) => (
          <button
            key={index}
            className="w-[220px] h-[60px]
              text-white border border-white/20 rounded-[18px]
              backdrop-blur-md bg-[#464040]/40
              flex items-center justify-center
              hover:bg-[#D4FFA9] hover:text-black
              transition-all duration-300
              active:scale-95"
            onClick={() => setSelected(index)}
          >
            {item.title}
          </button>
        ))}
      </div>

      {selected !== null && (
        <IsiValue
          title={valueData[selected].title}
          content={valueData[selected].content}
          onClose={() => setSelected(null)}
        />
      )}
    </>
  );
};

export default Values;
