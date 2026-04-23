import { useState, useEffect, useCallback } from "react";
import { CATEGORIES, VALUES, QUESTIONS } from "./questions";

/* ─── helpers ─────────────────────────────────────────────── */
function qIndex(col, row) {
  return row * 5 + col;
}

function checkAnswer(raw, acceptList) {
  const clean = (s) =>
    s
      .toLowerCase()
      .replace(/\s/g, "")
      .replace(/[–—]/g, "-");
  const user = clean(raw);
  return acceptList.some((a) => {
    const ac = clean(a);
    return user === ac || user.includes(ac) || ac.includes(user);
  });
}

/* ─── styles (CSS-in-JS object map) ─────────────────────────── */
const S = {
  root: {
    fontFamily: "'DM Sans', sans-serif",
    background: "#080f1e",
    minHeight: "100vh",
    color: "#fff",
    padding: "1.5rem 1rem",
  },
  header: {
    textAlign: "center",
    marginBottom: "1.25rem",
  },
  title: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: "clamp(2rem, 6vw, 3.5rem)",
    letterSpacing: "0.06em",
    color: "#f5c842",
    lineHeight: 1,
    margin: 0,
  },
  subtitle: {
    fontSize: "13px",
    color: "rgba(255,255,255,0.45)",
    marginTop: "6px",
  },
  hud: {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
    marginBottom: "1rem",
    flexWrap: "wrap",
  },
  scoreBox: {
    background: "#112044",
    border: "1px solid rgba(245,200,66,0.25)",
    borderRadius: "10px",
    padding: "6px 20px",
    textAlign: "center",
    minWidth: "80px",
  },
  scoreLabel: {
    fontSize: "10px",
    textTransform: "uppercase",
    letterSpacing: "0.1em",
    color: "rgba(255,255,255,0.45)",
  },
  scoreVal: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: "1.75rem",
    color: "#f5c842",
    lineHeight: 1.1,
  },
  progressWrap: {
    height: "4px",
    background: "rgba(255,255,255,0.08)",
    borderRadius: "2px",
    marginBottom: "1rem",
    maxWidth: "900px",
    margin: "0 auto 1rem",
  },
  progressBar: (pct) => ({
    height: "4px",
    background: "#f5c842",
    borderRadius: "2px",
    width: pct + "%",
    transition: "width 0.5s ease",
  }),
  board: {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gap: "8px",
    maxWidth: "900px",
    margin: "0 auto",
  },
  catHeader: {
    background: "#1a3a6e",
    borderRadius: "8px",
    padding: "10px 6px",
    textAlign: "center",
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: "clamp(0.75rem, 2vw, 1rem)",
    letterSpacing: "0.05em",
    lineHeight: 1.2,
    userSelect: "none",
  },
  cell: (used) => ({
    background: used ? "#0a1628" : "#112044",
    border: used
      ? "1px solid rgba(255,255,255,0.04)"
      : "1px solid rgba(255,255,255,0.1)",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: used ? "default" : "pointer",
    opacity: used ? 0.35 : 1,
    aspectRatio: "1.6 / 1",
    minHeight: "48px",
    transition: "transform 0.15s, background 0.15s",
  }),
  cellVal: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: "clamp(1rem, 2.5vw, 1.5rem)",
    color: "#f5c842",
  },
  /* modal */
  backdrop: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.88)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 200,
    padding: "1rem",
  },
  modal: {
    background: "#112044",
    border: "2px solid #f5c842",
    borderRadius: "14px",
    padding: "2rem 1.75rem",
    maxWidth: "500px",
    width: "100%",
    textAlign: "center",
  },
  modalCat: {
    fontSize: "11px",
    textTransform: "uppercase",
    letterSpacing: "0.12em",
    color: "#f5c842",
    marginBottom: "4px",
  },
  modalPoints: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: "2.8rem",
    lineHeight: 1,
    marginBottom: "1.25rem",
  },
  modalQ: {
    fontSize: "1.05rem",
    lineHeight: 1.6,
    marginBottom: "1rem",
    minHeight: "52px",
  },
  modalHint: {
    fontSize: "12px",
    color: "rgba(255,255,255,0.45)",
    fontStyle: "italic",
    marginBottom: "1rem",
    minHeight: "18px",
  },
  input: {
    width: "100%",
    padding: "11px 14px",
    borderRadius: "8px",
    border: "1.5px solid rgba(255,255,255,0.2)",
    background: "rgba(255,255,255,0.08)",
    color: "#fff",
    fontSize: "1rem",
    outline: "none",
    marginBottom: "0.9rem",
    fontFamily: "'DM Sans', sans-serif",
    boxSizing: "border-box",
  },
  btnRow: {
    display: "flex",
    gap: "8px",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  btn: (variant) => {
    const base = {
      fontFamily: "'DM Sans', sans-serif",
      fontWeight: 600,
      fontSize: "14px",
      border: "none",
      borderRadius: "8px",
      padding: "10px 20px",
      cursor: "pointer",
    };
    const variants = {
      gold: { background: "#f5c842", color: "#080f1e" },
      outline: {
        background: "transparent",
        border: "1.5px solid rgba(255,255,255,0.3)",
        color: "#fff",
      },
      correct: { background: "#22c55e", color: "#fff" },
      wrong: { background: "#ef4444", color: "#fff" },
      reveal: { background: "#f59e0b", color: "#fff" },
    };
    return { ...base, ...variants[variant] };
  },
  feedback: (type) => ({
    marginTop: "0.75rem",
    padding: "10px 14px",
    borderRadius: "8px",
    fontSize: "14px",
    fontWeight: 500,
    ...(type === "correct"
      ? {
          background: "rgba(34,197,94,0.15)",
          color: "#86efac",
          border: "1px solid #22c55e",
        }
      : {
          background: "rgba(239,68,68,0.15)",
          color: "#fca5a5",
          border: "1px solid #ef4444",
        }),
  }),
  /* end screen */
  end: {
    textAlign: "center",
    padding: "4rem 1rem",
    maxWidth: "500px",
    margin: "0 auto",
  },
  endTitle: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: "3rem",
    color: "#f5c842",
    marginBottom: "0.5rem",
  },
  endScore: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: "4.5rem",
    color: "#fff",
    margin: "0.25rem 0",
  },
  endGrade: {
    fontSize: "1rem",
    color: "rgba(255,255,255,0.6)",
    marginBottom: "2rem",
  },
};

