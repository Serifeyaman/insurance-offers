import Home from "pages/Home"
import Task1 from "pages/Task1"
import Task2 from "pages/Task2"
import Task3 from "pages/Task3"
import NotFound from "pages/NotFound"

export const routes = [
    {
        path: "/",
        element: <Home />

    },
    {
        path: "/task1",
        element: <Task1 />

    },
    {
        path: "/task2",
        element: <Task2 />

    },
    {
        path: "/task3",
        element: <Task3 />

    },
    {
        path: "*",
        element: <NotFound />
    }
]