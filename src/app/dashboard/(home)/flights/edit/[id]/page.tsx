import React, { type FC } from "react";
import type { Metadata } from "next";
import { getAirplanes } from "../../../airplanes/lib/data";
import FormFlight from "../../components/form-flight";
import { getFlightById } from "../../lib/data";

type Params = {
  id: string;
};

interface EditFlightPageProps {
  params: Params;
}

export const metadata: Metadata = {
  title: "Dashboard | Edit Data Flights", // Judul halaman yang ditampilkan di browser
};

const EditFlightPage: FC<EditFlightPageProps> = async ({ params }) => {
  const airplanes = await getAirplanes();
    const flight = await getFlightById(params.id)


//   console.log(params.id);

  return (
    <div>
      <div className="flex flex-row items justify-between">
        <div className="my-5 text-2xl font-bold">Edit Data Flight</div>
      </div>
      <FormFlight type="EDIT" airplanes={airplanes} defaultValues={flight} />
    </div>
  );
};

export default EditFlightPage;
