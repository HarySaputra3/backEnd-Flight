import { z } from "zod";

const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/jpg"];
const MAX_FILE_SIZE = 2000000; // 2MB

export const airplaneFormSchema = z.object({
  name: z
    .string({ required_error: "Nama Pesawat Tidak Boleh Kosong!" })
    .min(4, { message: "Nama Pesawat Harus Memiliki 4 Karakter" }),
  code: z
    .string({ required_error: "Kode Pesawat Tidak Boleh Kosong!" })
    .regex(/^[A-Z]{3}-[0-9]{3}$/, { message: "Format Kode Harus [XXX-111]" }),
  image: z
    .instanceof(File, { message: "File tidak valid" })
    .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file.type), {
      message: "Image harus JPG, JPEG, atau PNG",
    })
    .refine((file) => file.size <= MAX_FILE_SIZE, {
      message: "Image harus ukuran maksimal 2MB",
    }),
});
