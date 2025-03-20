import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import "./index.css";

function App() {
  return <RouterProvider router={router} fallbackElement={<div>Loading...</div>} />;
}

export default App;
