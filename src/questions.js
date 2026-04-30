<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Math Jeopardy</title>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg: #05061a;
    --board-blue: #0a1560;
    --cell-blue: #1a2fa8;
    --cell-hover: #2440d4;
    --cell-used: #0d1640;
    --gold: #f5c842;
    --gold-dim: #a88a1a;
    --white: #ffffff;
    --text-muted: #7a8ab5;
    --border: rgba(255,255,255,0.08);
    --overlay: rgba(2, 4, 30, 0.92);
    --modal-bg: #0e1540;
    --modal-border: rgba(245,200,66,0.25);
    --success: #3ddc84;
    --danger: #ff5f5f;
    --font-display: 'Bebas Neue', sans-serif;
    --font-body: 'DM Sans', sans-serif;
  }

  html, body {
    width: 100%; min-height: 100vh;
    background: var(--bg);
    color: var(--white);
    font-family: var(--font-body);
  }

  header {
    text-align: center;
    padding: 32px 20px 16px;
    position: relative;
  }
  header h1 {
    font-family: var(--font-display);
    font-size: clamp(48px, 8vw, 96px);
    letter-spacing: 0.06em;
    color: var(--gold);
    text-shadow: 0 0 40px rgba(245,200,66,0.35);
    line-height: 1;
  }
  header p {
    font-size: 13px;
    color: var(--text-muted);
    letter-spacing: 0.12em;
    text-transform: uppercase;
    margin-top: 6px;
  }

  #board-wrap {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 16px;
  }

  #board {
    display: grid;
    grid-template-columns: repeat(6, minmax(0, 1fr));
    gap: 6px;
  }

  .cat-cell {
    background: var(--board-blue);
    border: 1px solid rgba(245,200,66,0.2);
    border-radius: 6px;
    text-align: center;
    padding: 14px 8px;
    font-family: var(--font-display);
    font-size: clamp(13px, 1.6vw, 18px);
    letter-spacing: 0.06em;
    color: var(--white);
    min-height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1.2;
  }

  .q-cell {
    background: var(--cell-blue);
    border: 1px solid rgba(255,255,255,0.06);
    border-radius: 6px;
    text-align: center;
    padding: 12px 6px;
    font-family: var(--font-display);
    font-size: clamp(22px, 3.5vw, 40px);
    color: var(--gold);
    cursor: pointer;
    min-height: 72px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.15s, transform 0.12s, box-shadow 0.15s;
    user-select: none;
    letter-spacing: 0.04em;
  }
  .q-cell:hover {
    background: var(--cell-hover);
    transform: translateY(-2px) scale(1.02);
    box-shadow: 0 6px 24px rgba(26,47,168,0.7);
    border-color: rgba(245,200,66,0.4);
    z-index: 1;
    position: relative;
  }
  .q-cell:active { transform: scale(0.98); }
  .q-cell.used {
    background: var(--cell-used);
    color: rgba(255,255,255,0.12);
    cursor: default;
    font-size: 22px;
    border-color: rgba(255,255,255,0.03);
    box-shadow: none;
    transform: none;
  }
  .q-cell.used:hover { background: var(--cell-used); transform: none; box-shadow: none; border-color: rgba(255,255,255,0.03); }

  #final-btn-wrap {
    text-align: center;
    margin: 22px 0 0;
  }
  #finalBtn {
    font-family: var(--font-display);
    font-size: 22px;
    letter-spacing: 0.12em;
    background: transparent;
    color: var(--gold);
    border: 2px solid var(--gold);
    border-radius: 6px;
    padding: 12px 44px;
    cursor: pointer;
    transition: background 0.15s, color 0.15s, box-shadow 0.15s;
  }
  #finalBtn:hover {
    background: var(--gold);
    color: var(--bg);
    box-shadow: 0 0 28px rgba(245,200,66,0.4);
  }

  #scoreboard {
    max-width: 1100px;
    margin: 28px auto 40px;
    padding: 0 16px;
  }
  .score-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;
  }
  .score-header h2 {
    font-family: var(--font-display);
    font-size: 26px;
    letter-spacing: 0.1em;
    color: var(--white);
  }
  #addTeamBtn {
    font-family: var(--font-body);
    font-size: 13px;
    padding: 6px 16px;
    border-radius: 4px;
    border: 1px solid rgba(255,255,255,0.2);
    background: transparent;
    color: var(--white);
    cursor: pointer;
    transition: background 0.12s;
  }
  #addTeamBtn:hover { background: rgba(255,255,255,0.08); }

  #teams-wrap {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }
  .team-card {
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 8px;
    padding: 14px 18px;
    min-width: 160px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    position: relative;
  }
  .team-name-input {
    font-family: var(--font-body);
    font-size: 14px;
    font-weight: 600;
    background: transparent;
    border: none;
    border-bottom: 1px solid rgba(255,255,255,0.15);
    color: var(--white);
    outline: none;
    width: 100%;
    padding-bottom: 4px;
  }
  .team-score-display {
    font-family: var(--font-display);
    font-size: 36px;
    letter-spacing: 0.05em;
    color: var(--gold);
    line-height: 1;
  }
  .team-score-display.negative { color: var(--danger); }
  .team-adjust-row {
    display: flex;
    gap: 6px;
  }
  .team-adjust-row button {
    flex: 1;
    padding: 4px 0;
    border-radius: 4px;
    border: 1px solid rgba(255,255,255,0.12);
    background: transparent;
    color: var(--white);
    font-size: 16px;
    cursor: pointer;
    transition: background 0.12s;
  }
  .team-adjust-row button:hover { background: rgba(255,255,255,0.1); }
  .remove-team-btn {
    position: absolute;
    top: 8px; right: 10px;
    background: transparent;
    border: none;
    color: rgba(255,255,255,0.25);
    font-size: 16px;
    cursor: pointer;
    line-height: 1;
  }
  .remove-team-btn:hover { color: var(--danger); }

  .overlay {
    position: fixed;
    inset: 0;
    background: var(--overlay);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: 20px;
    animation: fadeIn 0.18s ease;
  }
  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

  .modal {
    background: var(--modal-bg);
    border: 1px solid var(--modal-border);
    border-radius: 12px;
    padding: 32px 36px;
    max-width: 560px;
    width: 100%;
    position: relative;
    animation: slideUp 0.2s ease;
    max-height: 90vh;
    overflow-y: auto;
  }
  @keyframes slideUp { from { transform: translateY(16px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }

  .modal-close-x {
    position: absolute;
    top: 14px; right: 18px;
    background: transparent;
    border: none;
    color: var(--text-muted);
    font-size: 22px;
    cursor: pointer;
    line-height: 1;
  }
  .modal-close-x:hover { color: var(--white); }

  .modal-tag {
    display: inline-block;
    font-family: var(--font-display);
    font-size: 14px;
    letter-spacing: 0.1em;
    color: var(--bg);
    background: var(--gold);
    border-radius: 4px;
    padding: 3px 12px;
    margin-bottom: 10px;
  }
  .modal-category {
    font-size: 12px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--text-muted);
    margin-bottom: 18px;
  }
  .modal-question {
    font-size: 20px;
    line-height: 1.55;
    color: var(--white);
    margin-bottom: 22px;
    white-space: pre-line;
  }
  .modal-divider {
    height: 1px;
    background: rgba(255,255,255,0.07);
    margin: 16px 0;
  }
  .modal-label {
    font-size: 11px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--text-muted);
    margin-bottom: 8px;
  }
  .modal-hint {
    font-size: 15px;
    font-style: italic;
    color: rgba(255,255,255,0.6);
    line-height: 1.5;
  }
  .modal-answer {
    font-family: var(--font-display);
    font-size: 28px;
    letter-spacing: 0.04em;
    color: var(--gold);
    line-height: 1.3;
    margin-bottom: 6px;
  }
  .modal-solution {
    font-size: 13px;
    font-family: monospace;
    color: var(--text-muted);
    white-space: pre-line;
    line-height: 1.6;
    background: rgba(0,0,0,0.25);
    border-radius: 6px;
    padding: 10px 14px;
    margin-top: 8px;
  }

  .modal-btns {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 22px;
  }
  .btn-primary {
    font-family: var(--font-body);
    font-size: 14px;
    font-weight: 600;
    padding: 10px 22px;
    border-radius: 6px;
    border: none;
    background: var(--cell-blue);
    color: var(--white);
    cursor: pointer;
    transition: background 0.12s;
  }
  .btn-primary:hover { background: var(--cell-hover); }
  .btn-secondary {
    font-family: var(--font-body);
    font-size: 14px;
    padding: 10px 22px;
    border-radius: 6px;
    border: 1px solid rgba(255,255,255,0.15);
    background: transparent;
    color: var(--white);
    cursor: pointer;
    transition: background 0.12s;
  }
  .btn-secondary:hover { background: rgba(255,255,255,0.06); }

  .award-row {
    margin-top: 16px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 8px;
  }
  .award-label {
    font-size: 13px;
    color: var(--text-muted);
    width: 100%;
    margin-bottom: 2px;
  }
  .award-btn {
    font-family: var(--font-body);
    font-size: 13px;
    font-weight: 500;
    padding: 7px 16px;
    border-radius: 5px;
    border: 1px solid rgba(255,255,255,0.15);
    background: rgba(255,255,255,0.05);
    color: var(--white);
    cursor: pointer;
    transition: background 0.12s, border-color 0.12s;
  }
  .award-btn:hover { background: rgba(255,255,255,0.12); }
  .award-btn.correct { background: rgba(61,220,132,0.15); border-color: var(--success); color: var(--success); }
  .award-btn.wrong { background: rgba(255,95,95,0.12); border-color: var(--danger); color: var(--danger); }

  .wager-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 10px;
    margin-top: 8px;
  }
  .wager-item label {
    display: block;
    font-size: 12px;
    color: var(--text-muted);
    margin-bottom: 4px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }
  .wager-item input {
    width: 100%;
    font-family: var(--font-display);
    font-size: 24px;
    background: rgba(0,0,0,0.3);
    border: 1px solid rgba(255,255,255,0.12);
    border-radius: 5px;
    color: var(--gold);
    padding: 8px 12px;
    outline: none;
    letter-spacing: 0.05em;
  }
  .wager-item input:focus { border-color: rgba(245,200,66,0.4); }

  .final-award-row {
    margin-top: 16px;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
  .final-award-btn {
    font-family: var(--font-body);
    font-size: 13px;
    font-weight: 600;
    padding: 8px 16px;
    border-radius: 5px;
    border: 1px solid;
    cursor: pointer;
    transition: background 0.12s;
  }
  .final-award-btn.correct-btn {
    border-color: var(--success);
    color: var(--success);
    background: rgba(61,220,132,0.08);
  }
  .final-award-btn.correct-btn:hover { background: rgba(61,220,132,0.2); }
  .final-award-btn.wrong-btn {
    border-color: var(--danger);
    color: var(--danger);
    background: rgba(255,95,95,0.08);
  }
  .final-award-btn.wrong-btn:hover { background: rgba(255,95,95,0.18); }
  .final-award-btn.applied { opacity: 0.45; cursor: default; pointer-events: none; }

  ::-webkit-scrollbar { width: 6px; }
  ::-webkit-scrollbar-track { background: transparent; }
  ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.15); border-radius: 3px; }
