// import SharedContentReceiver from "./SharedContentReceiver";
import Home from "./Home"; // Your homepage or other components
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SharedContentReceiver from "./SharedContentReceiver";
import NotFound from "./NotFound";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/share",
      element: <SharedContentReceiver />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
