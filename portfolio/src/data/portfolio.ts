// All portfolio content lives here. Edit this file only: no component needs to change.
// Content comes from Rohit's resume. Skill levels are self-rated estimates: adjust them to be honest and fair to yourself.

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
  role: "DevOps & SRE Engineer",
  status: "Ready · open to opportunities",
  intro:
    "I design CI/CD pipelines, automate cloud infrastructure and keep Kubernetes platforms reliable. Hands-on with AWS, Terraform, GitHub Actions and observability tooling, with a strong focus on automation, monitoring and securing containerized workloads.",
  location: "Pune, India (IST)",
  timeZone: "Asia/Kolkata",
  careerStartYear: 2025,
  email: "rohitutekar412@gmail.com",
  github: "https://github.com/rohitutekar123",
  linkedin: "https://linkedin.com/in/rohit-utekar-24841b210/",
  clusterContext: "rohit-prod",
};

export const skillPools: SkillPool[] = [
  {
    pool: "pool-cloud",
    skills: [
      { name: "AWS (EC2, ECS, ECR, S3, IAM, VPC)", level: 80 },
      { name: "CloudWatch", level: 80 },
      { name: "GCP / Cloud SQL", level: 65 },
    ],
  },
  {
    pool: "pool-containers",
    skills: [
      { name: "Kubernetes", level: 82 },
      { name: "Docker", level: 85 },
      { name: "Helm", level: 78 },
    ],
  },
  {
    pool: "pool-delivery",
    skills: [
      { name: "GitHub Actions", level: 88 },
      { name: "Terraform", level: 80 },
      { name: "Ansible", level: 70 },
      { name: "ArgoCD", level: 65 },
      { name: "Jenkins (basic)", level: 45 },
    ],
  },
  {
    pool: "pool-observability",
    skills: [
      { name: "Prometheus / Grafana", level: 78 },
      { name: "Loki", level: 72 },
      { name: "GCP Monitoring", level: 65 },
    ],
  },
  {
    pool: "pool-security-quality",
    skills: [
      { name: "Trivy", level: 72 },
      { name: "SonarQube", level: 65 },
      { name: "IAM & secrets management", level: 72 },
    ],
  },
  {
    pool: "pool-scripting-data",
    skills: [
      { name: "Python", level: 70 },
      { name: "Shell scripting", level: 75 },
      { name: "PostgreSQL / MySQL", level: 68 },
      { name: "Linux (Ubuntu)", level: 80 },
    ],
  },
];

