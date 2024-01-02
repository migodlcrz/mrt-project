import { createBrowserRouter } from "react-router-dom";
import Admin from "../pages/admin";
import QuezonaveIn from "../pages/station/quezonave/quezonave-in";
import NorthaveIn from "../pages/station/northave/northave-in";
import NorthaveOut from "../pages/station/northave/northave-out";
import QuezonaveOut from "../pages/station/quezonave/quezonave-out";
import Dashboard from "../pages/admin/dashboard";
import Navbar from "../components/NavBar";
import Create from "../pages/admin/dashboard/create";
import Delete from "../pages/admin/dashboard/delete";
import Read from "../pages/admin/dashboard/read";
import Update from "../pages/admin/dashboard/update";

export const router = createBrowserRouter([
    {
      path: "/",
      children: [
        {
          path: "admin",
          element: <Admin />,
        }
      ]
    },
    {
      path: "/",
      children: [
        {
          path: "admin",
          element: <Navbar />,
          children: [
            {
              path: "dashboard",
              element: <Dashboard />,
            }
          ]
        }
      ]
    },
    {
      path: "/",
      children: [
        {
          path: "admin",
          children: [
            {
              path: "dashboard",
              children: [
                {
                  path: "create",
                  element: <Create />
                },
                {
                  path: "read",
                  element: <Read />
                },
                {
                  path: "update",
                  element: <Update />                  
                },
                {
                  path: "delete",
                  element: <Delete />
                }
              ]
            }
          ]
        }
      ]
    },
    
    {
      path: "station",
      children: [
        {
          path: "northave",
          children: [
            {
              path: "northave-in",
              element: <NorthaveIn />,
            },
            {
              path: "northave-out",
              element: <NorthaveOut />,
            }
          ]
        },
        {
          path: "quezonave",
          children: [
            {
              path: "quezonave-in",
              element: <QuezonaveIn/>,
            },
            {
              path: "quezonave-out",
              element: <QuezonaveOut/>,
            }
          ]
        }
      ],
    },
  ]);