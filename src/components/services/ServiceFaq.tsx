"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import type { ServiceFAQ } from "@/lib/services";

type Props = {
  items: ServiceFAQ[];
};

export default function ServiceFaq({ items }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="rounded-[28px] border border-[#004aad]/10 bg-white shadow-[0_18px_60px_rgba(0,0,0,0.04)]">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={item.question}
            className="border-b border-[#004aad]/10 last:border-b-0"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left md:px-7 md:py-6"
            >
              <span className="text-[1rem] font-medium leading-[1.5] tracking-[-0.02em] text-[#111] md:text-[1.08rem]">
                {item.question}
              </span>
              <span className="shrink-0 text-[#004aad]">
                {isOpen ? <Minus size={18} /> : <Plus size={18} />}
              </span>
            </button>

            <div
              className={`grid transition-all duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-[0.97rem] leading-7 text-[#3a3a3a] md:px-7 md:pb-6">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}