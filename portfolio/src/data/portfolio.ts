// All portfolio content lives here. Edit this file only: no component needs to change.
// Everything except the name and email is SAMPLE content. Replace it with your own.

export type Skill = { name: string; level: number }; // level is 0-100
export type SkillPool = { pool: string; skills: Skill[] };
export type Project = {
  name: string;
  status: "Running" | "Completed";
  ready: string;
  restarts: string;
  age: string;
  stack: string[];
  summary: string;
  result?: string;
  link?: string;
};
export type Revision = {
  title: string;
  org: string;
  period: string;
  current?: boolean;
  points: string[];
};

export const profile = {
  name: "Rohit Utekar",
  role: "Platform & Cloud Engineer",
  status: "Ready · open to work",
  intro:
    "I work on Kubernetes tooling, cloud-cost and incident automation. I like backend services in Go and Python, dashboards in TypeScript, and changes small enough to roll back in one command.",
  location: "India (IST)",
  timeZone: "Asia/Kolkata",
  careerStartYear: 2018,
  email: "rohitutekar412@gmail.com",
  github: "https://github.com/your-username",
  linkedin: "https://linkedin.com/in/your-username",
  clusterContext: "rohit-prod",
};

export const skillPools: SkillPool[] = [
  {
    pool: "pool-backend",
    skills: [
      { name: "Go", level: 82 },
      { name: "Python", level: 80 },
      { name: "PostgreSQL", level: 70 },
    ],
  },
  {
    pool: "pool-platform",
    skills: [
      { name: "Kubernetes", level: 90 },
      { name: "Terraform", level: 78 },
      { name: "CI/CD", level: 84 },
    ],
  },
  {
    pool: "pool-frontend",
    skills: [
      { name: "TypeScript", level: 72 },
      { name: "React / Next.js", level: 68 },
    ],
  },
  {
    pool: "pool-observability",
    skills: [
      { name: "Prometheus", level: 76 },
      { name: "Grafana / Loki", level: 74 },
    ],
  },
];

export const projects: Project[] = [
  {
    name: "kube-cost-lens",
    status: "Running",
    ready: "1/1",
    restarts: "3 (rewrites)",
    age: "8m",
    stack: ["Go", "PostgreSQL", "React"],
    summary:
      "Per-namespace cost explorer for Kubernetes. Pulls usage and billing data and shows which team or workload spends the most.",
    result: "Cut a test cluster's monthly bill by 23% in the first week.",
    link: "https://github.com/your-username/kube-cost-lens",
  },
  {
    name: "incident-copilot",
    status: "Running",
    ready: "1/1",
    restarts: "5",
    age: "1y",
    stack: ["Python", "LLM APIs", "Alertmanager"],
    summary:
      "Reads alerts and logs, ranks likely causes and drafts a first-response checklist for the on-call engineer.",
    result: "Median time to first action fell from 14 to 6 minutes.",
    link: "https://github.com/your-username/incident-copilot",
  },
  {
    name: "deploy-pulse",
    status: "Running",
    ready: "1/1",
    restarts: "2",
    age: "1y",
    stack: ["TypeScript", "Next.js", "GitOps"],
    summary:
      "One page showing what shipped, when, and whether it is healthy, with links to the diff and logs.",
    link: "https://github.com/your-username/deploy-pulse",
  },
  {
    name: "legacy-batch-migrator",
    status: "Completed",
    ready: "0/1",
    restarts: "0",
    age: "3y",
    stack: ["Python", "Airflow"],
    summary:
      "Moved nightly batch jobs off a single VM onto Kubernetes CronJobs, with retries and alerts.",
  },
];

export const revisions: Revision[] = [
  {
    title: "Platform Engineer",
    org: "Your Company",
    period: "2024 – now",
    current: true,
    points: [
      "Run the Kubernetes platform used by 15+ services.",
      "Cut deploy time from 25 to 7 minutes.",
    ],
  },
  {
    title: "DevOps Engineer",
    org: "Previous Company",
    period: "2022 – 2024",
    points: [
      "Built CI/CD pipelines and infrastructure as code.",
      "Introduced SLOs and on-call runbooks.",
    ],
  },
  {
    title: "B.Tech, Computer Science",
    org: "Your University",
    period: "2018 – 2022",
    points: ["Graduated with distinction; led the coding club."],
  },
];
