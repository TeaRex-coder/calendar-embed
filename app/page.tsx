"use client";

import Calendar from "./components/calendar";
import { Analytics } from "@vercel/analytics/react";

const App: React.FC = () => {
  return (
    <div className="pt-3">
      <Calendar />
      <Analytics />
    </div>
  );
};

export default App;
