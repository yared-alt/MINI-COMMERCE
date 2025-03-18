import product from "$/data/product.json";
import Products from "$/components/homecommponents/products";
import Hero from "$/components/homecommponents/hero";
import Showcase from "$/components/homecommponents/showcase";
import Recommendetion from "$/components/homecommponents/recommendetion";
import Shocase2 from "$/components/homecommponents/shocase2";
import Newproducts from "$/components/homecommponents/newproducts";
import Feekback from "$/components/homecommponents/feekback";
import Service from "$/components/homecommponents/service";
async function getproduct() {
    return product;
}
export default async function page() {
    const products = await getproduct();
    const max = "max-w-[1280px] mx-auto";
    return (<div className="">
      <Hero maxw={max}/>
      <div className="popular bg-gray-200 text-black pb-20">
        <div className="pt-7">
          <div className="capitalize tracking-tighter py-6 text-center text-4xl italic font-robotoSlab font-extrabold">
            <p>most popular</p>
          </div>
          {/* ..............................products............................. */}
          <Products maxw={max} products={products}/>
        </div>
      </div>

      <Showcase maxw={max}/>

      <Recommendetion maxw={max}/>

      <Shocase2 maxw={max}/>

      <Newproducts maxw={max}/>

      <Feekback maxw={max}/>

      <Service maxw={max}/>
    </div>);
}
