"use client";

import type { ActionResult } from "@/app/dashboard/(auth)/signin/form/action";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { type FC } from "react";
import { useFormState } from "react-dom";
import { saveAirplane, updateAirplane } from "../lib/actions";
import type { Airplane } from "@prisma/client";
import SubmitButtonForm from "../../components/submit-form-button";

interface FormAirplanePageProps {
  type?: "ADD" | "EDIT";
  defaultValues?: Airplane | null;
}

const initialFormState: ActionResult = {
  errorTitle: null,
  errorDesc: [],
};

const FormAirplane: FC<FormAirplanePageProps> = ({ type, defaultValues }) => {
  // Menggunakan ternary operator untuk memilih antara "saveAirplane" atau "updateAirplaneWithId"
  const updateAirplaneWithId = (_state: ActionResult, formData: FormData) =>
    updateAirplane(null, defaultValues?.id || "", formData);

  const [state, formAction] = useFormState(
    type === "ADD" ? saveAirplane : updateAirplaneWithId,
    initialFormState
  );

  return (
    <form action={formAction} className="w-[40%] space-y-4">
      {state?.errorTitle && (
        <div className="my-7 bg-red-500 p-4 rounded-lg text-white">
          <div className="font-bold mb-4">{state.errorTitle}</div>
          <ul className="list-disc list-inside">
            {state.errorDesc?.map((value, index) => (
              <li key={index + value}>{value}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="space-y-2">
        <Label htmlFor="code">Kode Pesawat</Label>
        <Input
          placeholder="Kode Pesawat..."
          name="code"
          id="code"
          defaultValue={defaultValues?.code || ""}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="name">Nama Pesawat</Label>
        <Input
          placeholder="Nama Pesawat..."
          name="name"
          id="name"
          defaultValue={defaultValues?.name || ""}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="image">Upload Foto</Label>
        <Input
          placeholder="Upload Foto..."
          name="image"
          id="image"
          type="file"
          required
        />
      </div>

      <SubmitButtonForm />
    </form>
  );
};

export default FormAirplane;
