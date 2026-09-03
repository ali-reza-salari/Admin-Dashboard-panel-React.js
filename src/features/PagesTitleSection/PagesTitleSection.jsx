export default function PagesTitleSection(
    {
        show_date = undefined,
        page_title = "page title",
        page_description = undefined,
        trigger = undefined,
    }
) {
    return (
        <div className={"mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center"}>
            <div>
                <p className="text-sm font-medium text-brand-600 dark:text-brand-300">{show_date}</p>
                <h1 className="mt-1 text-3xl font-bold tracking-tight">{page_title}</h1>
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                    {page_description}
                </p>
            </div>
            { trigger }
        </div>
    )
}