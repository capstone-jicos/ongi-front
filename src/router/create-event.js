import BasicInfo from "../views/events/create/BasicInfo";
import MiddleCheck from "../views/events/create/MiddleCheck";
import Food from "../views/events/create/Food";
import setVenue from "../views/events/create/SetVenue";
//import defaultFooter from "../views/events/cefaultFooter";


export default [
  {
    path: "baseinfo",
    component: BasicInfo
  },
  {
    path: "food",
    component: Food
  },
  {
    path: "middlecheck",
    component: MiddleCheck
  },
  {
    path: "setvenue",
    component: setVenue,
    //footer: defaultFooter
  }
];
