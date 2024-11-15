import React, { FC, useMemo } from "react";
import type { FlightColumn } from "./columns-flight";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { mappingSeats, rupiahFormat } from "@/lib/utils";

interface ColumnSeatPriceProps {
  flight: FlightColumn;
}

const ColumnSeatPrice: FC<ColumnSeatPriceProps> = ({ flight }) => {
  const {
    economy,
    business,
    first,
    totalSeatEconomy,
    totalSeatBusiness,
    totalSeatFirst,
  } = useMemo(() => mappingSeats(flight.seats), [flight]);
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1" className="w-full">
        <AccordionTrigger>Economy</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-2">
            <div className="font-medium">
              <span className="text-primary">Harga Tiket :</span>{" "}
              {rupiahFormat(flight.price)}
            </div>
            <div className="font-medium">
              <span className="text-primary">Sisa Kursi :</span> {economy}/
              {totalSeatEconomy}
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2" className="w-full">
        <AccordionTrigger>Bussiness</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-2">
            <div className="font-medium">
              <span className="text-primary">Harga Tiket :</span>{" "}
              {rupiahFormat(flight.price + 500000)}
            </div>
            <div className="font-medium">
              <span className="text-primary">Sisa Kursi :</span> {business}/
              {totalSeatBusiness}
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3" className="w-full">
        <AccordionTrigger>First</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-2">
            <div className="font-medium">
              <span className="text-primary">Harga Tiket :</span>{" "}
              {rupiahFormat(flight.price + 750000)}
            </div>
            <div className="font-medium">
              <span className="text-primary">Sisa Kursi :</span> {first}/
              {totalSeatFirst}
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
export default ColumnSeatPrice;
