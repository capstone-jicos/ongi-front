import BasicInfo from "../views/events/create/BasicInfo";
import SetVenue from "../views/events/create/SetVenue";
import MiddleCheck from "../views/events/create/MiddleCheck";
import Food from "../views/events/create/Food";

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
  }
];
