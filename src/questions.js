export const CATEGORIES = [
  "Algebra Vibes",
  "Quad Squad",
  "Trig Tribe",
  "Stat Attack",
  "Geo Geniuses",
];

export const VALUES = [100, 200, 300, 400, 500];

// 5 categories × 5 values = 25 questions
// Index: row * 5 + col  (row = difficulty 0..4, col = category 0..4)
export const QUESTIONS = [
  // --- Algebra Vibes (col 0) ---
  {
    q: "Solve for x:  3x + 7 = 22",
    a: "5",
    hint: "Isolate x — subtract 7, then divide by 3.",
    accept: ["5", "x=5", "x = 5"],
  },
  {
    q: "Simplify:  2(3x − 4) + 5x",
    a: "11x − 8",
    hint: "Expand the brackets first, then collect like terms.",
    accept: ["11x-8", "11x−8", "11x - 8"],
  },
  {
    q: "If f(x) = 2x² − 3x + 1, find f(3).",
    a: "10",
    hint: "Substitute x = 3 into every term carefully.",
    accept: ["10"],
  },
  {
    q: "The sum of two consecutive integers is 47. What is the larger integer?",
    a: "24",
    hint: "Let the integers be n and n + 1, then solve.",
    accept: ["24"],
  },
  {
    q: "Solve the system: x + y = 10 and 2x − y = 5. What is x?",
    a: "5",
    hint: "Add the two equations to eliminate y.",
    accept: ["5", "x=5", "x = 5"],
  },

  // --- Quad Squad (col 1) ---
  {
    q: "Factor:  x² + 5x + 6",
    a: "(x + 2)(x + 3)",
    hint: "Find two numbers that multiply to 6 AND add to 5.",
    accept: ["(x+2)(x+3)", "(x+3)(x+2)", "(x + 2)(x + 3)", "(x + 3)(x + 2)"],
  },
  {
    q: "Solve:  x² − 9 = 0.  Give both values of x.",
    a: "x = 3 or x = −3",
    hint: "Difference of squares: a² − b² = (a + b)(a − b).",
    accept: ["3 and -3", "x=3 or x=-3", "3,-3", "±3", "x=±3", "-3 and 3"],
  },
  {
    q: "What is the vertex of  y = (x − 4)² + 7?",
    a: "(4, 7)",
    hint: "Vertex form: y = a(x − h)² + k  →  vertex is (h, k).",
    accept: ["(4,7)", "4,7", "h=4 k=7", "4 7"],
  },
  {
    q: "Use the quadratic formula on  x² − 5x + 6 = 0.  What are the roots?",
    a: "x = 2 and x = 3",
    hint: "x = (5 ± √(25 − 24)) / 2",
    accept: ["2 and 3", "x=2,x=3", "2,3", "x=2 or x=3", "3 and 2"],
  },
  {
    q: "For  y = −2x² + 8x − 5, does the parabola open up or down? What is the axis of symmetry?",
    a: "Opens down;  x = 2",
    hint: "Axis of symmetry: x = −b / (2a).  Sign of 'a' tells direction.",
    accept: ["down x=2", "opens down, x=2", "down, x=2", "down x = 2"],
  },

  // --- Trig Tribe (col 2) ---
  {
    q: "In a right triangle, the opposite side = 6 and hypotenuse = 10.  What is sin θ?",
    a: "0.6",
    hint: "SOH: sin θ = opposite ÷ hypotenuse.",
    accept: ["0.6", "6/10", "3/5"],
  },
  {
    q: "An angle measures 30°.  What is cos 30°?",
    a: "√3 / 2",
    hint: "Recall the 30-60-90 special triangle with sides 1, √3, 2.",
    accept: ["√3/2", "root3/2", "0.866", "√3 / 2"],
  },
  {
    q: "A 10 m ladder leans against a wall at 60° to the ground.  How high does it reach? (1 decimal)",
    a: "8.7 m",
    hint: "sin 60° = opposite / hypotenuse  →  height = 10 × sin 60°.",
    accept: ["8.7", "8.7m", "≈8.7", "8.7 m"],
  },
  {
    q: "The angle of elevation to a treetop from 20 m away is 40°.  How tall is the tree? (1 decimal)",
    a: "16.8 m",
    hint: "tan θ = opposite / adjacent  →  height = 20 × tan 40°.",
    accept: ["16.8", "16.8m", "≈16.8", "16.8 m"],
  },
  {
    q: "Sine law:  a / sin A = b / sin B.  If a = 8, A = 45°, B = 60°, find b (1 decimal).",
    a: "9.8",
    hint: "b = a · sin B / sin A.  sin 45° ≈ 0.707,  sin 60° ≈ 0.866.",
    accept: ["9.8", "≈9.8", "9.8 units"],
  },

  // --- Stat Attack (col 3) ---
  {
    q: "Find the mean of:  4, 7, 9, 12, 3.",
    a: "7",
    hint: "Add all values, then divide by how many there are.",
    accept: ["7"],
  },
  {
    q: "What is the median of:  15, 8, 22, 10, 18?",
    a: "15",
    hint: "Sort the data first — the middle value is the median.",
    accept: ["15"],
  },
  {
    q: "A bag has 4 red, 3 blue, 2 green marbles.  P(picking red) = ?",
    a: "4/9",
    hint: "P = favourable outcomes ÷ total outcomes.",
    accept: ["4/9", "0.44", "0.444"],
  },
  {
    q: "Two independent events each have P = 0.5.  What is P(both happen)?",
    a: "0.25",
    hint: "P(A and B) = P(A) × P(B) for independent events.",
    accept: ["0.25", "1/4", "25%"],
  },
  {
    q: "A dataset has Q1 = 20 and Q3 = 35.  What is the IQR?",
    a: "15",
    hint: "IQR = Q3 − Q1.",
    accept: ["15"],
  },

  // --- Geo Geniuses (col 4) ---
  {
    q: "A circle has radius 5 cm.  What is its area? (Leave in terms of π)",
    a: "25π cm²",
    hint: "Area = πr².",
    accept: ["25π", "25pi", "25π cm²", "25 pi"],
  },
  {
    q: "Find the hypotenuse of a right triangle with legs 5 and 12.",
    a: "13",
    hint: "Pythagorean theorem:  a² + b² = c².",
    accept: ["13"],
  },
  {
    q: "A cylinder: radius 3 cm, height 7 cm.  Volume? (Use π ≈ 3.14, round to 1 decimal)",
    a: "197.9 cm³",
    hint: "V = πr²h  →  plug in r = 3, h = 7.",
    accept: ["197.9", "≈197.9", "197.9 cm³"],
  },
  {
    q: "Two parallel lines cut by a transversal.  One co-interior angle = 65°.  The other = ?",
    a: "115°",
    hint: "Co-interior (same-side interior) angles add up to 180°.",
    accept: ["115", "115°"],
  },
  {
    q: "A square has perimeter 36 cm.  What is its area?",
    a: "81 cm²",
    hint: "Find side length first: P = 4s,  then Area = s².",
    accept: ["81", "81 cm²"],
  },
];
