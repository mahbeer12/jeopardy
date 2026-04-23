# Math Jeopardy

A fully-featured Jeopardy game covering Ontario Grade 8-10 Math curriculum.

## Getting Started

### Prerequisites
- Node.js v18 or higher
- npm (comes with Node.js)

### Run Locally

```bash
npm install
npm run dev
# Open http://localhost:5173
```

### Build for Production

```bash
npm run build
npm run preview
```

## Topics Covered

- Algebra Vibes — equations, expressions, systems
- Quad Squad — factoring, vertex form, quadratic formula
- Trig Tribe — SOH-CAH-TOA, special angles, sine law
- Stat Attack — mean/median, probability, IQR
- Geo Geniuses — Pythagorean theorem, circles, cylinders

## How to Play

1. Click any dollar tile to open a question
2. Type your answer and press Enter or Submit
3. Use Hint if you're stuck
4. Mark yourself honestly with correct/wrong
5. Skip questions and come back later
6. Complete all 25 to see your final score!

## Customizing Questions

Edit src/questions.js to modify questions. Each entry:

```js
{
  q: "Question text",
  a: "Canonical answer",
  hint: "A helpful nudge",
  accept: ["answer", "alt answer"],
}
```

Questions are indexed: row * 5 + col
Rows 0-4 = $100 to $500 | Cols 0-4 = Categories 1-5
