"use client";

import React, { type FC } from "react";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { useFormStatus } from "react-dom";
import { deleteFlight } from "../lib/action";
// import { deleteAirplane } from "../lib/actions";

interface DeleteFlightProps {
  id: string;
}
function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button size="sm" disabled={pending} type="submit" variant="destructive">
      <Trash className="mr-2 h-4 w-4" />
      Hapus
    </Button>
  );
}

const DeleteFlight: FC<DeleteFlightProps> = ({ id }) => {
  const DeleteFlightWithId = deleteFlight.bind(null, id);
  return (
    <form action={DeleteFlightWithId}>
      <SubmitButton />
    </form>
  );
};

export default DeleteFlight;
