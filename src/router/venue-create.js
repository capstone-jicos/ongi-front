import Type from "../views/provider/create/Type";
import Capacity from "../views/provider/create/Capacity";
import BasicInfo from "../views/provider/create/BasicInfo";
import Amenity from "../views/provider/create/Amenity";
import Photos from "../views/provider/create/Photos";
import Name from "../views/provider/create/Name";
import Requirements from "../views/provider/create/Requirements";
import ConfirmProcess from "../views/provider/create/ConfirmProcess";
import Restrictions from "../views/provider/create/Restriction";
import Experience from "../views/provider/create/Experience";
import Fee from "../views/provider/create/Fee";
import Regulations from "../views/provider/create/Regulations";

export default [
  {
    path: "type",
    component: Type
  },
  {
    path: "capacity",
    component: Capacity
  },
  {
    path: "basic-info",
    component: BasicInfo
  },
  {
    path: "amenity",
    component: Amenity
  },
  {
    path: "photos",
    component: Photos
  },
  {
    path: "name",
    component: Name
  },
  {
    path: "requirements",
    component: Requirements
  },
  {
    path: "confirm-process",
    component: ConfirmProcess
  },
  {
    path: "restrictions",
    component: Restrictions
  },
  {
    path: "experience",
    component: Experience
  },
  {
    path: "fee",
    component: Fee
  },
  {
    path: "regulations",
    component: Regulations
  }
];
