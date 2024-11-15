import React, { type FC } from "react";
import type { Metadata } from "next";
import FormFlight from "../components/form-flight";
import { getAirplanes } from "../../airplanes/lib/data";
// import { useFormState } from "react-dom";
// import { saveFlight } from "../lib/action";
// import ActionResult from "@/app/dashboard/(auth)/signin/form/action";

export const metadata: Metadata = {
  title: "Dashboard | Create Data Flight", // Judul halaman yang ditampilkan di browser
};

const CreateFlightPage: FC = async () => {
  const airplanes = await getAirplanes(); // Tambahkan tanda kurung untuk memanggil fungsi


  return (
    <div>
      <div className="flex flex-row items justify-between">
        <div className="my-5 text-2xl font-bold">Tambah Data Flight</div>
      </div>
      <FormFlight type="ADD" airplanes={airplanes} />
    </div>
  );
};

export default CreateFlightPage;
