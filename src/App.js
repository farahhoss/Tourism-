import "./App.css";

import {
  RouterProvider,
  createBrowserRouter,
  HashRouter,
  createHashRouter,
} from "react-router-dom";
import MainLayout from "./component/Layouts/MainLayout";

import Main from "./component/Main/Main";
import Main3 from "./component/Main3/Main3";

function App() {
  let routes = createHashRouter([
    {
      path: "/",
      element: <MainLayout />,

      children: [
        {
          index: true,
          element: <Main />,
        },
        {
          path: "main",
          element: <Main />,
        },
        {
          path: "reservesion",
          element: <Main />,
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