/* ─── sub-components ─────────────────────────────────────────── */
function Button({ variant = "gold", onClick, children, style }) {
  const [hover, setHover] = useState(false);
  return (
    <button
      style={{
        ...S.btn(variant),
        opacity: hover ? 0.85 : 1,
        transform: hover ? "scale(0.97)" : "scale(1)",
        transition: "opacity 0.12s, transform 0.12s",
        ...style,
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function Cell({ col, row, used, onClick }) {
  const [hover, setHover] = useState(false);
  const val = VALUES[row];
  return (
    <div
      style={{
        ...S.cell(used),
        ...(hover && !used
          ? { background: "#1e4a8a", transform: "scale(1.04)" }
          : {}),
      }}
      onMouseEnter={() => !used && setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => !used && onClick(col, row)}
      role={used ? undefined : "button"}
      tabIndex={used ? -1 : 0}
      onKeyDown={(e) => e.key === "Enter" && !used && onClick(col, row)}
      aria-label={used ? "used" : `${CATEGORIES[col]} $${val}`}
    >
      {!used && <span style={S.cellVal}>${val}</span>}
    </div>
  );
}

/* ─── modal ──────────────────────────────────────────────────── */
function QuestionModal({ col, row, onClose }) {
  const qi = qIndex(col, row);
  const qData = QUESTIONS[qi];
  const val = VALUES[row];

  const [inputVal, setInputVal] = useState("");
  const [hint, setHint] = useState(false);
  const [phase, setPhase] = useState("entry"); // entry | judge | done
  const [autoCorrect, setAutoCorrect] = useState(null);
  const [judgeResult, setJudgeResult] = useState(null);

  const handleSubmit = useCallback(() => {
    if (!inputVal.trim()) return;
    const correct = checkAnswer(inputVal, qData.accept);
    setAutoCorrect(correct);
    setPhase("judge");
  }, [inputVal, qData.accept]);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Enter" && phase === "entry") handleSubmit();
      if (e.key === "Escape") onClose(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [handleSubmit, onClose, phase]);

  const resolve = (got) => {
    setJudgeResult(got);
    setPhase("done");
    setTimeout(() => onClose(got ? val : 0), 1400);
  };

  return (
    <div style={S.backdrop} onClick={(e) => e.target === e.currentTarget && onClose(null)}>
      <div style={S.modal} role="dialog" aria-modal="true">
        <p style={S.modalCat}>{CATEGORIES[col]}</p>
        <p style={S.modalPoints}>${val}</p>
        <p style={S.modalQ}>{qData.q}</p>
        <p style={S.modalHint}>{hint ? "💡 " + qData.hint : ""}</p>

        {phase === "entry" && (
          <>
            <input
              style={S.input}
              autoFocus
              placeholder="Type your answer…"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
            />
            <div style={S.btnRow}>
              <Button variant="gold" onClick={handleSubmit}>Submit</Button>
              <Button variant="outline" onClick={() => setHint(true)}>Hint</Button>
              <Button variant="outline" onClick={() => onClose(null)}>Skip</Button>
            </div>
          </>
        )}

        {phase === "judge" && (
          <>
            <div
              style={S.feedback(autoCorrect ? "correct" : "wrong")}
            >
              {autoCorrect
                ? "Looks right! Confirm:"
                : `Hmm — answer: ${qData.a}`}
            </div>
            <div style={{ ...S.btnRow, marginTop: "0.75rem" }}>
              <Button variant="correct" onClick={() => resolve(true)}>✓ Got it right</Button>
              <Button variant="wrong" onClick={() => resolve(false)}>✗ Got it wrong</Button>
            </div>
          </>
        )}

        {phase === "done" && (
          <div style={S.feedback(judgeResult ? "correct" : "wrong")}>
            {judgeResult
              ? `+$${val} — Excellent work!`
              : `No points — the answer was ${qData.a}`}
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── end screen ─────────────────────────────────────────────── */
function EndScreen({ score, correct, onRestart }) {
  const pct = correct / 25;
  const grade =
    pct >= 0.8
      ? "🏆 Math Champion!"
      : pct >= 0.6
      ? "🌟 Rockstar Mathematician!"
      : pct >= 0.4
      ? "📚 Good Effort — Keep Studying!"
      : "💪 Practice Makes Perfect!";

  return (
    <div style={S.end}>
      <h2 style={S.endTitle}>Game Over!</h2>
      <div style={S.endScore}>${score.toLocaleString()}</div>
      <p style={S.endGrade}>
        {correct} / 25 correct &nbsp;•&nbsp; {grade}
      </p>
      <Button variant="gold" onClick={onRestart} style={{ fontSize: "16px", padding: "12px 32px" }}>
        Play Again
      </Button>
    </div>
  );
}

/* ─── main App ───────────────────────────────────────────────── */
export default function App() {
  const [used, setUsed] = useState(Array(25).fill(false));
  const [score, setScore] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [active, setActive] = useState(null); // {col, row}

  const answered = used.filter(Boolean).length;
  const pct = (answered / 25) * 100;
  const gameOver = answered === 25;

  const openQ = (col, row) => setActive({ col, row });

  const handleClose = (earned) => {
    if (earned !== null) {
      const qi = qIndex(active.col, active.row);
      setUsed((prev) => {
        const next = [...prev];
        next[qi] = true;
        return next;
      });
      if (earned > 0) {
        setScore((s) => s + earned);
        setCorrect((c) => c + 1);
      }
    }
    setActive(null);
  };

  const restart = () => {
    setUsed(Array(25).fill(false));
    setScore(0);
    setCorrect(0);
    setActive(null);
  };

  return (
    <div style={S.root}>
      {/* font import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; }
        body { margin: 0; background: #080f1e; }
        input:focus { outline: none; border-color: #f5c842 !important; }
      `}</style>

      {!gameOver ? (
        <>
          <div style={S.header}>
            <h1 style={S.title}>Math Jeopardy</h1>
            <p style={S.subtitle}>Grade 8–10 Ontario Curriculum &nbsp;•&nbsp; 25 Questions</p>
          </div>

          <div style={S.hud}>
            <div style={S.scoreBox}>
              <div style={S.scoreLabel}>Score</div>
              <div style={S.scoreVal}>${score.toLocaleString()}</div>
            </div>
            <div style={S.scoreBox}>
              <div style={S.scoreLabel}>Correct</div>
              <div style={S.scoreVal}>{correct}</div>
            </div>
            <div style={S.scoreBox}>
              <div style={S.scoreLabel}>Remaining</div>
              <div style={S.scoreVal}>{25 - answered}</div>
            </div>
          </div>

          <div style={{ maxWidth: "900px", margin: "0 auto 1rem" }}>
            <div style={S.progressWrap}>
              <div style={S.progressBar(pct)} />
            </div>
          </div>

          <div style={S.board}>
            {/* category headers */}
            {CATEGORIES.map((cat) => (
              <div key={cat} style={S.catHeader}>{cat}</div>
            ))}
            {/* cells: row-major — row 0 = $100 */}
            {VALUES.map((_, row) =>
              CATEGORIES.map((_, col) => (
                <Cell
                  key={`${col}-${row}`}
                  col={col}
                  row={row}
                  used={used[qIndex(col, row)]}
                  onClick={openQ}
                />
              ))
            )}
          </div>

          {active !== null && (
            <QuestionModal
              col={active.col}
              row={active.row}
              onClose={handleClose}
            />
          )}
        </>
      ) : (
        <EndScreen score={score} correct={correct} onRestart={restart} />
      )}
    </div>
  );
}
