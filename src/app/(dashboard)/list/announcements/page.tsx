import FormModal from "@/components/FormModal"
import Pagination from "@/components/Pagination"
import Table from "@/components/Table"
import TableSearch from "@/components/TableSearch"
import prisma from "@/lib/prisma"
import { ITEMS_PER_PAGE } from "@/lib/settings"
import { role } from "@/lib/utilis"
import { Announcement, Class, Prisma } from "@prisma/client"
import Image from "next/image"
import Link from "next/link"



type AnnouncementList = Announcement
    & { class: Class }

const columns = [
    {
        header: "Title",
        accessor: "title",
    },
    {
        header: "Class",
        accessor: "class",
    },
    {
        header: "Date",
        accessor: "date",
        className: "hidden md:table-cell",
    },
    ...(role === "admin" ? [{
        header: "Actions",
        accessor: "action",
    }] : []),
];
const renderRow = (item: AnnouncementList) => (
    <tr key={item.id}
        className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurple">
        <td className="flex items-center gap-4 p-4">{item.title}</td>
        <td>{item.class.name}</td>
        <td className="hidden md:table-cell">
            {new Intl.DateTimeFormat("en-US").format(item.date)}
        </td>

        {/* Actions */}
        <td>
            <div className="flex items-center gap-3">
                {
                    role === "admin" &&
                    <>
                        <FormModal table="announcement" type="update" data={item} />
                        <FormModal table="announcement" type="delete" id={item.id} />
                    </>
                }
            </div>
        </td>

    </tr>

)
const AnnouncementListPage = async (
    { searchParams
    }:
        {
            searchParams:
            {
                // queryparams is an object
                [key: string]: string | undefined
            }
        }
) => {
    const { page, ...queryParams } = searchParams;
    const p = page ? parseInt(page) : 1;
    // setting roles for fetching data URL PARAMS CONDITIONS to protect our route data
    const query: Prisma.AnnouncementWhereInput = {}

    if (queryParams) {
        for (const [key, value] of Object.entries(queryParams)) {
            if (value !== undefined) {
                switch (key) {

                    case "search":
                        query.title = {
                            contains: value, mode: "insensitive"
                        }
                        break;
                    default:
                        break
                }
            }
        }
    }

    // fetching data from prisma tables
    // adding conditions by whrere methos
    const [data, count] = await prisma.$transaction([
        prisma.announcement.findMany({
            where: query,
            include: {
                class: true
            },
            take: ITEMS_PER_PAGE,
            skip: ITEMS_PER_PAGE * (p - 1)
        }),
        prisma.announcement.count(
            {
                where: query
            },
        )
    ])

    return (
        <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
            {/* Top */}
            <div className="flex items-center justify-between">
                <h1 className="hidden md:block text-lg font-semibold">All Announcements</h1>
                <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                    <TableSearch />
                    <div className="flex items-center gap-4 self-end">
                        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
                            <Image src="/filter.png" alt="" width={14} height={14} />
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
                            <Image src="/sort.png" alt="" width={14} height={14} />
                        </button>
                        {role === "admin" &&
                            // <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
                            //     <Image src="/plus.png" alt="" width={14} height={14} />
                            // </button>
                            <FormModal table="announcement" type="create" />
                        }


                    </div>
                </div>
            </div>
            {/* List */}
            <Table columns={columns} renderRow={renderRow} data={data} />

            {/* Pagination */}
            <Pagination page={p} count={count} />

        </div>
    )
}

export default AnnouncementListPage