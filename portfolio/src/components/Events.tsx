import { profile } from "@/data/portfolio";
import CopyEmail from "./CopyEmail";

const short = (url: string) => url.replace(/^https?:\/\//, "");

export default function Events() {
  return (
    <section id="events">
      <div className="sec-head">
        <h2>Events</h2>
        <span className="ns">kubectl get events · how to reach me</span>
      </div>
      <dl className="events">
        <dt>Normal</dt>
        <dd>Open to full-time roles and interesting side projects.</dd>
        <dt>email</dt>
        <dd id="email">{profile.email}</dd>
        <dt>github</dt>
        <dd>
          <a href={profile.github} target="_blank" rel="noopener noreferrer">
            {short(profile.github)}
          </a>
        </dd>
        <dt>linkedin</dt>
        <dd>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            {short(profile.linkedin)}
          </a>
        </dd>
      </dl>
      <div className="btns">
        <CopyEmail email={profile.email} targetId="email" />
        <a className="btn" href={profile.github} target="_blank" rel="noopener noreferrer">
          Open GitHub
        </a>
      </div>
    </section>
  );
}
