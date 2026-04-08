import { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    id: "arduino-snake-game",
    title: "Arduino Snake Game",
    description:
      "Classic snake game built on Arduino with an LED matrix display and joystick controls.",
    longDescription:
      "A hardware project implementing the classic Snake game using an Arduino microcontroller, an 8x8 LED matrix, and a joystick module for input. Features include score tracking, increasing difficulty, and smooth animations.",
    techStack: ["Arduino", "C++", "LED Matrix", "Joystick Module"],
    featured: true,
  },
  {
    id: "ece220-maze-solver",
    title: "ECE 220 Maze Solver",
    description:
      "Recursive maze-solving algorithm implemented in C for ECE 220 coursework.",
    longDescription:
      "A maze-solving program written in C that uses recursive backtracking to find a path through a given maze. Developed as part of the ECE 220 curriculum, it reads maze files, explores paths, and outputs the solved maze with the solution path marked.",
    techStack: ["C", "Recursion", "Data Structures"],
    featured: true,
  },
  {
    id: "deca-esb-bubble-tea",
    title: "DECA ESB Bubble Tea Venture",
    description:
      "Entrepreneurship project developing a business plan for a bubble tea startup.",
    longDescription:
      "A comprehensive business plan and pitch deck created for the DECA Entrepreneurship Starting a Business (ESB) event. Includes market research, financial projections, branding strategy, and operational planning for a bubble tea venture.",
    techStack: ["Business Planning", "Market Research", "Financial Modeling"],
    featured: true,
  },
];