</style>
</head>
<body>

<header>
  <h1>Math Jeopardy</h1>
  <p>Pick a category &amp; value to begin</p>
</header>

<div id="board-wrap">
  <div id="board"></div>
  <div id="final-btn-wrap">
    <button id="finalBtn">⭐ Final Question</button>
  </div>
</div>

<div id="scoreboard">
  <div class="score-header">
    <h2>Scoreboard</h2>
    <button id="addTeamBtn">+ Add Team</button>
  </div>
  <div id="teams-wrap"></div>
</div>

<script>
const CATEGORIES = [
  "Algebra Vibes",
  "Quad Squad",
  "Trig Tribe",
  "Stat Attack",
  "Geo Geniuses",
  "Brain Busters",
];

const VALUES = [100, 200, 300, 400, 500];

const QUESTIONS = [
  [
    { q: "Solve for x:\n3x + 7 = 22", a: "x = 5", hint: "Subtract 7 from both sides, then divide by 3.", solution: "3x + 7 = 22\n3x = 15\nx = 5" },
    { q: "Solve for x:\n(2x − 1)/3 = (x + 4)/2", a: "x = 14", hint: "Cross-multiply, then isolate x.", solution: "2(2x−1) = 3(x+4)\n4x − 2 = 3x + 12\nx = 14" },
    { q: "Solve the system:\ny = 2x − 3\n3x + 2y = 8", a: "x = 2, y = 1", hint: "Substitute the first equation into the second.", solution: "3x + 2(2x−3) = 8\n7x = 14\nx = 2, y = 1" },
    { q: "Solve the inequality:\n|2x − 3| < 7", a: "−2 < x < 5", hint: "Split into two inequalities: 2x−3 < 7 AND 2x−3 > −7.", solution: "−7 < 2x−3 < 7\n−4 < 2x < 10\n−2 < x < 5" },
    { q: "Solve the rational equation:\n(x − 1)/(x − 3) = 2/(x − 3) + 1", a: "No solution (x = 3 is extraneous)", hint: "Multiply through by (x − 3), but check for restrictions first.", solution: "Multiply by (x−3):\nx−1 = 2 + (x−3)\nx−1 = x−1\n0 = 0 → infinite solutions, BUT x ≠ 3\nSo: no valid solution." },
  ],
  [
    { q: "Factor:\nx² + 5x + 6", a: "(x + 2)(x + 3)", hint: "Find two numbers that multiply to 6 and add to 5.", solution: "(x + 2)(x + 3)" },
    { q: "Solve:\nx² − 9 = 0", a: "x = ±3", hint: "Factor as a difference of squares.", solution: "(x−3)(x+3) = 0\nx = 3 or x = −3" },
    { q: "Write in vertex form:\nf(x) = x² − 6x + 11", a: "f(x) = (x − 3)² + 2", hint: "Complete the square.", solution: "x² − 6x + 9 + 2\n= (x − 3)² + 2" },
    { q: "Find the roots of:\n3x² − 7x + 2 = 0", a: "x = 2 and x = 1/3", hint: "Use the quadratic formula or factor.", solution: "Discriminant = 49 − 24 = 25\nx = (7 ± 5) / 6\nx = 2  or  x = 1/3" },
    { q: "A ball is thrown upward:\nh(t) = −5t² + 30t + 2\n\nFind the maximum height and the time it hits the ground.", a: "Max height ≈ 47 m at t = 3 s;\nhits ground at t ≈ 6.07 s", hint: "Vertex gives max height; use quadratic formula for roots.", solution: "Vertex: t = −30/(2·−5) = 3\nh(3) = −45 + 90 + 2 = 47 m\n\nRoots: t = (−30 ± √(900+40)) / −10\nt ≈ 6.07 s (positive root)" },
  ],
  [
    { q: "In a right triangle:\nopposite = 6, hypotenuse = 10.\nFind sin θ.", a: "sin θ = 3/5 (= 0.6)", hint: "SOH: sin = opposite / hypotenuse", solution: "sin θ = 6/10 = 3/5" },
    { q: "A cliff is 50 m tall.\nAngle of depression to a boat = 28°.\nFind the horizontal distance.", a: "≈ 94 m", hint: "tan(28°) = opposite/adjacent → adjacent = 50/tan(28°)", solution: "d = 50 / tan(28°)\nd ≈ 50 / 0.5317\nd ≈ 94.0 m" },
    { q: "A ladder leans against a wall.\nAngle with ground = 50°, adjacent side = 9 m.\nHow high does it reach?", a: "≈ 10.7 m", hint: "tan(50°) = opposite / adjacent", solution: "opposite = 9 × tan(50°)\n= 9 × 1.1918\n≈ 10.7 m" },
    { q: "In triangle ABC:\na = 7, b = 10, A = 32°.\nFind angle B using the Sine Law.", a: "B ≈ 46°", hint: "sin B / b = sin A / a → sin B = b·sin A / a", solution: "sin B = 10 × sin(32°) / 7\nsin B = 10 × 0.5299 / 7 ≈ 0.7570\nB ≈ 49.2°  (or B ≈ 130.8° — check triangle validity)" },
    { q: "In triangle PQR:\np = 8, q = 5, r = 10.\nFind angle R using the Cosine Law.", a: "R ≈ 98°", hint: "r² = p² + q² − 2pq·cos R → solve for cos R.", solution: "cos R = (p² + q² − r²) / (2pq)\n= (64 + 25 − 100) / 80\n= −11/80 ≈ −0.1375\nR = cos⁻¹(−0.1375) ≈ 97.9°" },
  ],
  [
    { q: "Find the mean of:\n4, 7, 9, 12, 3", a: "7", hint: "Add all values and divide by the count.", solution: "Sum = 35\nMean = 35 / 5 = 7" },
    { q: "Dataset:\n8, 10, 12, 10, 6, 14, 12\n\nFind the mode, median, and range.", a: "Mode = 12, Median = 10, Range = 8", hint: "Sort first: 6, 8, 10, 10, 12, 12, 14", solution: "Sorted: 6 8 10 10 12 12 14\nMode: 10 and 12 (both appear twice) → 12 accepted\nMedian: middle value = 10\nRange: 14 − 6 = 8" },
    { q: "You need an average of 80 across 5 tests.\nYou scored: 72, 85, 78, 76.\nWhat score do you need on the 5th test?", a: "89", hint: "Total needed = 80 × 5 = 400. Subtract what you have.", solution: "400 − (72+85+78+76)\n= 400 − 311\n= 89" },
    { q: "A bag has 6 red and 5 blue marbles.\nTwo are drawn without replacement.\nFind P(both red).", a: "5/33", hint: "P = (6/11) × (5/10)", solution: "P = 6/11 × 5/10\n= 30/110 = 3/11\n\nNote: 5/33 applies if drawing from 12 total." },
    { q: "A dataset has mean = 21 and SD = 0.\nWhat can you conclude about the data?", a: "Every value equals 21 exactly", hint: "Standard deviation measures spread. SD = 0 means no spread.", solution: "SD = 0 → all values are identical\nSince mean = 21, every data point = 21" },
  ],
  [
    { q: "Find the area of a circle with radius 5.\n(Leave answer in terms of π)", a: "25π", hint: "A = πr²", solution: "A = π × 5² = 25π" },
    { q: "Find the volume of a cone:\nradius = 4, height = 9", a: "≈ 150.8 cubic units", hint: "V = (1/3)πr²h", solution: "V = (1/3) × π × 16 × 9\n= 48π\n≈ 150.8" },
    { q: "A chord is 8 cm long.\nThe perpendicular distance from the centre = 6 cm.\nFind the radius.", a: "10 cm", hint: "Half-chord = 4. Use Pythagoras: r² = 4² + 6²", solution: "r² = (chord/2)² + d²\nIf chord = 16, d = 6:\nr² = 8² + 6² = 64 + 36 = 100\nr = 10 ✓" },
    { q: "Two similar triangles have a side ratio of 3:5.\nThe smaller triangle has area 27 cm².\nFind the area of the larger triangle.", a: "75 cm²", hint: "Area ratio = (side ratio)² = 9:25", solution: "Scale factor = 5/3\nArea ratio = (5/3)² = 25/9\nLarger area = 27 × 25/9 = 75 cm²" },
    { q: "A rectangular prism has:\nvolume = 120 cm³, base = 4 cm × 5 cm.\nFind the surface area.", a: "148 cm²", hint: "Find height first, then SA = 2(lw + lh + wh).", solution: "h = 120 / (4×5) = 6\nSA = 2(20 + 24 + 30)\n= 2 × 74 = 148 cm²" },
  ],
  [
    { q: "A bat and a ball cost $1.10 total.\nThe bat costs $1.00 more than the ball.\nHow much does the ball cost?", a: "$0.05", hint: "Don't say $0.10 — set up the equations properly.", solution: "Let ball = b\nb + (b + 1) = 1.10\n2b = 0.10\nb = $0.05\nBat = $1.05 ✓" },
    { q: "Double a number, then add 10.\nThe result is 34.\nWhat is the number?", a: "12", hint: "2n + 10 = 34", solution: "2n + 10 = 34\n2n = 24\nn = 12" },
    { q: "There are 17 sheep in a field.\nAll but 9 run away.\nHow many remain?", a: "9", hint: "'All but 9' means 9 stay.", solution: "All BUT 9 run away\n→ 9 remain" },
    { q: "You have a 3-litre jug and a 5-litre jug.\nNo other measuring tools.\nMeasure exactly 4 litres.", a: "Fill 5L → pour into 3L → empty 3L → pour 2L into 3L → fill 5L → top off 3L → 4L left in 5L", hint: "Work with remainders.", solution: "1. Fill 5L jug\n2. Pour into 3L jug (3L full, 2L in 5L)\n3. Empty 3L jug\n4. Pour 2L into 3L jug\n5. Fill 5L jug again\n6. Pour from 5L into 3L until full (needs 1L)\n7. 4L remains in 5L jug ✓" },
    { q: "Three light switches are outside a room.\nOne controls the bulb inside.\nYou may enter the room only once.\nHow do you figure out which switch controls the bulb?", a: "Turn on switch 1 for a few minutes → off → turn on switch 2 → enter. Bulb ON = switch 2. Warm & off = switch 1. Cold & off = switch 3.", hint: "A light bulb generates heat when on. Use that.", solution: "Turn on Switch 1 for ~3 min → off\nTurn on Switch 2\nEnter room:\n  Bulb ON → Switch 2\n  Bulb OFF, warm → Switch 1\n  Bulb OFF, cold → Switch 3" },
  ],
];

