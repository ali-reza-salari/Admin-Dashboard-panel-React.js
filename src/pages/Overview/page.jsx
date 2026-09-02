export default function Overview() {
    return (
        <>
            <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                <div>
                    <p className="text-sm font-medium text-brand-600 dark:text-brand-300">Monday, October 16</p>
                    <h1 className="mt-1 text-3xl font-bold tracking-tight">Good morning, Ali Reza</h1>
                    <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Here’s what’s happening with Vela
                        today.</p>
                </div>

                <button
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/20 transition hover:bg-brand-700">
                    <svg
                        className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M12 5v14M5 12h14"/>
                    </svg>
                    Add product
                </button>
            </div>

            <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                <article
                    className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
                    <div className="flex items-start justify-between">
              <span
                  className="grid h-10 w-10 place-items-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-500/15 dark:text-brand-300">
                <svg
                    className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M3 3h2l2 13h10l2-9H6"/>
                  <circle cx="9" cy="20" r="1"/>
                  <circle cx="17" cy="20" r="1"/>
                </svg>
              </span>
                        <span
                            className="rounded-lg bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300">+12.5%</span>
                    </div>
                    <p className="mt-5 text-sm text-slate-500">Total sales</p>
                    <p className="mt-1 text-2xl font-bold">$24,780.00</p>
                    <p className="mt-2 text-xs text-slate-400">vs. $22,012 last month</p>
                </article>
                <article
                    className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
                    <div className="flex items-start justify-between"><span
                        className="grid h-10 w-10 place-items-center rounded-xl bg-violet-50 text-violet-600 dark:bg-violet-500/15 dark:text-violet-300"><svg
                        className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M5 4h14l1 16H4L5 4Z"/>
                  <path d="M9 8h6"/>
                </svg></span><span
                        className="rounded-lg bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300">+8.2%</span>
                    </div>
                    <p className="mt-5 text-sm text-slate-500">Orders</p>
                    <p className="mt-1 text-2xl font-bold">1,248</p>
                    <p className="mt-2 text-xs text-slate-400">103 orders this week</p>
                </article>
                <article
                    className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
                    <div className="flex items-start justify-between"><span
                        className="grid h-10 w-10 place-items-center rounded-xl bg-amber-50 text-amber-600 dark:bg-amber-500/15 dark:text-amber-300"><svg
                        className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="8" r="4"/>
                  <path d="M4 21c1.5-4 4.1-6 8-6s6.5 2 8 6"/>
                </svg></span><span
                        className="rounded-lg bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300">+18.4%</span>
                    </div>
                    <p className="mt-5 text-sm text-slate-500">New customers</p>
                    <p className="mt-1 text-2xl font-bold">328</p>
                    <p className="mt-2 text-xs text-slate-400">32 new this week</p>
                </article>
                <article
                    className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
                    <div className="flex items-start justify-between"><span
                        className="grid h-10 w-10 place-items-center rounded-xl bg-rose-50 text-rose-600 dark:bg-rose-500/15 dark:text-rose-300"><svg
                        className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M4 19V5M4 19h16M7 15v-4M12 15V7M17 15v-7"/>
                </svg></span><span
                        className="rounded-lg bg-rose-50 px-2 py-1 text-xs font-semibold text-rose-700 dark:bg-rose-500/15 dark:text-rose-300">-2.4%</span>
                    </div>
                    <p className="mt-5 text-sm text-slate-500">Conversion rate</p>
                    <p className="mt-1 text-2xl font-bold">3.62%</p>
                    <p className="mt-2 text-xs text-slate-400">vs. 3.71% last month</p>
                </article>
            </section>

            <section className={"mt-6 grid gap-6 xl:grid-cols-3"}>
                <article
                    className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900 xl:col-span-2">
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="font-bold">Sales overview</h2>
                            <p className="mt-1 text-sm text-slate-500">Revenue performance this week</p>
                        </div>

                        <select
                            className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-600 outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
                            <option>Last 7 days</option>
                            <option>Last 30 days</option>
                        </select>
                    </div>

                    <div className="mt-8 flex h-48 items-end gap-2 sm:gap-4">
                        <div className="flex h-full flex-1 flex-col justify-end gap-2">
                            <span className="rounded-t-md bg-brand-100 dark:bg-brand-500/20 h-[40%]"></span>
                            <small className="text-center text-xs text-slate-400">Mon</small>
                        </div>

                        <div className="flex h-full flex-1 flex-col justify-end gap-2">
                            <span className="rounded-t-md bg-brand-100 dark:bg-brand-500/20 h-[56%]"></span>
                            <small className="text-center text-xs text-slate-400">Tue</small>
                        </div>

                        <div className="flex h-full flex-1 flex-col justify-end gap-2">
                            <span className="rounded-t-md bg-brand-100 dark:bg-brand-500/20 h-[45%]"></span>
                            <small className="text-center text-xs text-slate-400">Wed</small>
                        </div>

                        <div className="flex h-full flex-1 flex-col justify-end gap-2">
                            <span className="rounded-t-md bg-brand-500 h-[83%]"></span>
                            <small
                                className="text-center text-xs font-semibold text-brand-600 dark:text-brand-300">Thu</small>
                        </div>

                        <div className="flex h-full flex-1 flex-col justify-end gap-2">
                            <span className="rounded-t-md bg-brand-100 dark:bg-brand-500/20 h-[68%]"></span>
                            <small className="text-center text-xs text-slate-400">Fri</small>
                        </div>

                        <div className="flex h-full flex-1 flex-col justify-end gap-2">
                            <span className="rounded-t-md bg-brand-100 dark:bg-brand-500/20 h-[92%]"></span>
                            <small className="text-center text-xs text-slate-400">Sat</small>
                        </div>

                        <div className="flex h-full flex-1 flex-col justify-end gap-2">
                            <span className="rounded-t-md bg-brand-100 dark:bg-brand-500/20 h-[62%]"></span>
                            <small className="text-center text-xs text-slate-400">Sun</small>
                        </div>
                    </div>
                </article>

                <article
                    className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="font-bold">Top categories</h2>
                            <p className="mt-1 text-sm text-slate-500">By revenue</p>
                        </div>
                        <button className="text-sm font-semibold text-brand-600 dark:text-brand-300">View all</button>
                    </div>
                    <div className="mt-7 space-y-5">
                        <div>
                            <div className="mb-2 flex justify-between text-sm">
                                <span>Women's wear</span>
                                <span className="font-semibold">42%</span>
                            </div>

                            <div className="h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                                <div className="h-full w-[42%] rounded-full bg-brand-500">
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="mb-2 flex justify-between text-sm">
                                <span>Men's wear</span>
                                <span className="font-semibold">31%</span>
                            </div>
                            <div className="h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                                <div className="h-full w-[31%] rounded-full bg-violet-500"></div>
                            </div>
                        </div>
                        <div>
                            <div className="mb-2 flex justify-between text-sm"><span>Accessories</span><span
                                className="font-semibold">18%</span></div>
                            <div className="h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                                <div className="h-full w-[18%] rounded-full bg-amber-500"></div>
                            </div>
                        </div>
                    </div>
                </article>
            </section>
        </>
    )
}