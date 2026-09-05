import Table from "../../components/common/Table/Table.jsx";
import TableHead from "../../components/common/Table/elements/TableHead.jsx";
import TableHeadCell from "../../components/common/Table/elements/TableHeadCell.jsx";
import TableBody from "../../components/common/Table/elements/TableBody.jsx";
import TableRow from "../../components/common/Table/elements/TableRow.jsx";
import TableCell from "../../components/common/Table/elements/TableCell.jsx";
import productsTableHeadCellRows from "../../data/productsTableHeadCellRows.js";
import productsData from "../../data/productsData.js";
import {IoIosMore} from "react-icons/io";

export default function ProductsTable({ tableHeader }) {
    return (
        <div className={`overflow-x-auto`}>
            {tableHeader}

            <Table>
                <TableHead>
                    {
                        productsTableHeadCellRows.map(row => (
                            <TableHeadCell key={row}>{row}</TableHeadCell>
                        ))
                    }
                </TableHead>

                <TableBody>
                    {
                        productsData.map(product => (
                            <TableRow key={product.id}>
                                <TableCell>
                                    <div className="px-2 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="h-11 w-11 rounded-lg bg-stone-200 dark:bg-stone-700">
                                                <img src={product.product_image} />
                                            </div>
                                            <div>
                                                <p className="font-semibold">{product.product_title}</p>
                                                <p className="mt-0.5 text-xs text-slate-500">{product.product_description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </TableCell>

                                <TableCell>
                                    <div className="px-5 py-4 text-slate-500">{product.product_brand}</div>
                                </TableCell>

                                <TableCell>
                                    <div className="px-5 py-4">
                                        <span className="font-semibold">{product.product_stock}</span>
                                    </div>
                                </TableCell>

                                <TableCell>
                                    <div className="px-5 py-4 font-semibold">${product.product_price.toLocaleString()}</div>
                                </TableCell>

                                <TableCell>
                                    <td className="px-5 py-4">
                                        <span className={`rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold dark:bg-emerald-500/15 ${product.product_stock === 0 ? "dark:text-yellow-300 text-yellow-700" : "dark:text-emerald-300 text-emerald-700"}`}>
                                            {product.product_stock === 0 ? "Low Stock" : "Active"}
                                        </span>
                                    </td>
                                </TableCell>

                                <TableCell>
                                    <div className="px-5 py-4">
                                        <button className="text-slate-400 hover:text-brand-600 cursor-pointer" aria-label="Product options">
                                            <IoIosMore className={"size-6"} />
                                        </button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </div>
    )
}