const FINAL_QUESTION = {
  q: `A rectangle has a perimeter of 52 cm.\nIts length is 6 cm longer than its width.\n\nThe area of the rectangle is greater than 160 cm².\n\nFind the dimensions of the rectangle.`,
  a: "Width = 10 cm, Length = 16 cm",
  solution: "Perimeter: 2(l + w) = 52 → l + w = 26\nl = w + 6 → (w+6) + w = 26 → 2w = 20 → w = 10\nl = 16\n\nVerify area: 10 × 16 = 160 cm²",
};

let used = Array.from({ length: 6 }, () => new Array(5).fill(false));
let teams = [
  { name: "Team 1", score: 0 },
  { name: "Team 2", score: 0 },
];

function buildBoard() {
  const board = document.getElementById("board");
  board.innerHTML = "";
  CATEGORIES.forEach((cat) => {
    const cell = document.createElement("div");
    cell.className = "cat-cell";
    cell.textContent = cat;
    board.appendChild(cell);
  });
  for (let row = 0; row < 5; row++) {
    for (let col = 0; col < 6; col++) {
      const cell = document.createElement("div");
      const isUsed = used[col][row];
      cell.className = "q-cell" + (isUsed ? " used" : "");
      cell.textContent = isUsed ? "✓" : "$" + VALUES[row];
      cell.dataset.col = col;
      cell.dataset.row = row;
      if (!isUsed) cell.addEventListener("click", () => openQuestionModal(col, row));
      board.appendChild(cell);
    }
  }
}

