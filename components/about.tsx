"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function About() {
  const { ref } = useSectionInView("About");
  const data = [
    {
      title: "Automation",
      description:
        "I craft solutions to enhance efficiency through automation. I believe that everything can be optimized with the power o scripts.",
    },
    {
      title: "Impactful Leadership",
      description:
        "I try to push the morale and productivity of my teams by focusing and presenting the real-world impact of specific features we need to implement.",
    },
    {
      title: "Continuous Learning",
      description:
        "I embrace the challenge of continuously learning new things.",
    },
    {
      title: "Team Collaboration",
      description:
        "I acknowledge the power of teamwork and I try to bring a mix of independent focused work and team collaboration. Work is done independently, decisions are made in a team.",
    },
  ];

  return (
    <motion.section
      ref={ref}
      className="my-5 max-w-5xl text-center leading-8 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <div>
        {data.map((item, index) => (
          <React.Fragment key={index}>
            <h1 className="text-2xl font-semibold">{item.title}</h1>
            <p className="text-gray-700 dark:text-white/75">
              {item.description}
            </p>
          </React.Fragment>
        ))}
      </div>
    </motion.section>
  );
}
