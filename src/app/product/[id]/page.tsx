import Procuctdetail from "$/components/productdetailcommponents/procuctdetail";
import {getSingleProduct} from "$/methods/getpopularProducts"

export default async function Page({
  params,
}: {
  params: { id : string};
}) {
const id= params.id;
  const pro=await getSingleProduct(id);
  return (
    <Procuctdetail info={pro}/>
  )
}

