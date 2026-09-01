import {NavLink} from "react-router";

export default function Sidebar() {
    return (
        <>
            <div className="flex items-center justify-between lg:mb-10">
                <NavLink to={"/"} className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-600 text-lg font-black text-white shadow-lg shadow-brand-500/25">V</span>
                    <span>
                        <span className="block text-lg font-bold tracking-tight">VELA</span>
                        <span className="block text-xs text-slate-500 dark:text-slate-400">Fashion Commerce</span>
                    </span>
                </NavLink>

                <button className="grid h-10 w-10 place-items-center rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 lg:hidden"
                        aria-label="Open navigation">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>
                </button>
            </div>

            <nav className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-1" aria-label="Main navigation">
                <NavLink
                    to={"/"}
                    className={({isActive}) => `${isActive ? "bg-brand-50 text-brand-700 dark:bg-brand-500 dark:text-brand-100 dark:hover:bg-brand-500" : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"} flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold`}
                    end
                >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="3" y="3" width="7" height="7" rx="1"/>
                        <rect x="14" y="3" width="7" height="7" rx="1"/>
                        <rect x="3" y="14" width="7" height="7" rx="1"/>
                        <rect x="14" y="14" width="7" height="7" rx="1"/>
                    </svg>
                    Overview
                </NavLink>

                <NavLink to={"products"} className={({isActive}) => `${isActive ? "bg-brand-50 text-brand-700 dark:bg-brand-500 dark:text-brand-100 dark:hover:bg-brand-500" : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"} flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold`} end>
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M6 2h12l3 7-9 13L3 9l3-7Z"/>
                        <path d="M3 9h18M9 2l3 7 3-7"/>
                    </svg>

                    Products

                    <span className="ml-auto hidden rounded-md bg-slate-100 px-2 py-0.5 text-xs dark:bg-slate-800 lg:block">248</span>
                </NavLink>

                <NavLink to={"orders"} className={({isActive}) => `${isActive ? "bg-brand-50 text-brand-700 dark:bg-brand-500 dark:text-brand-100 dark:hover:bg-brand-500" : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"} flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold`} end>
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M5 4h14l1 16H4L5 4Z"/>
                        <path d="M9 8h6"/>
                    </svg>
                    Orders
                    <span className="ml-auto hidden rounded-md bg-amber-100 px-2 py-0.5 text-xs text-amber-700 dark:bg-amber-500/15 dark:text-amber-300 lg:block">12</span>
                </NavLink>

                <NavLink to={"customers"} className={({isActive}) => `${isActive ? "bg-brand-50 text-brand-700 dark:bg-brand-500 dark:text-brand-100 dark:hover:bg-brand-500" : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"} flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold`} end>
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="8" r="4"/>
                        <path d="M4 21c1.5-4 4.1-6 8-6s6.5 2 8 6"/>
                    </svg>
                    Customers
                </NavLink>

                <NavLink to={"analytics"} className={({isActive}) => `${isActive ? "bg-brand-50 text-brand-700 dark:bg-brand-500 dark:text-brand-100 dark:hover:bg-brand-500" : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"} flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold`} end>
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M4 19V5M4 19h16M7 15v-4M12 15V7M17 15v-7"/>
                    </svg>
                    Analytics
                </NavLink>
            </nav>

            <div className="mt-8 hidden border-t border-slate-200 pt-5 dark:border-slate-800 lg:block">
                <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">Workspace</p>

                <NavLink to={"settings"} className={({isActive}) => `${isActive ? "bg-brand-50 text-brand-700 dark:bg-brand-500 dark:text-brand-100 dark:hover:bg-brand-500" : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"} flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold`} end>
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"/>
                        <path
                            d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.1 2.1-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5v.2h-3v-.2a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1-2.1-2.1.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H5.3v-3h.2a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1 2.1-2.1.1.1a1.7 1.7 0 0 0 1.9.3 1.7 1.7 0 0 0 1-1.5v-.2h3v.2a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1 2.1 2.1-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.5 1h.2v3h-.2a1.7 1.7 0 0 0-1.5 1Z"/>
                    </svg>
                    Settings
                </NavLink>
            </div>

            <div className="mt-8 hidden rounded-2xl bg-slate-950 p-4 text-white dark:bg-slate-800 lg:block">
                <p className="text-sm font-semibold">Need a hand?</p>
                <p className="mt-1 text-xs leading-5 text-slate-400">
                    Explore the Vela knowledge base for store setup guides.
                </p>

                <a href="#" className="mt-3 inline-block text-xs font-semibold text-brand-300 hover:text-brand-200">
                    Visit help center →
                </a>
            </div>
        </>
    )
}
