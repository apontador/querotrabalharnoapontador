import Vue from "vue"
import VueRouter from "vue-router"
import LocationList from "../views/LocationList"
import LocationForm from "../views/LocationForm"

Vue.use(VueRouter)

  const routes = [
  {
    path: "/",
    redirect: "/locations/1"
  },
  {
    path: "/locations/:page",
    name: "LocationList",
    component: LocationList,
    props: true
  },
  {
    path: "/new-location",
    name: "LocationForm",
    component: LocationForm
  }
]

const router = new VueRouter({
  routes
})

export default router
