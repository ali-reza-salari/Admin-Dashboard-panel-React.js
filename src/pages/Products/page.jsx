import PagesTitleSection from "../../features/PagesTitleSection/PagesTitleSection.jsx";
import { IoIosSearch } from "react-icons/io";
import productsData from "../../data/productsData.js";
import { IoIosMore } from "react-icons/io";
import useTitle from "../../hooks/useTitle.jsx";

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

    return (
        <>
            <PagesTitleSection
                page_title={"Product inventory"}
                page_description={"Manage catalogue, stock and product availability."}
                trigger={<AddProductBtn />}
            />

            <section className="rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
                <div className="flex flex-col gap-3 p-5 md:flex-row">
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

                <div className="overflow-x-auto">
                    <table className="w-full min-w-[760px] text-left text-sm">
                        <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500 dark:bg-slate-800/50">

                        <tr>
                            <th className="w-12 px-5 py-3">
                                <input type="checkbox"
                                       className="rounded border-slate-300 text-brand-600 focus:ring-brand-500"
                                       aria-label="Select all products"/>
                            </th>

                            <th className="px-2 py-3 font-semibold">Product</th>
                            <th className="px-5 py-3 font-semibold">Brand</th>
                            <th className="px-5 py-3 font-semibold">Stock</th>
                            <th className="px-5 py-3 font-semibold">Price</th>
                            <th className="px-5 py-3 font-semibold">Status</th>
                            <th className="px-5 py-3"></th>
                        </tr>

                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800">

                        {
                            productsData.map(product => (
                                <tr>
                                    <td className="px-5 py-4">
                                        <input type="checkbox"
                                               className="rounded border-slate-300 text-brand-600 focus:ring-brand-500"
                                               aria-label="Select Linen blazer"/>
                                    </td>

                                    <td className="px-2 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="h-11 w-11 rounded-lg bg-stone-200 dark:bg-stone-700">
                                                <img src={product.product_image} />
                                            </div>
                                            <div>
                                                <p className="font-semibold">{product.product_title}</p>
                                                <p className="mt-0.5 text-xs text-slate-500">{product.product_description}</p>
                                            </div>
                                        </div>
                                    </td>

                                    <td className="px-5 py-4 text-slate-500">{product.product_brand}</td>

                                    <td className="px-5 py-4">
                                        <span className="font-semibold">{product.product_stock}</span>
                                    </td>

                                    <td className="px-5 py-4 font-semibold">${product.product_price.toLocaleString()}</td>

                                    <td className="px-5 py-4">
                                        <span className={`rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold dark:bg-emerald-500/15 ${product.product_stock === 0 ? "dark:text-yellow-300 text-yellow-700" : "dark:text-emerald-300 text-emerald-700"}`}>
                                            {product.product_stock === 0 ? "Low Stock" : "Active"}
                                        </span>
                                    </td>

                                    <td className="px-5 py-4">
                                        <button className="text-slate-400 hover:text-brand-600 cursor-pointer" aria-label="Product options">
                                            <IoIosMore className={"size-6"} />
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }

                        </tbody>
                    </table>
                </div>
            </section>
        </>
    )
}