import {useSearchParams, useNavigate} from "react-router-dom"
import { ArrowLeft, ShoppingBag } from "lucide-react";

function ProductDetails(){
   const apiUrl = import.meta.env.VITE_API_URL;
   const navigate = useNavigate();
   const [searchParams] = useSearchParams();
   const productName = searchParams.get("name");
   const productPrice = searchParams.get("price");
   const productDetails = searchParams.get("details");
   const productImage = searchParams.get("image");
   const linkProduto = searchParams.get("link")

   function backButton(){
      navigate(-1);
   }

   return(
      <main>
         <header className="p-3 min-w-full mx-auto flex items-center justify-center bg-linear-to-r from-emerald-900 via-emerald-700 to-emerald-900 border-b border-emerald-700 gap-2">
         <ShoppingBag className="text-gray-200 size-7" />
        <h1 className='text-4xl font-normal tracking-tight text-gray-200 font-serif'>SB Cosmetics</h1>
      </header>
      <section>

            <div>
               
            </div>
   
            <section className="min-h-dvh w-full bg-emerald-50 p-6">

               <section data-aos="fade-left" data-aos-duration="300" className="flex justify-start relative gap-4 mb-7 md:ml-8 lg:ml-8">
                     <button
                     className="transition-all duration-200 ease-out hover:cursor-pointer hover:text-emerald-700 hover:-translate-x-1"
                     onClick={() => backButton()}><ArrowLeft/></button>
                     <h1 className="text-2xl text-center">Conheça mais sobre</h1>
                  </section>

               <div 
               data-aos="zoom-in"
               data-aos-duration="350"
               className="max-w-200 mx-auto text-center space-y-8">
   
                  <section className="flex flex-col mx-auto gap-2 md:flex-row lg:flex-row bg-white border border-emerald-700 rounded-lg md:rounded-r-none md:rounded-l-lg lg:rounded-lg w-90 md:w-full shadow-lg shadow-gray-300">

                     <img src={apiUrl + productImage} alt="" className="max-h-100 max-w-full rounded-t-lg md:rounded-r-none md:rounded-l-lg"/>

                     <section className="p-2 flex flex-col md:flex-col-reverse lg:flex-col-reverse">
                        <div className="mb-auto">
                           <h1
                           data-aos="fade-up"
                           data-aos-duration="300"
                           className="flex justify-start text-2xl font-semibold mb-1">{productName}</h1>
                           
                           <p
                           data-aos="fade-up"
                           data-aos-duration="450"
                           className="text-start">{productDetails}</p>
                           
                           <p
                           data-aos="fade-up"
                           data-aos-duration="500"
                           className="mt-2 text-start text-xl font-semibold">
                              R$ {productPrice}
                           </p>
                        </div>

                           <a
                              href={linkProduto}
                              target="_blank"
                              className="text-center bg-linear-to-r from-emerald-700 via-emerald-500 to-emerald-700 w-full border border-emerald-600 text-white rounded-md p-1 transition-all ease-out duration-300 hover:from-emerald-800 hover:to-emerald-800 mt-3 md:mt-0 md:mb-2 lg:mt-0 lg:mb-3"
                              rel="noopener noreferrer"
                           >
                              Garanta já o seu!
                           </a>
                     </section>
                  </section>

               </div>
            </section>

      </section>

      </main>
   )
}
export default ProductDetails;