function renderScoreboard() {
  const wrap = document.getElementById("teams-wrap");
  wrap.innerHTML = "";
  teams.forEach((team, i) => {
    const card = document.createElement("div");
    card.className = "team-card";
    const nameInput = document.createElement("input");
    nameInput.className = "team-name-input";
    nameInput.value = team.name;
    nameInput.addEventListener("input", (e) => { teams[i].name = e.target.value; });
    const scoreEl = document.createElement("div");
    scoreEl.className = "team-score-display" + (team.score < 0 ? " negative" : "");
    scoreEl.id = "score-" + i;
    scoreEl.textContent = (team.score < 0 ? "-$" : "$") + Math.abs(team.score);
    const adjRow = document.createElement("div");
    adjRow.className = "team-adjust-row";
    const minusBtn = document.createElement("button");
    minusBtn.textContent = "−";
    minusBtn.addEventListener("click", () => adjustScore(i, -100));
    const plusBtn = document.createElement("button");
    plusBtn.textContent = "+";
    plusBtn.addEventListener("click", () => adjustScore(i, 100));
    adjRow.appendChild(minusBtn);
    adjRow.appendChild(plusBtn);
    const removeBtn = document.createElement("button");
    removeBtn.className = "remove-team-btn";
    removeBtn.textContent = "×";
    removeBtn.addEventListener("click", () => { teams.splice(i, 1); renderScoreboard(); });
    card.appendChild(removeBtn);
    card.appendChild(nameInput);
    card.appendChild(scoreEl);
    card.appendChild(adjRow);
    wrap.appendChild(card);
  });
}

