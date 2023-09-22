"use client"

import { Heading } from "@/components/ui/heading"
import { Separator } from "@/components/ui/separator"
import { OrderRow, columns } from "./columns"
import { DataTable } from "@/components/ui/data-table"

export const OrderClient = ({
    data
}: {
    data: OrderRow[]
}) => {
    return (
        <>
            <Heading
                title={`Orders (${data.length})`}
                description="Manage orders for your store"
            />
            <Separator />
            <DataTable searchKey='products' columns={columns} data={data}/>
        </>
    )
}