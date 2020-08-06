import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";

export default [
    {
        path: "/",
        exact: true,
        layout: MainLayout,
        component: Home,
    },
    {
        path: "/song/:id",
        exact: true,
        layout: MainLayout,
        component: Home,
    },

];