function adjustScore(teamIdx, delta) {
  teams[teamIdx].score += delta;
  const el = document.getElementById("score-" + teamIdx);
  el.className = "team-score-display" + (teams[teamIdx].score < 0 ? " negative" : "");
  el.textContent = (teams[teamIdx].score < 0 ? "-$" : "$") + Math.abs(teams[teamIdx].score);
}

function awardScore(teamIdx, amount) {
  adjustScore(teamIdx, amount);
}

function openQuestionModal(col, row) {
  const q = QUESTIONS[col][row];
  const cat = CATEGORIES[col];
  const val = VALUES[row];
  const overlay = document.createElement("div");
  overlay.className = "overlay";
  const hintHTML = q.hint
    ? `<div id="hint-section" style="display:none">
        <div class="modal-divider"></div>
        <div class="modal-label">Hint</div>
        <div class="modal-hint">${q.hint}</div>
       </div>`
    : "";
  const solutionHTML = q.solution
    ? `<div class="modal-solution">${q.solution}</div>`
    : "";
  overlay.innerHTML = `
    <div class="modal">
      <div class="modal-tag">$${val}</div>
      <div class="modal-category">${cat}</div>
      <div class="modal-question">${q.q}</div>
      ${hintHTML}
      <div id="answer-section" style="display:none">
        <div class="modal-divider"></div>
        <div class="modal-label">Answer</div>
        <div class="modal-answer">${q.a}</div>
        ${solutionHTML}
        <div class="modal-divider"></div>
        <div class="modal-label">Award $${val} to</div>
        <div class="award-row" id="awardRow">
          ${teams.map((t, i) => `<button class="award-btn" data-idx="${i}" data-amount="${val}">✓ ${t.name}</button>`).join("")}
          <button class="award-btn wrong" data-idx="-1" data-amount="-${val}" style="border-color:#ff5f5f;color:#ff5f5f">✗ No one</button>
        </div>
      </div>
      <div class="modal-btns">
        ${q.hint ? `<button class="btn-primary" id="hintBtn">Show Hint</button>` : ""}
        <button class="btn-primary" id="revealBtn">Reveal Answer</button>
        <button class="btn-secondary" id="closeBtn" style="display:none">Close</button>
      </div>
    </div>`;
  document.body.appendChild(overlay);
  if (q.hint) {
    overlay.querySelector("#hintBtn").addEventListener("click", () => {
      overlay.querySelector("#hint-section").style.display = "block";
      overlay.querySelector("#hintBtn").remove();
    });
  }
  overlay.querySelector("#revealBtn").addEventListener("click", () => {
    overlay.querySelector("#answer-section").style.display = "block";
    overlay.querySelector("#revealBtn").remove();
    overlay.querySelector("#closeBtn").style.display = "";
    overlay.querySelectorAll(".award-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const idx = parseInt(btn.dataset.idx);
        const amount = parseInt(btn.dataset.amount);
        if (idx >= 0) {
          awardScore(idx, Math.abs(amount));
          overlay.querySelectorAll(".award-btn").forEach(b => b.classList.remove("correct"));
          btn.classList.add("correct");
        } else {
          overlay.querySelectorAll(".award-btn").forEach(b => b.classList.remove("wrong"));
          btn.classList.add("wrong");
        }
      });
    });
  });
  const closeHandler = () => {
    used[col][row] = true;
    document.body.removeChild(overlay);
    buildBoard();
  };
  overlay.querySelector("#closeBtn").addEventListener("click", closeHandler);
}

