import { community } from "@/data/portfolio";

export default function Community() {
  return (
    <section id="community">
      <div className="sec-head">
        <h2>Community</h2>
        <span className="ns">kubectl get volunteers</span>
      </div>
      <ul className="community">
        {community.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>
    </section>
  );
}
