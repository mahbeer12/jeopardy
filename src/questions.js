export const CATEGORIES = [
  "Algebra Vibes",
  "Quad Squad",
  "Trig Tribe",
  "Stat Attack",
  "Geo Geniuses",
];

export const VALUES = [100, 200, 300, 400, 500];

// Index: row * 5 + col  (row = difficulty 0..4, col = category 0..4)
export const QUESTIONS = [

  // ═══════════════════════════════════════════
  // ALGEBRA VIBES  (col 0)
  // ═══════════════════════════════════════════

  // $100
  {
    q: "Solve for x:  3x + 7 = 22",
    a: "x = 5",
    hint: "Subtract 7 from both sides, then divide by 3.",
    solution: "3x + 7 = 22\n3x = 22 − 7\n3x = 15\nx = 5",
    accept: ["5", "x=5", "x = 5"],
  },

  // $200
  {
    q: "Solve for x:  (2x − 1) / 3 = (x + 4) / 2",
    a: "x = 14",
    hint: "Multiply both sides by 6 to clear all fractions, then solve.",
    solution: "Multiply both sides by 6:\n2(2x − 1) = 3(x + 4)\n4x − 2 = 3x + 12\nx = 14",
    accept: ["14", "x=14", "x = 14"],
  },

  // $300
  {
    q: "Solve by substitution:\ny = 2x − 3\n3x + 2y = 8\nFind both x and y.",
    a: "x = 2, y = 1",
    hint: "Substitute y = 2x − 3 into the second equation and solve for x.",
    solution: "3x + 2(2x − 3) = 8\n3x + 4x − 6 = 8\n7x = 14\nx = 2\n\ny = 2(2) − 3 = 1\n\nAnswer: x = 2, y = 1",
    accept: ["x=2 y=1", "x=2,y=1", "2 and 1", "2,1"],
  },

  // $400
  {
    q: "Solve the inequality and express on a number line:\n|2x − 3| < 7",
    a: "−2 < x < 5",
    hint: "Split into two inequalities: −7 < 2x − 3 < 7, then solve all parts.",
    solution: "|2x − 3| < 7\n→ −7 < 2x − 3 < 7\nAdd 3 everywhere:\n−4 < 2x < 10\nDivide by 2:\n−2 < x < 5",
    accept: ["-2<x<5", "−2<x<5", "x>-2 and x<5", "(-2,5)", "-2 to 5"],
  },

  // $500
  {
    q: "Solve:  3/(x − 2) + 1 = 4/(x − 2)\nIdentify any extraneous solutions.",
    a: "x = 3  (x = 2 would be extraneous)",
    hint: "Multiply everything by (x − 2) to clear the fractions, then check your answer.",
    solution: "Multiply through by (x−2):\n3 + (x−2) = 4\nx + 1 = 4\nx = 3\n\nCheck: x = 3 → denominator = 1 ≠ 0 ✓\nx = 2 would make denominator = 0 (extraneous)\n\nAnswer: x = 3",
    accept: ["x=3", "3", "x = 3"],
  },

  // ═══════════════════════════════════════════
  // QUAD SQUAD  (col 1)
  // ═══════════════════════════════════════════

  // $100
  {
    q: "Factor:  x² + 5x + 6",
    a: "(x + 2)(x + 3)",
    hint: "Find two numbers that multiply to 6 AND add to 5.",
    solution: "Need two numbers: product = 6, sum = 5\n→ 2 and 3\n\nx² + 5x + 6 = (x + 2)(x + 3)",
    accept: ["(x+2)(x+3)", "(x+3)(x+2)", "(x + 2)(x + 3)", "(x + 3)(x + 2)"],
  },

  // $200
  {
    q: "Solve:  x² − 9 = 0.  Give both values of x.",
    a: "x = 3  or  x = −3",
    hint: "This is a difference of squares. Factor it as (x+3)(x−3) = 0.",
    solution: "x² − 9 = 0\n(x + 3)(x − 3) = 0\n\nx + 3 = 0  →  x = −3\nx − 3 = 0  →  x = 3\n\nAnswer: x = ±3",
    accept: ["3 and -3", "x=3 or x=-3", "3,-3", "±3", "x=±3", "-3 and 3"],
  },

  // $300
  {
    q: "Convert  y = x² − 6x + 11  to vertex form. State the vertex.",
    a: "y = (x − 3)² + 2;  vertex (3, 2)",
    hint: "Complete the square: take half of −6 = −3, square it = 9. Add and subtract 9.",
    solution: "y = x² − 6x + 11\n= (x² − 6x + 9) − 9 + 11\n= (x − 3)² + 2\n\nVertex = (3, 2)",
    accept: ["(x-3)^2+2", "(x−3)²+2", "y=(x-3)^2+2", "vertex (3,2)", "(3,2)"],
  },

  // $400
  {
    q: "Solve using the quadratic formula:  3x² − 7x + 2 = 0. Give exact roots.",
    a: "x = 2  or  x = 1/3",
    hint: "a = 3, b = −7, c = 2. Discriminant = b² − 4ac = 49 − 24 = 25.",
    solution: "a = 3, b = −7, c = 2\nDiscriminant = 49 − 24 = 25\n\nx = (7 ± 5) / 6\n\nx = 12/6 = 2\nx = 2/6 = 1/3",
    accept: ["x=2 or x=1/3", "2 and 1/3", "2 or 1/3", "1/3 and 2"],
  },

  // $500
  {
    q: "A ball is launched: h(t) = −5t² + 30t + 2 (m, t in seconds).\n(a) What is the maximum height?\n(b) At what time does it hit the ground? (1 decimal)",
    a: "(a) 47 m at t = 3 s\n(b) t ≈ 6.1 s",
    hint: "Max height: use t = −b/(2a). For ground, set h(t) = 0 and use the quadratic formula.",
    solution: "(a) t = −30/(2×−5) = 3 s\nh(3) = −5(9) + 30(3) + 2 = −45 + 90 + 2 = 47 m\n\n(b) −5t² + 30t + 2 = 0\n5t² − 30t − 2 = 0\nt = (30 ± √(900+40)) / 10\nt = (30 ± √940) / 10\nt ≈ (30 + 30.66) / 10 ≈ 6.1 s",
    accept: ["47m t=3 and 6.1", "max 47 hits ground 6.1", "a)47 b)6.1", "47 and 6.1"],
  },

  // ═══════════════════════════════════════════
  // TRIG TRIBE  (col 2)
  // ═══════════════════════════════════════════

  // $100
  {
    q: "In a right triangle, opposite = 6, hypotenuse = 10.  Find sin θ.",
    a: "3/5  (or 0.6)",
    hint: "SOH: sin θ = opposite ÷ hypotenuse.",
    solution: "SOH: sin θ = opposite / hypotenuse\nsin θ = 6/10 = 3/5 = 0.6",
    accept: ["0.6", "6/10", "3/5"],
  },

  // $200
  {
    q: "A right triangle has an angle of 50° and the adjacent side = 9 cm. Find the opposite side (1 decimal).",
    a: "10.7 cm",
    hint: "TOA: tan θ = opposite / adjacent. Multiply both sides by adjacent.",
    solution: "tan 50° = opposite / 9\nopposite = 9 × tan 50°\nopposite = 9 × 1.1918\nopposite ≈ 10.7 cm",
    accept: ["10.7", "10.7cm", "10.7 cm"],
  },

  // $300
  {
    q: "From the top of a 50 m cliff, the angle of depression to a boat is 28°. How far is the boat from the base of the cliff? (1 decimal)",
    a: "94.0 m",
    hint: "Angle of depression = angle of elevation from the boat (alternate angles). Use tan.",
    solution: "Angle of elevation from boat = 28°\ntan 28° = 50 / distance\ndistance = 50 / tan 28°\ndistance = 50 / 0.5317\ndistance ≈ 94.0 m",
    accept: ["94", "94.0", "94.0m", "94.0 m"],
  },

  // $400
  {
    q: "In triangle ABC: a = 12, b = 15, angle A = 35°. Use the sine law to find angle B (nearest degree).",
    a: "B ≈ 46°",
    hint: "sin B / b = sin A / a  →  sin B = (b × sin A) / a.",
    solution: "sin B / 15 = sin 35° / 12\nsin B = 15 × 0.5736 / 12\nsin B ≈ 0.717\nB = sin⁻¹(0.717)\nB ≈ 46°",
    accept: ["46", "46°", "b=46", "b≈46"],
  },

  // $500
  {
    q: "In triangle PQR: p = 7, q = 10, r = 13. Use the cosine law to find angle R (nearest degree).",
    a: "R ≈ 98°",
    hint: "Cosine law: r² = p² + q² − 2pq·cos R. Isolate cos R, then take inverse cosine.",
    solution: "13² = 7² + 10² − 2(7)(10)cos R\n169 = 49 + 100 − 140 cos R\n20 = −140 cos R\ncos R ≈ −0.1429\nR = cos⁻¹(−0.1429)\nR ≈ 98°",
    accept: ["97", "97°", "98", "98°", "r=98", "r≈98"],
  },

  // ═══════════════════════════════════════════
  // STAT ATTACK  (col 3)
  // ═══════════════════════════════════════════

  // $100
  {
    q: "Find the mean of:  4, 7, 9, 12, 3.",
    a: "7",
    hint: "Sum all values, then divide by 5.",
    solution: "Sum = 4 + 7 + 9 + 12 + 3 = 35\nMean = 35 ÷ 5 = 7",
    accept: ["7"],
  },

  // $200
  {
    q: "Dataset:  3, 7, 7, 8, 10, 12, 12, 12, 15\nFind the mode, median, and range.",
    a: "Mode = 12, Median = 10, Range = 12",
    hint: "Mode = most frequent value. Median = middle of sorted list. Range = max − min.",
    solution: "Already sorted: 3, 7, 7, 8, 10, 12, 12, 12, 15\n\nMode = 12 (appears 3×)\nMedian = 10 (5th of 9 values)\nRange = 15 − 3 = 12",
    accept: ["mode 12 median 10 range 12", "12,10,12", "mode=12 median=10 range=12"],
  },

  // $300
  {
    q: "A student scores 72, 85, 90, and 68 on four tests. What score is needed on the 5th test to have a mean of exactly 80?",
    a: "85",
    hint: "Total needed = 80 × 5. Subtract the sum of the four known scores.",
    solution: "Target total = 80 × 5 = 400\nCurrent total = 72 + 85 + 90 + 68 = 315\n5th score = 400 − 315 = 85",
    accept: ["85"],
  },

  // $400
  {
    q: "A jar has 5 red, 4 blue, 3 green chips. Two chips are drawn WITHOUT replacement. What is P(both red)? Express as a fraction.",
    a: "5/33",
    hint: "P(both red) = P(1st red) × P(2nd red | 1st was red). After drawing 1 red, 4 red remain from 11 total.",
    solution: "P(1st red) = 5/12\nP(2nd red | 1st red) = 4/11\n\nP(both red) = 5/12 × 4/11 = 20/132 = 5/33",
    accept: ["5/33", "20/132"],
  },

  // $500
  {
    q: "A set of 6 values has a mean of 14 and a standard deviation of 0. One value is added, changing the mean to 15. What value was added, and what is the new range?",
    a: "Value added = 21; New range = 7",
    hint: "SD = 0 means all 6 values equal the mean. New total = 7 × 15. Subtract old total to find the new value.",
    solution: "SD = 0 → all 6 values = 14\nOriginal sum = 6 × 14 = 84\n\nNew sum = 7 × 15 = 105\n7th value = 105 − 84 = 21\n\nData: 14,14,14,14,14,14,21\nRange = 21 − 14 = 7",
    accept: ["21 and 7", "21, 7", "value=21 range=7", "added 21 range 7"],
  },

  // ═══════════════════════════════════════════
  // GEO GENIUSES  (col 4)
  // ═══════════════════════════════════════════

  // $100
  {
    q: "A circle has radius 5 cm. What is its area? (Leave in terms of π)",
    a: "25π cm²",
    hint: "Area = πr²",
    solution: "Area = πr²\n= π × 5²\n= 25π cm²",
    accept: ["25π", "25pi", "25π cm²", "25 pi"],
  },

  // $200
  {
    q: "A cone has radius 4 cm and height 9 cm. What is its volume? (Use π ≈ 3.14, round to 1 decimal)",
    a: "150.7 cm³",
    hint: "V = (1/3)πr²h",
    solution: "V = (1/3) × 3.14 × 4² × 9\n= (1/3) × 452.16\n= 150.72\n≈ 150.7 cm³",
    accept: ["150.7", "150.7 cm³", "≈150.7"],
  },

  // $300
  {
    q: "A circle with centre O has a chord AB = 16 cm. The perpendicular distance from O to AB is 6 cm. Find the radius.",
    a: "10 cm",
    hint: "The perpendicular from the centre bisects the chord, giving a right triangle with legs 8 and 6.",
    solution: "Perpendicular bisects AB → half chord = 8 cm\nRight triangle: legs 6 and 8, hypotenuse = r\n\nr² = 6² + 8² = 36 + 64 = 100\nr = 10 cm",
    accept: ["10", "10 cm", "r=10"],
  },

  // $400
  {
    q: "Two similar triangles have sides in ratio 3:5. The smaller triangle has area 27 cm². What is the area of the larger triangle?",
    a: "75 cm²",
    hint: "Area ratio = (side ratio)². So the areas are in ratio 9:25.",
    solution: "Side ratio = 3:5\nArea ratio = 9:25\n\n27/A = 9/25\nA = 27 × 25/9 = 75 cm²",
    accept: ["75", "75 cm²", "75cm²"],
  },

  // $500
  {
    q: "A rectangular prism has length (2x+1) cm, width x cm, height 3 cm, and total surface area 222 cm². Find x.",
    a: "x = 6",
    hint: "SA = 2(lw + lh + wh). Substitute in the expressions, simplify, and solve the resulting quadratic.",
    solution: "SA = 2[(2x+1)(x) + (2x+1)(3) + (x)(3)]\n222 = 2[2x²+x + 6x+3 + 3x]\n111 = 2x² + 10x + 3\n2x² + 10x − 108 = 0\nx² + 5x − 54 = 0\n(x+9)(x−6) = 0\nx = 6  (reject x = −9)",
    accept: ["6", "x=6", "x = 6"],
  },
];
