import BasicInfo from "../views/events/create/BasicInfo";
import SetVenue from "../views/events/create/SetVenue";
import MiddleCheck from "../views/events/create/MiddleCheck";
import Food from "../views/events/create/Food";
import Confirm from "../views/events/create/Confirm";


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
    component: SetVenue
  },
  {
      path: "confirm",
      component: Confirm
  }
];
