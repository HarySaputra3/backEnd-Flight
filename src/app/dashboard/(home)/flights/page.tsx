import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import type { Metadata } from "next";
import React, { type FC } from "react";
import Link from "next/link";
import { columns } from "./components/columns-flight";
import { DataTable } from "../airplanes/components/data-table";
import { getFlights } from "./lib/data";

export const metadata: Metadata = {
  title: "Dashboard | Flights",
};

const FlightPage: FC = async () => {
  const data = await getFlights(); // Panggil fungsi getFlights dengan benar

  return (
    <>
      <div className="flex flex-row items-center justify-between my-5">
        <div className="text-2xl font-bold">Flights</div>
        <Button asChild>
          <Link href={"/dashboard/flights/create"}>
            <Plus className="mr-2 h-4 w-4" />
            Tambah Data
          </Link>
        </Button>
      </div>
      {/* Tidak perlu membungkus data dalam array */}
      <DataTable columns={columns} data={data} />
    </>
  );
};

export default FlightPage;
