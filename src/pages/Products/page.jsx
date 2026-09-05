import PagesTitleSection from "../../features/PagesTitleSection/PagesTitleSection.jsx";
import useTitle from "../../hooks/useTitle.jsx";
import ProductsTable from "../../features/ProductsTable/ProductsTable.jsx";
import {IoIosSearch} from "react-icons/io";

export default function Products() {
    useTitle("Product's");
    const AddProductBtn = () => {
        return <button
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/20 transition hover:bg-brand-700">
            <svg
                className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 5v14M5 12h14"/>
            </svg>
            Add product
        </button>
    }
    const ProductsTableHeader = () => {
        return <div className="flex flex-col gap-3 p-5 md:flex-row">
            <label className="relative flex-1">
                <IoIosSearch className={"pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400 size-6"} />

                <input className="w-full rounded-xl border border-slate-200 bg-transparent py-2.5 pl-10 pr-4 text-sm outline-none focus:border-brand-500 dark:border-slate-700"
                       placeholder="Search products..."/>
            </label>

            <select
                className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm dark:border-slate-700 dark:bg-slate-800">
                <option>All categories</option>
                <option>Women's wear</option>
                <option>Men's wear</option>
            </select>

            <select
                className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm dark:border-slate-700 dark:bg-slate-800">
                <option>All statuses</option>
                <option>Active</option>
                <option>Low stock</option>
            </select>

            <button
                className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800">Filter
            </button>
        </div>
    }

    return (
        <>
            <PagesTitleSection
                page_title={"Product inventory"}
                page_description={"Manage catalogue, stock and product availability."}
                trigger={<AddProductBtn />}
            />

            <section className="rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
                <ProductsTable
                    tableHeader={<ProductsTableHeader />}
                />
            </section>
        </>
    )
}