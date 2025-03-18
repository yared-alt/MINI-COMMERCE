import product from "$/data/product.json";
import Procuctdetail from "$/components/productdetailcommponents/procuctdetail";
async function getsingleproduct(id) {
    const singlepro = product.find((each) => (each.id === id));
    return singlepro;
}
export default async function Page({ params, }) {
    const slug = (await params).slug;
    const pro = await getsingleproduct(Number(slug));
    return (<Procuctdetail info={pro}/>);
}
