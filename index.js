import midjourney from "midjourney-client"

async function genImage(promte) {
    const ur = await midjourney(promte);
    //console.log(ur[0]);
    return ur[0];
}


export default genImage;

