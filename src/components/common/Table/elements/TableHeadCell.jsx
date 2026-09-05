export default function TableHeadCell({ children }) {
    return (
        <>
            {/*<p>TableHeadCell</p>*/}
            <th className={`px-5 py-3 font-semibold`}>
                {children}
            </th>
        </>
    )
}