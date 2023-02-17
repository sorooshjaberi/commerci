import { getCartItemById } from "@/lib/store-api-utils";

const handler = async (req, res) => {
    // console.log("backkkkkkkk" ,JSON.parse(req.body).cart);

    const cartArray = (JSON.parse(req.body).cart)
    console.log(cartArray);
    const cartItemsData = await getCartItemById((cartArray))
    res.json({message:"hey",cartItemsData })
};
export default handler;
