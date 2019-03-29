import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Reg from './views/Reg.vue'
import Detail from './views/Detail.vue'
import Cart from './views/Cart.vue'
import Home from './views/Home.vue'
import List from './views/List.vue'


Vue.use(Router);


const router=new Router({

  routes:[{

     path:'/login',
     name:'Login',
     component:Login

  },{
      path:'/reg',
      name:'Reg',
      component:Reg
  },{
    path:'/detail/:id',
    name:'Detail',
    component:Detail,
  },{
    path:'/cart',
    name:'Cart',
    component:Cart,
  },{
    path:'/list',
    name:'List',
    component:List,
  },{
    path:'/',
    name:'Home',
    component:Home,
}]


})


export default router;




