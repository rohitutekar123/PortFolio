import { skillPools } from "@/data/portfolio";

export default function NodePools() {
  return (
    <section id="nodes">
      <div className="sec-head">
        <h2>Node pools</h2>
        <span className="ns">kubectl top nodes · self-rated usage</span>
      </div>
      <div className="pools">
        {skillPools.map((pool) => (
          <div className="pool" key={pool.pool}>
            <h3>{pool.pool}</h3>
            {pool.skills.map((s) => (
              <div className="gauge" key={s.name}>
                <span className="name">{s.name}</span>
                <div className="track">
                  <div className="fill" style={{ width: `${s.level}%` }} />
                </div>
                <span className="val">{s.level}%</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
