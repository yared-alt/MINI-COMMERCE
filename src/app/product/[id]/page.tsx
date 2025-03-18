// import product from "$/data/product.json";
import Procuctdetail from "$/components/productdetailcommponents/procuctdetail";
import getproduct from "../../home/getproducts";

export default async function Page({
  params,
  searchParams
}: {
  params: { id : string};
  searchParams: {[key:string]:string | string[] | undefined};
}) {

  const color= searchParams?.color;
  // console.log(color)
  const id = params.id;
  console.log("oooooooooooo",id)
  const pro=await getproduct(id);
  console.log(pro)



  return (
    <Procuctdetail info={pro}/>
  )
}