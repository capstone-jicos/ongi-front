import BasicInfo from "../views/events/create/BasicInfo";
import Food from "../views/events/create/Food";
import Middlecheck from "..views/events/create/MiddleCheck";
import SetVenue from "../views/event/create/SetVenue";

export default[
    {
        path: "BasicInfo",
        component : BasicInfo
    },
    {
        path: "food",
        component : Food
    },
    {
        path: "MiddleCheck",
        component : Middlecheck
    },
    {
        path : "SetVenue",
        component : SetVenue
    }
];