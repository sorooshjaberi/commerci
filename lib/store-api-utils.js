
import fs from 'fs'
import path from 'path';
export async function getProductsByCategory(){
    // const responses = [];
    // for (let i = 1; i <= 5; i++) {
    //   const response = await fetch(
    //     `https://api.escuelajs.co/api/v1/categories/${i}/products`
    //   );
    //   responses.push(response);
    // }
    // const newResponses = responses.map((res) => {
    //   return res.json().then((res) => res);
    // });
    
    // const results = await Promise.all(newResponses);
    // return results
    const filePath = path.join(process.cwd(),'database.json')
    const fileData = fs.readFileSync(filePath)
    return JSON.parse(fileData)

}
