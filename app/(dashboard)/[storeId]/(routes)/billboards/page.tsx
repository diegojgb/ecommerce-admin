import prismadb from "@/lib/prismadb";
import { BillboardClient } from "./components/client";
import { BillboardRow } from "./components/columns";
import { format } from "date-fns"

export default async function BillboardsPage({
    params
}: {
    params: { storeId: string }
}) {
    const billboards = await prismadb.billboard.findMany({
        where: {
            storeId: params.storeId
        },
        orderBy: {
            createdAt: 'desc'
        }
    });

    const formattedBillboards: BillboardRow[] = billboards.map(item => ({
        id: item.id,
        label: item.label,
        createdAt: format(item.createdAt, "MMMM do, yyyy")
    }))

    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <BillboardClient data={formattedBillboards}/>
            </div>
        </div>
    )
}