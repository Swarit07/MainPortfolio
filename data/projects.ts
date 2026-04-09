import { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    id: "space-jumper-3d",
    title: "Space Jumper 3D",
    description:
      "Cross-platform 3D game integrating Arduino hardware with Unity for motion-based gameplay via joystick and LED matrix feedback.",
    longDescription:
      "Developed a cross-platform 3D game integrating Arduino hardware with Unity, enabling motion-based gameplay via joystick controller and LED matrix feedback. Programmed core game mechanics in C# including collision detection, physics, and scoring system. Managed serial communication between Arduino and Unity for real-time hardware-software interaction.",
    techStack: ["Arduino", "Unity", "C#", "Serial Communication"],
    type: "personal",
    date: "2024",
    featured: true,
  },
  {
    id: "straight-run-car",
    title: "Straight-Run Car with Speed Control",
    description:
      "Dual-motor PWM control circuit using nMOS transistors and Schmitt trigger oscillators for independent wheel balance and full-speed control.",
    longDescription:
      "Designed and built a dual-motor PWM control circuit using nMOS transistors, Schmitt trigger oscillators, and potentiometers to achieve independent wheel balance and full-speed control. Combined two PWM signals at an 8:1 frequency ratio using a two-nMOS logical-AND circuit. Validated with oscilloscope analysis and extended to a light-seeking car using photoresistors.",
    techStack: ["Circuit Design", "PWM", "nMOS", "Oscilloscope", "Sensors"],
    type: "lab",
    date: "March 2026",
    featured: true,
  },
  {
    id: "vending-machine-fsm",
    title: "Vending Machine FSM",
    description:
      "3-bit sequential finite state machine for a coin-accepting vending machine controller, designed in Vivado and built on a physical breadboard.",
    longDescription:
      "Designed a 3-bit sequential finite state machine (8 states) for a coin-accepting vending machine controller using NAND, NOR, and NOT gates with D flip-flops in Xilinx Vivado. Abstracted combinational output logic into a reusable IP block. Implemented on a physical breadboard using 7474/74175 DIP flip-flops and verified all 16-step state transition sequences.",
    techStack: ["Verilog", "Xilinx Vivado", "FSM", "Digital Logic", "FPGA"],
    type: "lab",
    date: "October 2025",
    featured: true,
  },
  {
    id: "study-space-occupancy",
    title: "Study Space Occupancy Detection",
    description:
      "Real-time computer vision pipeline to detect and count occupants in indoor study spaces with a mobile app interface for availability.",
    longDescription:
      "Built a real-time computer vision pipeline using Python and OpenCV to detect and count occupants in indoor study spaces, enabling live busyness estimation. Designed a Figma-based mobile application interface to display space availability and direct students to open study locations.",
    techStack: ["Python", "OpenCV", "Computer Vision", "Figma", "UI Design"],
    type: "course",
    date: "November 2025",
    featured: true,
  },
  {
    id: "maze-solver",
    title: "Maze Solver",
    description:
      "Recursive depth-first search maze solver in C that reads maze structure from file and finds a path with backtracking visualization.",
    longDescription:
      "Implemented a recursive depth-first search (DFS) maze solver in C that reads maze structure from a text file and finds a path from start to end. Built four core functions: createMaze (dynamic memory allocation + file parsing), destroyMaze, printMaze, and solveMazeDFS. Solution path cells marked with *, dead-end visited cells marked with ~.",
    techStack: ["C", "Recursion", "DFS", "Dynamic Memory", "File I/O"],
    type: "course",
  },
  {
    id: "2048-game",
    title: "2048 Game",
    description:
      "Terminal-based 2048 game in C on a variable-sized grid with tile merging, score tracking, and dynamic board resizing.",
    longDescription:
      "Co-developed a terminal-based 2048 game in C on a variable-sized grid. Implemented make_game, remake_game, get_cell, four directional move functions, and legal_move_check. Handled tile merging logic (no double-merge per move), score tracking, and dynamic board resizing.",
    techStack: ["C", "Game Logic", "Dynamic Memory", "Pointers"],
    type: "course",
  },
  {
    id: "sudoku-solver",
    title: "Sudoku Solver",
    description:
      "Sudoku solver in C using recursive backtracking with row, column, and 3x3 zone constraint checking.",
    longDescription:
      "Implemented a Sudoku solver in C using recursive backtracking on a 9x9 grid. Built constraint-checking functions for row, column, and 3x3 zone validity before placing each number. Designed solve_sudoku to systematically try digits 1-9 and backtrack on failure until the board is complete.",
    techStack: ["C", "Recursion", "Backtracking", "Algorithms"],
    type: "course",
  },
  {
    id: "game-of-life",
    title: "Conway's Game of Life",
    description:
      "Conway's Game of Life in C using a 1D array representation of a 2D board with neighbor counting and stability detection.",
    longDescription:
      "Implemented Conway's Game of Life in C using a 1D array representation of a 2D board. Built countLiveNeighbor, updateBoard, and aliveStable functions with correct out-of-bounds handling. Used row-major indexing (board[row * width + col]) to navigate the flattened 2D grid structure.",
    techStack: ["C", "Arrays", "Cellular Automata", "Game Logic"],
    type: "course",
  },
  {
    id: "codebreaker",
    title: "Codebreaker (Mastermind)",
    description:
      "Terminal-based Mastermind-style code-breaking game in C with pseudo-random number generation and match counting logic.",
    longDescription:
      "Built a terminal-based Mastermind-style code-breaking game in C with pseudo-random number generation. Implemented set_seed (sscanf input validation + srand), start_game (RNG solution code generation), and make_guess (perfect + misplaced match counting logic). Handled edge cases including invalid input formatting and out-of-range values.",
    techStack: ["C", "Input Validation", "RNG", "Game Logic"],
    type: "course",
  },
  {
    id: "rpn-calculator",
    title: "RPN Stack Calculator",
    description:
      "LC-3 assembly program evaluating reverse polish notation expressions using a stack with hex output.",
    longDescription:
      "Wrote an LC-3 assembly program to evaluate reverse polish notation (postfix) expressions using a stack. Implemented EVALUATE, ADD, SUBTRACT, MULTIPLY, DIVIDE, POWER, and PRINT_HEX subroutines with proper JSR/RET calling conventions. Handled invalid expression detection (stack underflow, leftover operands) and printed results in 4-digit hexadecimal.",
    techStack: ["LC-3 Assembly", "Stack", "Subroutines", "RPN"],
    type: "course",
  },
  {
    id: "letter-frequency-histogram",
    title: "Letter Frequency Histogram",
    description:
      "LC-3 assembly histogram program printing letter frequency counts in hexadecimal format across 27 bins.",
    longDescription:
      "Extended a histogram program in LC-3 assembly to print letter frequency counts in hexadecimal format. Implemented a loop over 27 bins (@ symbol + A-Z), converting 16-bit values to ASCII hex digits for display. Verified output against three scripted test cases using lc3sim and diff comparison.",
    techStack: ["LC-3 Assembly", "Hex Printing", "Loops", "Bitwise Ops"],
    type: "course",
  },
];
