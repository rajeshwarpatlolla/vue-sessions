import Home from "@/components/Home.vue";
import Header from "@/components/Header.vue";

const routes = [
  {
    name: "login",
    path: "/login",
    meta: { auth: false },
    component: () => import("../components/Login.vue"),
  },
  {
    name: "default",
    path: "*",
    meta: { auth: false },
    component: () => import("../components/NotFoundComp.vue"),
  },
  {
    path: "/",
    redirect: "/login",
    meta: { auth: false },
  },
  {
    name: "app",
    path: "/app",
    component: Header,
    children: [
      {
        name: "home",
        path: "students",
        component: Home,
        meta: { auth: true, accessibleFor: ["ADMIN", "MANAGER"] },
      },
      {
        name: "details",
        path: "studentsdetails",
        component: () => import("../components/Details.vue"),
        meta: { auth: true },
      },
    ],
  },
];

export default routes;
