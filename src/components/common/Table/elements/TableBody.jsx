export default function TableBody({ children }) {
    return (
        <tbody className={`divide-y divide-slate-100 dark:divide-slate-800`}>
            {/*<p>TableBody</p>*/}
            {children}
        </tbody>
    )
}