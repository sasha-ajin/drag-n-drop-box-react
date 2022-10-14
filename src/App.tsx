import React, { useRef } from "react";
import DraggableElem from "./DraggableElem";

function App() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <main>
      <div ref={containerRef} className="container">
        <DraggableElem containerRef={containerRef} />
        <DraggableElem containerRef={containerRef} />
      </div>
    </main>
  );
}

export default App;
