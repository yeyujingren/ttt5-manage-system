import Vue from 'vue';
import VueRouter from 'vue-router';

const Login = () => import('@src/pages/login');
const AddActive = () => import('@src/pages/addActive');
const SearchAvtive = () => import('@src/pages/searchAvtive');
const ShowActive = () => import('@src/pages/showActive');
const AddAdmin = () => import('@src/pages/addAdmin');
const ShowAdmin = () => import('@src/pages/ShowAdmin');
const AddGoods = () => import('@src/pages/addGoods');
const SearchGoods = () => import('@src/pages/searchGoods');
const ShowGoods = () => import('@src/pages/showGoods');
const SearchOrder = () => import('@src/pages/searchOrder');
const ShowOrder = () => import('@src/pages/showOrder');
const SearchUser = () => import('@src/pages/searchUser');
const ShowUser = () => import('@src/pages/showUser');

Vue.use(VueRouter);

const routes = [
    {
      path: "/home",
      name: "home",
      component: Home,
      children: [
        {
          path: "/showAdmin",
          name: "showAdmin",
          component: ShowAdmin
        },
        {
          path: "/addAdmin",
          name: "addAdmin",
          component: AddAdmin
        },
        {
          path: "/showUser",
          name: "showUser",
          component: ShowUser
        },
        {
          path: "/searchUser",
          name: "searchUser",
          component: SearchUser
        },
        {
          path: "/addGoods",
          name: "addGoods",
          component: AddGoods
        },
        {
          path: "/showGoods",
          name: "showGoods",
          component: ShowGoods
        },
        {
          path: "/searchGoods",
          name: "searchGoods",
          component: SearchGoods
        },
        {
          path: "/showOrder",
          name: "showOrder",
          component: ShowOrder
        },
        {
          path: "/searchOrder",
          name: "searchOrder",
          component: SearchOrder
        },
        {
          path: "/showActive",
          name: "showActive",
          component: ShowActive
        },
        {
          path: "/addActive",
          name: "addActive",
          component: AddActive
        },
        {
          path: "/searchAvtive",
          name: "searchAvtive",
          component: SearchAvtive
        },
      ]
    },
    {
      path: "/",
      name: "Login",
      component: Login
    },
  ];
  
  const router = new VueRouter({
    base: "/",
    mode: "history",
    routes
  });
  
  export default router;