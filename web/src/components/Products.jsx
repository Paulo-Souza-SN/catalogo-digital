import { useNavigate } from 'react-router-dom'
import DadosCard from './DadosCard';

function Products({products}){
   const apiUrl = import.meta.env.VITE_API_URL;
   const navigate = useNavigate();

   function seeDetails(product){
      const query = new URLSearchParams();
      query.set('name', product.name);
      query.set("price", product.price);
      query.set("details", product.details);
      query.set("image", product.image);
      query.set("link", product.link);
      navigate(`/productDetails?${query.toString()}`)
   }

   return(
      <section className="p-8 max-w-7xl mx-auto">

            <ul 
               data-aos="fade-up" 
               className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
               {products?.map(product => (
                   
                  <li 
                  key={product.id} 
                  className="bg-white border border-emerald-700 rounded-xl
                  flex flex-col justify-between transition-all duration-300 ease-out shadow-lg shadow-gray-400 hover:shadow-gray-500 hover:-translate-y-1.5 hover:border-emerald-800">

                     <img loading="lazy" src={apiUrl + product.image} alt={product.name} className='h-full rounded-t-xl'/>

                     <DadosCard seeDetails={seeDetails} product={product}/>
                  </li>
               ))}
            </ul>

      </section>
   )
}
export default Products;