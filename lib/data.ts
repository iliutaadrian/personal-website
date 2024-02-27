import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import configImg from "@/public/config.png";
import casaImg from "@/public/casa.png";
import mindsyncImg from "@/public/mindsync.png";
import tradeImg from "@/public/trade.png";
import translateImg from "@/public/translate.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Engineering Manager",
    location: "Golf Genius",
    description:
      "Led three specialized teams, ensuring effective collaboration and addressing distinct streams and requests.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - present",
  },
  {
    title: "Full Stack Developer",
    location: "Floating Dots",
    description:
      "Build Colorize, a web platform that lets you virtually change the color of your hair and helps hair salons to show their clients if it's a good idea to change their hair color.",
    icon: React.createElement(CgWorkAlt),
    date: "2019",
  },
  {
    title: "Full Stack Developer",
    location: "Emma DK",
    description:
      "Constructed a subscription system from scratch, integrating email, Facebook, and Gmail functionalities for enhanced customer engagement.",
    icon: React.createElement(CgWorkAlt),
    date: "2018 - 2019",
  },
  {
    title: "Full Stack Developer",
    location: "Fortech",
    description:
      "Developed an anonymous email project utilizing Spring Boot, Spring Security, Hibernate with a MySQL database, Java Mail, and Maven for dependencies.",
    icon: React.createElement(LuGraduationCap),
    date: "2017",
  },
] as const;

export const projectsData = [
  {
    title: "Config Files for Ultimate Setup",
    description: "Development setup configuration.",
    tags: ["Nvim", "ZSH", "TMUX", "Alacrity", "Sketchybar"],
    imageUrl: configImg,
  },
  {
    title: "YouTube to Second Brain: MindSync",
    description:
      "Combined two main concepts: Second Brain and YouTube AI summarization to elevate your learning.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: mindsyncImg,
  },
  {
    title: "Translate Swiftly",
    description:
      "Leveraged OpenAI capabilities to translate multiple I18n files (JSON, XML, YML), utilizing custom AI prompts for maintaining high accuracy.",
    tags: ["Next.js", "PostgreSQL", "React", "Tailwind", "Drizzle"],
    imageUrl: translateImg,
  },

  {
    title: "Homelab Server",
    description:
      "Proxmox environment, seamlessly managing virtualization and containerization.",
    tags: ["Proxmox", "Docker", "Ansible"],
    imageUrl: casaImg,
  },
  {
    title: "Credit Spreads Algo - Trading Algorithm",
    description:
      "Automated trading algorithm with machine learning to predict credit spreads.",
    tags: ["Python", "Flask", "Docker", "YHOO Finance API", "Telegram Bot"],
    imageUrl: tradeImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Nvim",
] as const;
