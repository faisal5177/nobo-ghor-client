import { useState } from "react";

function App() {
  const [title, setTitle] = useState("Old Title");

  return (
    <div>
      <h1>{title}</h1>
      <button onClick={() => setTitle("New Title")}>Change Title</button>
    </div>
  );
}

export default App;
