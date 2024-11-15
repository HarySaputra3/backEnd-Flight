"use client";

import React, { type FC } from "react";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { useFormStatus } from "react-dom";
import { deleteAirplane } from "../lib/actions";

interface DeleteAirplaneProps {
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

const DeleteAirplane: FC<DeleteAirplaneProps> = ({ id }) => {
  const deleteAirplaneWithId = deleteAirplane.bind(null, id)
  return (
    <form action={deleteAirplaneWithId}>
      <SubmitButton />
    </form>
  );
};

export default DeleteAirplane;
