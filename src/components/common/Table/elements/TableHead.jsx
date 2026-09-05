export default function TableHead({ children }) {
    return (
        <thead className={`bg-slate-50 text-xs uppercase tracking-wide text-slate-500 dark:bg-slate-800/50`}>
            <tr>
                {/*<p>TableHead</p>*/}
                {children}
            </tr>
        </thead>
    )
}