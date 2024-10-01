// import SharedContentReceiver from "./SharedContentReceiver";
import Home from "./Home"; // Your homepage or other components
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SharedContentReceiver from "./SharedContentReceiver";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/shared-content-receiver",
      element: <SharedContentReceiver />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
