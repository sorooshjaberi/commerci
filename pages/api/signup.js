const handler = async (req, res) => {
  if (!req.method === "POST") {
    res.status(401).json({ message: "only use this api to post " });
    return;
}
console.log(req.body);
res.status(201).json({ message: "Account has been created! " , body:JSON.parse(req.body) });

};
export default handler;
