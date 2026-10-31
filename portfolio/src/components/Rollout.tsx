import { revisions } from "@/data/portfolio";

export default function Rollout() {
  return (
    <section id="rollout">
      <div className="sec-head">
        <h2>Rollout history</h2>
        <span className="ns">kubectl rollout history deploy/rohit</span>
      </div>
      <ol className="rollout">
        {revisions.map((r, i) => (
          <li className={r.current ? "rev live" : "rev"} key={r.title}>
            <div className="rail">
              <span className="node" />
              <span className="stem" />
            </div>
            <div className="rev-body">
              <div className="rev-top">
                <h3>{r.title}</h3>
                <span className="mono">
                  revision {revisions.length - i} · {r.period}
                  {r.current ? " · current" : ""}
                </span>
              </div>
              <div className="dim">{r.org}</div>
              <ul>
                {r.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
