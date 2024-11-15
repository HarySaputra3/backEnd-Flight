import { z } from "zod";

export const formFlightSchema = z.object({
  planeId: z.string({ required_error: "Pesawat tidak boleh kosong" }),
  price: z.string({ required_error: "Harga tidak boleh kosong" }),
  departureCity: z.string({
    required_error: "Kota keberangkatan tidak boleh kosong",
  }),
  departureDate: z.date(),
  departureCityCode: z
    .string({ required_error: "Kode kota keberangkatan tidak boleh kosong" })
    .min(3, {
      message: "Kode kota keberangkatan harus memiliki minimal 3 karakter",
    })
    .max(3, {
      message: "Kode kota keberangkatan harus memiliki maksimal 3 karakter",
    }),
  destinationCity: z.string({
    required_error: "Kota tujuan tidak boleh kosong",
  }),
  arrivalDate: z.date(),
  destinationCityCode: z
    .string({ required_error: "Kode kota tujuan tidak boleh kosong" })
    .min(3, {
      message: "Kode kota tujuan harus memiliki minimal 3 karakter",
    })
    .max(3, {
      message: "Kode kota tujuan harus memiliki maksimal 3 karakter",
    }),
});
