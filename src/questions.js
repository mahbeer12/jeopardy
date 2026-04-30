export const CATEGORIES = [
  "Algebra Vibes",
  "Quad Squad",
  "Trig Tribe",
  "Stat Attack",
  "Geo Geniuses",
  "Brain Busters",
];

export const VALUES = [100, 200, 300, 400, 500];

// ORDER: row-major — index = row * 6 + col

export const QUESTIONS = [

  // ───────── ROW 0 — $100 ─────────

  // Algebra
  {
    q: "Solve for x: 3x + 7 = 22",
    a: "x = 5",
    hint: "Subtract 7 from both sides, then divide by 3.",
    solution: "3x + 7 = 22\n3x = 15\nx = 5",
    accept: ["5", "x=5", "x = 5"],
  },

  // Quad Squad
  {
    q: "Factor: x² + 5x + 6",
    a: "(x + 2)(x + 3)",
    hint: "Find two numbers that multiply to 6 and add to 5.",
    solution: "(x + 2)(x + 3)",
    accept: ["(x+2)(x+3)", "(x+3)(x+2)"],
  },

  // Trig
  {
    q: "In a right triangle, opposite = 6, hypotenuse = 10. Find sin θ.",
    a: "3/5",
    hint: "SOH: sin = opposite/hypotenuse",
    solution: "6/10 = 3/5",
    accept: ["3/5", "0.6"],
  },

  // Stat
  {
    q: "Find the mean of: 4, 7, 9, 12, 3",
    a: "7",
    hint: "Sum ÷ number of values",
    solution: "35 ÷ 5 = 7",
    accept: ["7"],
  },

  // Geo
  {
    q: "Area of circle radius 5 (in terms of π)",
    a: "25π",
    hint: "πr²",
    solution: "π × 25 = 25π",
    accept: ["25π", "25pi"],
  },

  // Brain Busters
  {
    q: "A bat and a ball cost $1.10 total. Bat costs $1 more than ball. How much is ball?",
    a: "$0.05",
    hint: "Not $0.10 — think carefully",
    solution: "0.05 + 1.05 = 1.10",
    accept: ["0.05", "$0.05"],
  },

  // ───────── ROW 1 — $200 ─────────

  { q: "(2x − 1)/3 = (x + 4)/2", a: "x = 14", accept: ["14"] },

  { q: "x² − 9 = 0", a: "±3", accept: ["±3", "3 and -3"] },

  { q: "tan50°, adjacent=9 find opposite", a: "10.7", accept: ["10.7"] },

  { q: "Mode/median/range dataset", a: "12,10,12", accept: ["12,10,12"] },

  { q: "Cone volume r4 h9", a: "150.7", accept: ["150.7"] },

  {
    q: "Double a number +10 = 34. What is it?",
    a: "12",
    accept: ["12"]
  },

  // ───────── ROW 2 — $300 ─────────

  { q: "System: y=2x−3, 3x+2y=8", a: "x=2,y=1", accept: ["2,1"] },

  { q: "Vertex form x²−6x+11", a: "(x−3)²+2", accept: ["(x-3)^2+2"] },

  { q: "Cliff 50m 28° distance", a: "94", accept: ["94"] },

  { q: "Avg 80 test score needed", a: "85", accept: ["85"] },

  { q: "Chord radius problem", a: "10", accept: ["10"] },

  {
    q: "17 sheep: all but 9 run away. How many remain?",
    a: "9",
    accept: ["9"]
  },

  // ───────── ROW 3 — $400 ─────────

  { q: "|2x − 3| < 7", a: "-2 < x < 5", accept: ["-2<x<5"] },

  { q: "3x² − 7x + 2", a: "2 and 1/3", accept: ["2 and 1/3"] },

  { q: "Find angle B (sine law)", a: "46°", accept: ["46"] },

  { q: "P(both red)", a: "5/33", accept: ["5/33"] },

  { q: "Similar triangles area", a: "75", accept: ["75"] },

  {
    q: "3L & 5L jug → measure 4L",
    a: "step solution",
    accept: ["4L method"]
  },

  // ───────── ROW 4 — $500 ─────────

  { q: "Solve rational equation", a: "x=3", accept: ["3"] },

  { q: "Projectile motion max+root", a: "47 and 6.1", accept: ["47","6.1"] },

  { q: "Cosine law angle R", a: "98°", accept: ["98"] },

  { q: "Mean SD=0 change", a: "21,7", accept: ["21,7"] },

  { q: "Surface area prism", a: "6", accept: ["6"] },

  { q: "Switches + bulb logic", a: "logic solution", accept: ["switch puzzle"] },

  // ───────── ROW 5 — BRAIN BUSTERS ─────────

  {
    q: "Bat & ball trick question",
    a: "$0.05",
    accept: ["0.05", "$0.05"]
  },

  {
    q: "2x + 10 = 34",
    a: "12",
    accept: ["12"]
  },

  {
    q: "17 sheep, all but 9 remain",
    a: "9",
    accept: ["9"]
  },

  {
    q: "3L + 5L jug make 4L",
    a: "solution",
    accept: ["4L method"]
  },

  {
    q: "3 switches, 1 bulb, enter once",
    a: "heat/cold method",
    accept: ["switch logic"]
  },

];

export const FINAL_QUESTION = {
  q: `A rectangle has a perimeter of 52 cm. Its length is 6 cm longer than its width.
The area of the rectangle is greater than 160 cm².
Find the dimensions of the rectangle.`,
  a: "Width = 10 cm, Length = 16 cm"
};
