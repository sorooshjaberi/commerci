import { getProductById } from "@/lib/store-api-utils";

const handler = async (req, res) => {
    const savedArray = (JSON.parse(req.body).saved)
    const savedItemsData = await getProductById((savedArray))
    res.json({message:"hey" , savedItemsData })
};
export default handler;
