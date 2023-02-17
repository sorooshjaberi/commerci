import { getProductById } from "@/lib/store-api-utils";

const handler = async (req, res) => {
    console.log('savedddddddddd');
    const savedArray = (JSON.parse(req.body).saved)
    console.log(savedArray);
    const savedItemsData = await getProductById((savedArray))
    res.json({message:"hey" , savedItemsData })
};
export default handler;
