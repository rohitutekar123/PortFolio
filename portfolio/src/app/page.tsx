import Sidebar from "@/components/Sidebar";
import Hero from "@/components/Hero";
import NodePools from "@/components/NodePools";
import Pods from "@/components/Pods";
import Rollout from "@/components/Rollout";
import Events from "@/components/Events";

export default function Home() {
  return (
    <div className="shell">
      <Sidebar />
      <main>
        <Hero />
        <NodePools />
        <Pods />
        <Rollout />
        <Events />
        <footer>apiVersion: portfolio/v1 · kind: Person · built with Next.js and TypeScript</footer>
      </main>
    </div>
  );
}