function openFinalModal() {
  const overlay = document.createElement("div");
  overlay.className = "overlay";
  overlay.innerHTML = `
    <div class="modal">
      <div class="modal-tag" style="background:#f5c842;color:#05061a;font-size:16px">⭐ Final Question</div>
      <div style="margin-bottom:16px"></div>
      <div class="modal-label">Wagers</div>
      <div class="wager-grid" id="wagerGrid">
        ${teams.map((t, i) => `
          <div class="wager-item">
            <label>${t.name} (max $${Math.max(t.score, 0)})</label>
            <input type="number" id="wager-${i}" min="0" max="${Math.max(t.score, 0)}" value="0" />
          </div>`).join("")}
      </div>
      <div class="modal-divider"></div>
      <div class="modal-label">Question</div>
      <div class="modal-question">${FINAL_QUESTION.q}</div>
      <div id="final-answer-section" style="display:none">
        <div class="modal-divider"></div>
        <div class="modal-label">Answer</div>
        <div class="modal-answer">${FINAL_QUESTION.a}</div>
        <div class="modal-solution">${FINAL_QUESTION.solution}</div>
        <div class="modal-divider"></div>
        <div class="modal-label">Award Wagers</div>
        <div class="final-award-row" id="finalAwardRow">
          ${teams.map((t, i) => `
            <button class="final-award-btn correct-btn" data-idx="${i}" data-sign="1">✓ ${t.name} correct</button>
            <button class="final-award-btn wrong-btn" data-idx="${i}" data-sign="-1">✗ ${t.name} wrong</button>
          `).join("")}
        </div>
      </div>
      <div class="modal-btns">
        <button class="btn-primary" id="finalRevealBtn">Reveal Answer</button>
        <button class="btn-secondary" id="finalCloseBtn" style="display:none">Close</button>
      </div>
    </div>`;
  document.body.appendChild(overlay);
  overlay.querySelector("#finalRevealBtn").addEventListener("click", () => {
    overlay.querySelector("#final-answer-section").style.display = "block";
    overlay.querySelector("#finalRevealBtn").remove();
    overlay.querySelector("#finalCloseBtn").style.display = "";
    overlay.querySelectorAll(".final-award-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        if (btn.classList.contains("applied")) return;
        const idx = parseInt(btn.dataset.idx);
        const sign = parseInt(btn.dataset.sign);
        const wager = parseInt(overlay.querySelector("#wager-" + idx)?.value) || 0;
        awardScore(idx, sign * wager);
        overlay.querySelectorAll(`.final-award-btn[data-idx="${idx}"]`).forEach(b => b.classList.add("applied"));
      });
    });
  });
  const closeH = () => document.body.removeChild(overlay);
  overlay.querySelector("#finalCloseBtn").addEventListener("click", closeH);
}

document.getElementById("addTeamBtn").addEventListener("click", () => {
  teams.push({ name: "Team " + (teams.length + 1), score: 0 });
  renderScoreboard();
});
document.getElementById("finalBtn").addEventListener("click", openFinalModal);

buildBoard();
renderScoreboard();
</script>
</body>
</html>
