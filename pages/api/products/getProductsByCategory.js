import { getProductsByCategory } from "@/lib/store-api-utils";
export default async function handler(req, res) {
  const result = await getProductsByCategory();
  res.status(200).json((result));
}
