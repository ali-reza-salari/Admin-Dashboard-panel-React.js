import { MdOutlineGridView , MdOutlineAnalytics  } from "react-icons/md";
import { IoShirtOutline } from "react-icons/io5";
import { FiShoppingBag } from "react-icons/fi";
import { LuUserRound } from "react-icons/lu";

const sidebarMenus = [
    {
        id: 1,
        menu_name: "Overview",
        path: "/",
        icon: MdOutlineGridView
    },
    {
        id: 2,
        menu_name: "Products",
        path: "products",
        icon: IoShirtOutline
    },
    {
        id: 3,
        menu_name: "Orders",
        path: "orders",
        icon: FiShoppingBag
    },
    {
        id: 4,
        menu_name: "Customers",
        path: "customers",
        icon: LuUserRound
    },
    {
        id: 5,
        menu_name: "Analytics",
        path: "analytics",
        icon: MdOutlineAnalytics
    }
]

export default sidebarMenus