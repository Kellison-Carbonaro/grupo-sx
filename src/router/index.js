import { createRouter, createWebHistory } from "vue-router";
import home from "../home.vue";
import empresaView from "../components/empresas.vue";
import empresaCadastro from "../components/empresa.vue";
import colaboradorView from "../components/colaboradores.vue";
import coloboradorCadastro from "../components/colaborador.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: home,
  },
  {
    path: "/empresas",
    name: "empresas",
    component: empresaView,
  },
  {
    path: "/cadastro-empresa",
    name: "cadastro-empresas",
    component: empresaCadastro,
  },
  {
    path: "/colaboradores",
    name: "colaboradores",
    component: colaboradorView,
  },
  {
    path: "/cadastro-colaborador",
    name: "cadastro-colaborador",
    component: coloboradorCadastro,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({ history: createWebHistory(), routes })

export default router;
