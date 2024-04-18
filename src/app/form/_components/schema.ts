import { z } from "zod";

const contactSchema = z.object({
  email: z.string().email("有効なメールアドレスを入力してください"),
});

export default contactSchema;
