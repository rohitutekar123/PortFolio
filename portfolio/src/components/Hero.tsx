import { profile } from "@/data/portfolio";
import Clock from "./Clock";

export default function Hero() {
  const years = Math.max(1, new Date().getFullYear() - profile.careerStartYear);
  return (
    <section className="hero" id="overview">
      <span className="pill">
        <i />
        {profile.status}
      </span>
      <h1>{profile.name}</h1>
      <p className="role">{profile.role}</p>
      <p className="lede">{profile.intro}</p>
      <ul className="meta">
        <li>
          <b>Cluster age</b>
          <span>
            {years} {years === 1 ? "yr" : "yrs"}
          </span>
        </li>
        <li>
          <b>Region</b>
          <span>{profile.location}</span>
        </li>
        <li>
          <b>Local time</b>
          <Clock timeZone={profile.timeZone} />
        </li>
        <li>
          <b>Replicas</b>
          <span>1 / 1 available</span>
        </li>
      </ul>
    </section>
  );
}
