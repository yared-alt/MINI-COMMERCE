import React from 'react'

function feekback({ maxw }:{maxw:string}) {
  return (
    <div className="customer bg-zinc-600 text-white py-28">
      <div className={`${maxw}`}>
        <div className=" max-w-[500px] border-2 mx-auto">
          <div className="text-center pt-4 pb-10">
            <p>❤️❤️❤️❤️❤️</p>
          </div>
          <div className="text-center font-robotoSlab">
            <p className="text-xl tracking-wider italic">" Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto vel saepe, esse magnam voluptate maxime. Libero obcaecati hic eum incidunt corrupti nobis blanditiis animi ipsam commodi atque? Quo cum iure harum, ipsum aliquam id nobis assumenda numquam ut nihil, fuga voluptatem fugiat sunt sapiente mollitia veniam iusto! Iure dignissimos quis placeat repellendus mollitia id saepe voluptatem accusantro vitae vel veniam obcaecati, delectus culpa incidunt provident debitis corrupti nisi! "</p>
          </div>
          <div className="capitalize font-mono underline py-4 ml-3">
            <p>mickle JJ.organ</p>
          </div>
          <p className="name"></p>
        </div>
      </div>

    </div>
  )
}

export default feekback
