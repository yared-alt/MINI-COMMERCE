import Hero from "$/components/homecommponents/hero"
import Service from "$/components/homecommponents/service"
import Showcase from "$/components/homecommponents/showcase"
import Shocase2 from "$/components/homecommponents/shocase2"
import Products from "$/components/homecommponents/products"
import Feekback from "$/components/homecommponents/feekback"
import Newproducts from "$/components/homecommponents/newproducts";
import Recommendetion from "$/components/homecommponents/recommendetion";

import {
  getPopularProducts,
  getNewProducts,
} from "$/methods/getpopularProducts"


export default async function page() {
  const popular = await getPopularProducts();
  const newProducts = ["dd", "ff"];

  const max = "max-w-[1580px] mx-auto  px-1  md:px-4 lg:px-5 xl:px-8 ";



  return (
    <div className="">
      <Hero maxw={max} />
      <div className="popular bg-gray-200 text-black pb-20">
        <div className="pt-7">
          <div className="capitalize tracking-tighter py-6 text-center text-4xl italic font-robotoSlab font-extrabold">
            <p>most popular</p>
          </div>
          <Products products={popular} maxw={max} />
        </div>
      </div>

      <Showcase maxw={max} />

      <Recommendetion maxw={max} />

      <Shocase2 maxw={max} />

      {/* ..............................new products............................. */}

      <Newproducts newProduct={newProducts} maxw={max} />

      <Feekback maxw={max} />

      <Service maxw={max} />
    </div>
  )

}
