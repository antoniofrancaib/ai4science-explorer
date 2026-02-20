"use client";

import { motion } from "framer-motion";

const cards = [
  {
    title: "Reading the Quadrant Chart",
    content:
      "Top-left = the sweet spot (overlooked + transformative). Bottom-right = avoid (crowded + incremental). Problems near the top-left corner represent the biggest arbitrage opportunities.",
  },
  {
    title: "Connection to Research",
    content:
      "Several problems directly connect to current work on FORGE (protein co-design), rigid-body crystal prediction, Boltzmann sampling, and SE(3) flow matching.",
  },
  {
    title: "Keeping This Alive",
    content:
      "Revisit monthly. Update the crowdedness and impact assessments as the field evolves. Add new problems as you discover them.",
  },
];

export default function GuideSection() {
  return (
    <section id="guide" className="mt-16">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="text-xl font-semibold text-[#1c1c1e] tracking-tight mb-5">
          How to Use This Page
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.08 }}
            className="p-5 rounded-xl bg-white border border-gray-200 shadow-sm"
          >
            <h3 className="text-[13px] font-semibold text-[#333] mb-2">
              {card.title}
            </h3>
            <p className="text-[12px] text-[#999] leading-relaxed">
              {card.content}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
