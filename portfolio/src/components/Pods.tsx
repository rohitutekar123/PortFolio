import { projects } from "@/data/portfolio";

export default function Pods() {
  return (
    <section id="pods">
      <div className="sec-head">
        <h2>Pods</h2>
        <span className="ns">kubectl get pods · tap a row for details</span>
      </div>
      <div className="pods-head" aria-hidden="true">
        <span>Name</span>
        <span>Ready</span>
        <span>Status</span>
        <span>Restarts</span>
        <span>Age</span>
      </div>
      {projects.map((p, i) => (
        <details className="pod" key={p.name} open={i === 0}>
          <summary>
            <span className="pname">{p.name}</span>
            <span className="c-ready">{p.ready}</span>
            <span className={p.status === "Running" ? "st" : "st done"}>{p.status}</span>
            <span className="c-rest">{p.restarts}</span>
            <span className="c-age">{p.age}</span>
          </summary>
          <div className="detail">
            <div className="tags">
              {p.stack.map((t) => (
                <span className="tag" key={t}>
                  {t}
                </span>
              ))}
            </div>
            <p>{p.summary}</p>
            {p.result && <p className="dim">Result: {p.result}</p>}
            {p.link && (
              <a href={p.link} target="_blank" rel="noopener noreferrer">
                View source →
              </a>
            )}
          </div>
        </details>
      ))}
    </section>
  );
}
