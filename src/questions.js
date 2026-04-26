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
    hint: "Cross-multiply (or multiply both sides by 6) to clear the fractions.",
    solution: "Multiply both sides by 6:\n6 × (2x−1)/3 = 6 × (x+4)/2\n2(2x − 1) = 3(x + 4)\n4x − 2 = 3x + 12\n4x − 3x = 12 + 2\nx = 14",
    accept: ["14", "x=14", "x = 14"],
  },

  // $300
  {
    q: "If g(x) = 3x² − 2x + 5, find g(−2) and state whether the result is positive or negative.",
    a: "21  (positive)",
    hint: "Substitute x = −2. Watch the signs: (−2)² = 4.",
    solution: "g(−2) = 3(−2)² − 2(−2) + 5\n= 3(4) + 4 + 5\n= 12 + 4 + 5\n= 21\n\n21 > 0, so the result is positive.",
    accept: ["21", "21 positive", "21, positive"],
  },

  // $400
  {
    q: "Solve the system by substitution:\ny = 2x − 3\n3x + 2y = 8\nFind both x and y.",
    a: "x = 2, y = 1",
    hint: "Substitute y = 2x − 3 directly into the second equation.",
    solution: "Substitute y = 2x − 3 into 3x + 2y = 8:\n3x + 2(2x − 3) = 8\n3x + 4x − 6 = 8\n7x = 14\nx = 2\n\ny = 2(2) − 3 = 1\n\nAnswer: x = 2, y = 1",
    accept: ["x=2 y=1", "x=2,y=1", "2 and 1", "2,1"],
  },

  // $500
  {
    q: "The difference of two numbers is 7. Three times the larger minus twice the smaller equals 31. Find both numbers.",
    a: "Larger = 17, Smaller = 10",
    hint: "Set up two equations. Let L = larger, S = smaller. L − S = 7 and 3L − 2S = 31.",
    solution: "Let L = larger, S = smaller.\nEquation 1: L − S = 7  →  L = S + 7\nEquation 2: 3L − 2S = 31\n\nSubstitute L = S + 7:\n3(S + 7) − 2S = 31\n3S + 21 − 2S = 31\nS = 10\n\nL = 10 + 7 = 17\n\nAnswer: Larger = 17, Smaller = 10",
    accept: ["17 and 10", "17,10", "larger=17 smaller=10", "l=17 s=10"],
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
    q: "Factor completely:  2x² + 7x − 15",
    a: "(2x − 3)(x + 5)",
    hint: "Try decomposition: find two numbers that multiply to 2 × (−15) = −30 and add to 7.",
    solution: "Multiply a × c = 2 × (−15) = −30\nFind two numbers: product = −30, sum = 7\n→ 10 and −3\n\n2x² + 10x − 3x − 15\n= 2x(x + 5) − 3(x + 5)\n= (2x − 3)(x + 5)",
    accept: ["(2x-3)(x+5)", "(2x − 3)(x + 5)", "(x+5)(2x-3)"],
  },

  // $300
  {
    q: "Convert  y = x² − 6x + 11  to vertex form. State the vertex.",
    a: "y = (x − 3)² + 2;  vertex (3, 2)",
    hint: "Complete the square. Take half of −6, square it, then add and subtract inside.",
    solution: "y = x² − 6x + 11\n\nComplete the square:\nHalf of −6 = −3;  (−3)² = 9\n\ny = (x² − 6x + 9) − 9 + 11\ny = (x − 3)² + 2\n\nVertex = (3, 2)",
    accept: ["(x-3)^2+2", "(x−3)²+2", "vertex (3,2)", "y=(x-3)^2+2 vertex (3,2)", "(x-3)squared+2"],
  },

  // $400
  {
    q: "Solve using the quadratic formula:  3x² − 7x + 2 = 0. Give exact roots.",
    a: "x = 2  or  x = 1/3",
    hint: "a = 3, b = −7, c = 2. Calculate the discriminant first: b² − 4ac.",
    solution: "a = 3, b = −7, c = 2\nDiscriminant = (−7)² − 4(3)(2) = 49 − 24 = 25\n\nx = (7 ± √25) / 6\nx = (7 ± 5) / 6\n\nx = 12/6 = 2\nx = 2/6 = 1/3\n\nRoots: x = 2 or x = 1/3",
    accept: ["x=2 or x=1/3", "2 and 1/3", "2 or 1/3", "x=2,x=1/3", "1/3 and 2"],
  },

  // $500
  {
    q: "A ball is thrown upward. Its height is h(t) = −5t² + 20t + 2 (metres, t in seconds). What is the maximum height and when is it reached?",
    a: "Max height = 22 m at t = 2 s",
    hint: "The max is at the vertex. Use t = −b/(2a), then substitute back to find h.",
    solution: "h(t) = −5t² + 20t + 2\na = −5, b = 20\n\nTime at vertex:\nt = −b / (2a) = −20 / (2×−5) = −20/−10 = 2 s\n\nMax height:\nh(2) = −5(4) + 20(2) + 2\n= −20 + 40 + 2\n= 22 m\n\nMax height = 22 m at t = 2 s",
    accept: ["22m at t=2", "22 at 2 seconds", "22m t=2s", "max 22 time 2"],
  },

  // ═══════════════════════════════════════════
  // TRIG TRIBE  (col 2)
  // ═══════════════════════════════════════════

  // $100
  {
    q: "In a right triangle, opposite = 6, hypotenuse = 10.  Find sin θ.",
    a: "3/5  (or 0.6)",
    hint: "SOH: sin θ = opposite ÷ hypotenuse.",
    solution: "SOH: sin θ = opposite / hypotenuse\nsin θ = 6 / 10 = 3/5 = 0.6",
    accept: ["0.6", "6/10", "3/5"],
  },

  // $200
  {
    q: "A right triangle has one angle of 50° and an adjacent side of 9 cm. Find the opposite side (1 decimal).",
    a: "10.7 cm",
    hint: "TOA: tan θ = opposite / adjacent. Solve for opposite.",
    solution: "tan 50° = opposite / adjacent\nopposite = 9 × tan 50°\nopposite = 9 × 1.1918\nopposite ≈ 10.7 cm",
    accept: ["10.7", "10.7cm", "10.7 cm", "≈10.7"],
  },

  // $300
  {
    q: "From the top of a 50 m cliff, the angle of depression to a boat is 28°. How far is the boat from the base of the cliff? (1 decimal)",
    a: "94.0 m",
    hint: "The angle of depression equals the angle of elevation from the boat. Use tan.",
    solution: "Angle of elevation from boat = 28° (alternate angles)\nOpposite = 50 m (cliff height)\nAdjacent = distance from base\n\ntan 28° = 50 / distance\ndistance = 50 / tan 28°\ndistance = 50 / 0.5317\ndistance ≈ 94.0 m",
    accept: ["94", "94.0", "94.0m", "94.0 m", "≈94"],
  },

  // $400
  {
    q: "In triangle ABC: a = 12, b = 15, angle A = 35°. Use the sine law to find angle B (to the nearest degree).",
    a: "B ≈ 46°",
    hint: "sin B / b = sin A / a → sin B = b × sin A / a.",
    solution: "Sine law: sin B / b = sin A / a\n\nsin B = b × sin A / a\nsin B = 15 × sin 35° / 12\nsin B = 15 × 0.5736 / 12\nsin B = 8.604 / 12\nsin B ≈ 0.717\n\nB = sin⁻¹(0.717)\nB ≈ 46°",
    accept: ["46", "46°", "b=46", "b≈46", "≈46°"],
  },

  // $500
  {
    q: "In triangle PQR: p = 7, q = 10, r = 13. Use the cosine law to find angle R to the nearest degree.",
    a: "R ≈ 97°",
    hint: "Cosine law: r² = p² + q² − 2pq·cos R. Solve for cos R, then find R.",
    solution: "Cosine law: r² = p² + q² − 2pq cos R\n\n13² = 7² + 10² − 2(7)(10) cos R\n169 = 49 + 100 − 140 cos R\n169 = 149 − 140 cos R\n20 = −140 cos R\ncos R = −20/140 = −1/7 ≈ −0.1429\n\nR = cos⁻¹(−0.1429)\nR ≈ 98°\n\n(Accept 97°–98°)",
    accept: ["97", "97°", "98", "98°", "r=97", "r≈97", "r=98", "r≈98"],
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
    q: "A data set is: 3, 7, 7, 8, 10, 12, 12, 12, 15.  Find the mode, median, and range.",
    a: "Mode = 12, Median = 10, Range = 12",
    hint: "Mode = most frequent. Median = middle value (5th of 9). Range = max − min.",
    solution: "Sorted: 3, 7, 7, 8, 10, 12, 12, 12, 15\n\nMode = 12 (appears 3 times)\nMedian = 10 (5th of 9 values)\nRange = 15 − 3 = 12",
    accept: ["mode 12 median 10 range 12", "12 10 12", "mode=12 median=10 range=12"],
  },

  // $300
  {
    q: "A student scores 72, 85, 90, and 68 on four tests. What score do they need on the 5th test to achieve a mean of exactly 80?",
    a: "85",
    hint: "Target total = 80 × 5. Subtract the four known scores.",
    solution: "Target total = 80 × 5 = 400\nCurrent total = 72 + 85 + 90 + 68 = 315\n\n5th score = 400 − 315 = 85",
    accept: ["85"],
  },

  // $400
  {
    q: "A jar has 5 red, 4 blue, 3 green chips. Two chips are drawn WITHOUT replacement. What is P(both red)? Express as a fraction.",
    a: "5/33",
    hint: "P(both red) = P(1st red) × P(2nd red | 1st was red). After 1 red is drawn, 4 red remain from 11 total.",
    solution: "P(1st red) = 5/12\nP(2nd red | 1st red) = 4/11\n\nP(both red) = 5/12 × 4/11\n= 20/132\n= 5/33",
    accept: ["5/33", "20/132"],
  },

  // $500
  {
    q: "A set of 6 values has a mean of 14 and a standard deviation of 0.  One value is added, changing the mean to 15.  What was the value added, and what is the new range?",
    a: "Value added = 21; Range = 0",
    hint: "If SD = 0, all 6 original values equal the mean. Find the 7th value from the new mean. Range = max − min.",
    solution: "If SD = 0, all 6 values = 14.\nOriginal sum = 6 × 14 = 84\n\nNew mean = 15 with 7 values:\nNew sum = 7 × 15 = 105\n\n7th value = 105 − 84 = 21\n\nValues: 14,14,14,14,14,14,21\nRange = 21 − 14 = 7",
    accept: ["21 range 7", "value 21 range 7", "21, 7", "added=21 range=7"],
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
    solution: "V = (1/3)πr²h\n= (1/3) × 3.14 × 4² × 9\n= (1/3) × 3.14 × 16 × 9\n= (1/3) × 452.16\n= 150.72\n≈ 150.7 cm³",
    accept: ["150.7", "150.7 cm³", "≈150.7"],
  },

  // $300
  {
    q: "A circle with centre O has a chord AB = 16 cm. The perpendicular distance from O to AB is 6 cm. Find the radius.",
    a: "10 cm",
    hint: "The perpendicular from the centre bisects the chord. You get a right triangle with legs 6 and 8.",
    solution: "The perpendicular bisects AB → half of AB = 8 cm.\nRight triangle: legs = 6 and 8, hypotenuse = radius.\n\nr² = 6² + 8²\nr² = 36 + 64\nr² = 100\nr = 10 cm",
    accept: ["10", "10 cm", "r=10"],
  },

  // $400
  {
    q: "Two similar triangles have corresponding sides in ratio 3:5. The area of the smaller triangle is 27 cm². What is the area of the larger triangle?",
    a: "75 cm²",
    hint: "If the side ratio is k, the area ratio is k². So area scales by (5/3)².",
    solution: "Side ratio = 3:5\nArea ratio = 3²:5² = 9:25\n\n27/A = 9/25\nA = 27 × 25/9\nA = 675/9\nA = 75 cm²",
    accept: ["75", "75 cm²", "75cm²"],
  },

  // $500
  {
    q: "A rectangular prism has length (2x+1) cm, width x cm, height 3 cm, and surface area 222 cm². Find x.",
    a: "x = 6",
    hint: "SA = 2(lw + lh + wh). Substitute the expressions, set equal to 222, and solve the quadratic.",
    solution: "l = 2x+1, w = x, h = 3\n\nSA = 2(lw + lh + wh)\n222 = 2[(2x+1)(x) + (2x+1)(3) + (x)(3)]\n111 = 2x² + x + 6x + 3 + 3x\n111 = 2x² + 10x + 3\n2x² + 10x − 108 = 0\nx² + 5x − 54 = 0\n(x + 9)(x − 6) = 0\n\nx = 6  (reject x = −9, length must be positive)",
    accept: ["6", "x=6", "x = 6"],
  },
];
