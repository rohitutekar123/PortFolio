"use client";

import { useEffect, useState } from "react";

// Live clock in the owner's time zone. Renders "--:--" on the server and first paint to avoid a hydration mismatch.
export default function Clock({ timeZone }: { timeZone: string }) {
  const [time, setTime] = useState("--:--");

  useEffect(() => {
    const tick = () =>
      setTime(
        new Date().toLocaleTimeString("en-GB", {
          timeZone,
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
      );
    tick();
    const id = setInterval(tick, 15000);
    return () => clearInterval(id);
  }, [timeZone]);

  return <span>{time}</span>;
}
