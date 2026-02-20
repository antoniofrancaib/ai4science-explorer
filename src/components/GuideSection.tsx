"use client";

import { motion } from "framer-motion";

const cards = [
  {
    icon: "💡",
    title: "Reading the Quadrant Chart",
    content:
      "Top-left = the sweet spot (overlooked + transformative). Bottom-right = avoid (crowded + incremental). Problems near the top-left corner represent the biggest arbitrage opportunities — high potential impact with relatively few people working on them.",
  },
  {
    icon: "🔗",
    title: "Connection to Research",
    content:
      "Several of these problems directly connect to current work on FORGE (protein co-design), rigid-body crystal prediction, Boltzmann sampling, and SE(3) flow matching. The startup shortlist is weighted toward problems where specific technical expertise gives an unfair advantage.",
  },
  {
    icon: "📝",
    title: "Keeping This Alive",
    content:
      "Revisit monthly. As you read papers, attend conferences, or have conversations, update the crowdedness and impact assessments. Move problems between quadrants as the field evolves. Add new problems as you discover them.",
  },
];

export default function GuideSection() {
  return (
    <section className="mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-3 mb-6">
          <span className="text-2xl">🧭</span>
          <h2 className="text-2xl font-bold text-white/90 tracking-tight">
            How to Use This Page
          </h2>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.08] transition-colors"
          >
            <span className="text-xl mb-3 block">{card.icon}</span>
            <h3 className="text-[14px] font-semibold text-white/80 mb-2">
              {card.title}
            </h3>
            <p className="text-[12px] text-white/40 leading-relaxed">
              {card.content}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