export const projects: Project[] = [
  {
    name: "ci-cd-pipelines",
    status: "Running",
    ready: "1/1",
    restarts: "0",
    age: "1y",
    stack: ["GitHub Actions", "Docker", "AWS ECR"],
    summary:
      "Built and maintain 15+ CI/CD pipelines that build and push Docker images to AWS ECR, and reviewed pipelines to replace mutable `latest` tags with fixed image versions for traceable deployments and reliable rollbacks.",
    result: "Deployment time reduced from 20 minutes to under 5 minutes.",
  },
  {
    name: "terraform-iac",
    status: "Running",
    ready: "1/1",
    restarts: "0",
    age: "1y",
    stack: ["Terraform", "AWS", "IAM"],
    summary:
      "Implemented Infrastructure as Code to provision environments consistently, with IAM role-based access control, secrets management and security best practices across AWS.",
    result: "Manual provisioning effort reduced by 80%.",
  },
  {
    name: "k8s-platform-ops",
    status: "Running",
    ready: "1/1",
    restarts: "0",
    age: "1y",
    stack: ["Kubernetes", "Helm", "Trivy"],
    summary:
      "Run Kubernetes cluster operations: deployment troubleshooting, resource optimization and capacity planning. Wrote runbooks that clean up unused pods, and found and fixed high-severity container image vulnerabilities through image scanning.",
  },
  {
    name: "monitoring-and-alerting",
    status: "Running",
    ready: "1/1",
    restarts: "0",
    age: "1y",
    stack: ["CloudWatch", "Prometheus", "Grafana", "Loki"],
    summary:
      "Set up monitoring and alerting for production workloads: HTTP 5xx alerts, Redis, PostgreSQL, ClickHouse and GCP Cloud SQL (availability, slow queries, performance metrics), plus centralized logging and tracing.",
    result: "Faster incident detection and a lower Mean Time to Resolution (MTTR).",
  },
  {
    name: "github-self-hosted-runner",
    status: "Running",
    ready: "1/1",
    restarts: "0",
    age: "1y",
    stack: ["GitHub Actions", "Docker", "Kubernetes"],
    summary:
      "Implemented a GitHub self-hosted runner so every CI pipeline runs in containerized environments, improving build consistency and scalability.",
  },
  {
    name: "aws-ec2-ansible-automation",
    status: "Completed",
    ready: "0/1",
    restarts: "0",
    age: "2y",
    stack: ["AWS EC2", "Ansible", "VPC"],
    summary:
      "Academic project (July 2024). Provisioned EC2 infrastructure with secure networking and wrote Ansible playbooks for package management across Ubuntu, CentOS and Fedora, with security groups and SSH access hardened.",
  },
  {
    name: "scalable-web-app-k8s",
    status: "Completed",
    ready: "0/1",
    restarts: "0",
    age: "2y",
    stack: ["Python", "MySQL", "Docker", "Kubernetes", "Ansible"],
    summary:
      "Academic project (Aug 2024). Containerized microservices with Docker and deployed them on Kubernetes with automated scaling and high availability on AWS EC2, configured with Ansible.",
  },
];

export const revisions: Revision[] = [
  {
    title: "DevOps + SRE Engineer",
    org: "Nudgebee · Pune",
    period: "May 2025 – now",
    current: true,
    points: [
      "Implemented Infrastructure as Code with Terraform, cutting manual provisioning effort by 80%.",
      "Managed Kubernetes operations: troubleshooting, resource optimization and capacity planning.",
      "Strengthened AWS security with IAM role-based access, secrets management and best practices.",
      "Configured monitoring and alerting for Redis, PostgreSQL, ClickHouse, GCP Cloud SQL and CloudWatch 5xx errors.",
      "Moved CI to a containerized GitHub self-hosted runner and automated cleanup of unused pods.",
      "Optimized AWS costs with CloudWatch monitoring and automated ECS scheduling.",
      "Found and fixed high-severity container image vulnerabilities in Kubernetes workloads.",
    ],
  },
  {
    title: "DevOps + SRE Intern",
    org: "Nudgebee · Pune",
    period: "Feb 2025 – May 2025",
    points: [
      "Built and maintained 15+ GitHub Actions pipelines, cutting deploy time from 20 minutes to under 5.",
      "Added centralized logging, monitoring and performance tracing to speed up issue resolution.",
      "Deployed apps on Kubernetes with Helm and on AWS ECS; migrated ECR repositories and S3 buckets across AWS accounts with minimal downtime.",
      "Replaced mutable `latest` image tags with fixed versions for traceable deployments and safe rollbacks.",
    ],
  },
  {
    title: "BE, Information Technology",
    org: "SPPU · AISSMS IOIT, Pune",
    period: "2025 · CGPA 8.06",
    points: ["Bachelor of Engineering in Information Technology."],
  },
  {
    title: "Diploma, Computer Engineering",
    org: "DBATU · IoPE Lonere, Maharashtra",
    period: "2022 · 9.02",
    points: ["Diploma in Computer Engineering."],
  },
];

export const community: string[] = [
  "Volunteer, Cloud Native Days Pune 2023",
  "Volunteer, Kubernetes Community Days Pune 2024",
  "Volunteer, Cloud Native Days Pune 2026",
];
