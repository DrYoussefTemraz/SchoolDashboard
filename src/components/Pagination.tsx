"use client"

import { ITEMS_PER_PAGE } from "@/lib/settings"
import { useRouter } from "next/navigation";

const Pagination = ({ page, count }: { page: number, count: number }) => {

    const router = useRouter()
    // conditions of the prev and next pagination {true or false condition}
    const hasPrev = ITEMS_PER_PAGE * (page - 1) > 0;
    const hasNext = ITEMS_PER_PAGE * (page - 1) + ITEMS_PER_PAGE < count;

    // change only the page number not other params on the url
    const changePage = (newPage: number) => {
        const params = new URLSearchParams(window.location.search);
        params.set("page", newPage.toString());
        router.push(`${window.location.pathname}?${params}`);
    };
    return (
        <div className='p-4 flex items-center justify-between text-gray-500'>
            <button
                disabled={!hasPrev}
                className="px-4 py-2 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={() => {
                    changePage(page - 1)
                }}
            >Prev
            </button>
            <div className="flex items-center gap-2 text-sm">

                {
                    Array.from({ length: Math.ceil(count / ITEMS_PER_PAGE) }, (_, index) => {
                        const pageIndex = index + 1;
                        return (
                            <button
                                key={pageIndex}
                                className={`px-2 rounded-sm ${page === pageIndex ? "bg-lamaSky" : ""}`}
                                onClick={() => { changePage(pageIndex) }}
                            >
                                {pageIndex}
                            </button>
                        )
                    })
                }

            </div>
            <button
                className="px-4 py-2 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={() => {
                    changePage(page + 1)
                }}
                disabled={!hasNext}
            >
                Next
            </button>

        </div>
    )
}

export default Pagination