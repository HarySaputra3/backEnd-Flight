// import { Button } from "@/components/ui/button";
// import { Plus } from "lucide-react";
// import Link from "next/link";
import React from "react";
import type { Metadata } from "next";
import { DataTable } from "../airplanes/components/data-table";
import { columns } from "./components/column-ticket";
import { getTickets } from "./lib/data";

export const metadata: Metadata = {
  title: "Dashboard | Tickets",
};

export default async function TicketsPages() {
  const tickets = await getTickets();
  return (
    <>
      <div className="flex flex-row items justify-between">
        <div className="my-5 text-2xl font-bold">Tickets</div>
      </div>
      <DataTable columns={columns} data={tickets} />
    </>
  );
}
