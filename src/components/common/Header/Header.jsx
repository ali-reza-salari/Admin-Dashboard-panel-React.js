import { useContext } from "react";
import {FaMoon , FaSun} from "react-icons/fa";
import MyProfile from "./../../../../public/assets/images/my-profile-image.jpg"
import { IoNotifications } from "react-icons/io5";
import ThemeContext from "../../../contexts/Theme.jsx";

export default function Header() {
    const { theme , toggleTheme } = useContext(ThemeContext)

    return (
        <header className="flex min-h-20 items-center justify-between border-b border-slate-200 bg-white px-5 dark:border-slate-800 dark:bg-slate-900 sm:px-8">
            <div className="hidden max-w-md flex-1 md:block"><label className="relative block"><span
                className="sr-only">Search</span>
                <svg className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                     viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="11" cy="11" r="7"/>
                    <path d="m20 20-4-4"/>
                </svg>
                <input className="w-full rounded-xl border-0 bg-slate-100 py-2.5 pl-10 pr-4 text-sm outline-none ring-brand-500 placeholder:text-slate-400 focus:ring-2 dark:bg-slate-800 dark:text-white" placeholder="Search orders, products, customers..."/>
            </label>
            </div>
            <div className="ml-auto flex items-center gap-2 sm:gap-4">

                <button className="grid h-10 w-10 place-items-center rounded-xl text-slate-500 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800" aria-label="Toggle color theme" onClick={toggleTheme}>
                    {
                        theme === "light" ? <FaMoon className={"size-6 cursor-pointer"} /> : <FaSun className={"size-6 cursor-pointer"} />
                    }
                </button>

                <button className="relative grid h-10 w-10 place-items-center rounded-xl text-slate-500 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800" aria-label="Notifications">
                    <IoNotifications className={"size-6 cursor-pointer"} />

                    <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-rose-500 ring-2 ring-white dark:ring-slate-900"></span>
                </button>

                <div className="hidden h-8 w-px bg-slate-200 dark:bg-slate-700 sm:block"></div>

                <button className="flex items-center gap-3 rounded-xl p-1.5 text-left hover:bg-slate-100 dark:hover:bg-slate-800">
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-brand-400 to-violet-700 text-xs font-bold text-white">
                        <img className={"rounded-full"} src={MyProfile}/>
                    </span>

                    <span className="hidden md:block"><span className="block text-sm font-semibold">Ali Reza Salari</span>
                        <span className="block text-xs text-slate-500">Store admin</span>
                    </span>
                </button>
            </div>
        </header>
    )
}