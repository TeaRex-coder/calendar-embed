import Calendar from "./components/Calendar";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <div>
      <Calendar />
      <Analytics />
    </div>
  );
}

export default App;
