import { FC } from "react";
import FormAirplane from "../components/form-airplane";
// import React. {type FC} from "react"

// interface CreateAirplanePageProps{

// }

const createAirplanePage: FC = () => {
  return (
    <div>
      <div className="flex flex-row items justify-between">
        <div className="my-5 text-2xl font-bold">Tambah Data Airplane</div>
      </div>
      <FormAirplane type="ADD"/>
    </div>
  );
};

export default createAirplanePage;
