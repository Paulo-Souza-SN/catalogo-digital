import { SearchIcon } from 'lucide-react';

function DadosCard({ product, seeDetails }) {
   return (
      <div className="p-2 h-42">
         <p
            data-aos="fade-up"
            data-aos-duration="350"
            className="tracking-wide font-bold text-lg"
         >
            {product.name}
         </p>

         <p>{product.lightDetails}</p>

         <p
            data-aos="fade-up"
            data-aos-duration="500"
            className="text-lg font-semibold font-sans mb-3"
         >
            R$ {product.price}
         </p>

         <button
            data-aos="fade-up"
            data-aos-duration="550"
            className="flex justify-center w-full gap-2 text-sm rounded-lg mt-2
            bg-linear-to-r from-emerald-700 via-emerald-500 to-emerald-700
            border-emerald-700 text-white tracking-tight py-1.5 cursor-pointer
            hover:bg-linear-r hover:from-emerald-800 hover:to-emerald-800
            transition-all ease-out duration-300"
            onClick={() => seeDetails(product)}
         >
            <p>Ver detalhes</p>
            <SearchIcon className="size-4.5" />
         </button>
      </div>
   );
}

export default DadosCard;