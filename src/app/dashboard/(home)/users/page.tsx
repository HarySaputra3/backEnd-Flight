// import { Button } from "@/components/ui/button";
// import { Plus } from "lucide-react";
// import Link from "next/link";
import React from "react";
import type { Metadata } from "next";
import { DataTable } from "../airplanes/components/data-table";
import { columns } from "./components/columns-users";
import { getCustomers } from "./lib/data";

export const metadata: Metadata = {
  title: "Dashboard | Users",
};

export default async function UsersPages() {
  const users = await getCustomers();
  return (
    <>
      <div className="flex flex-row items justify-between">
        <div className="my-5 text-2xl font-bold">Users</div>
      </div>
      <DataTable columns={columns} data={users} />
    </>
  )
};