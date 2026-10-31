import { profile } from "@/data/portfolio";

const sections = [
  ["overview", "overview"],
  ["nodes", "node-pools"],
  ["pods", "pods"],
  ["rollout", "rollout"],
  ["community", "community"],
  ["events", "events"],
] as const;

export default function Sidebar() {
  return (
    <aside>
      <div className="logo">
        <svg className="logo-mark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <path d="M12 2.5 20.5 7v10L12 21.5 3.5 17V7z" />
          <circle cx="12" cy="12" r="2.6" />
          <path d="M12 9.4V5M14.3 13.3l3.8 2.2M9.7 13.3l-3.8 2.2" />
        </svg>
        Cluster Control
      </div>
      <p className="ctx">context: {profile.clusterContext}</p>
      <nav aria-label="Sections">
        {sections.map(([id, label]) => (
          <a key={id} href={`#${id}`}>
            <span>ns/</span>
            {label}
          </a>
        ))}
      </nav>
    </aside>
  );
}
