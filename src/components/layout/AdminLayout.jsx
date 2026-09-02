import Sidebar from "../common/Sidebar/Sidebar.jsx";
import {Outlet} from "react-router";
import Header from "../common/Header/Header.jsx";

export default function AdminLayout() {
    return (
        <section id={"root"} className={"min-h-screen "}>
            <aside className="border-b border-slate-200 bg-white px-4 py-5 dark:border-slate-800 dark:bg-slate-900 lg:fixed lg:inset-y-0 lg:w-80 lg:border-b-0 lg:border-r lg:px-5">
                <Sidebar />
            </aside>
            <main className={"min-w-0 flex-1 lg:ml-80 dark:text-white text-black"}>
                <Header />
                <div className={"mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:py-10"}>
                    <Outlet />
                </div>
            </main>
        </section>
    )
}