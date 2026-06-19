import { ShoppingBag } from "lucide-react";
import Products from "./components/Products";
import { useState, useEffect } from "react";
import AOS from 'aos'
import "aos/dist/aos.css"


function App(){
   const [ products, setProducts ] = useState([]);
   const [ loading, setLoading ] = useState(true);

   const apiUrl = import.meta.env.VITE_API_URL;

   useEffect(() => {
       console.log("Minha URL da API é:", apiUrl);
       fetch(`${apiUrl}/produtos`)
       .then(response => response.json())
       .then((data) => {
         setProducts(data)
         setLoading(false)
      })
   }, [apiUrl])


     useEffect(() => {
       AOS.init({
             duration: 400, // Du ração da animação em milissegundos (800ms = 0.8 segundos)
             once: true,    // Define se a animação deve acontecer apenas uma vez (true) ou toda vez que subir/descer a página (false)
             easing: "ease-out-cubic", // Suavidade da animação
           });
     }, [])

   if(loading){
      return (
         <section className="flex items-center justify-center">
            <h1>Carregando produtos...</h1>
         </section>
      )
   }

   

  return(
    <main className="bg-emerald-50 min-h-screen">
      
      <header className="p-3 min-w-full mx-auto flex items-center justify-center bg-linear-to-r from-emerald-900 via-emerald-700 to-emerald-900 border-b border-emerald-700 gap-2">
         <ShoppingBag className="text-gray-200 size-7" />
        <h1 className='text-4xl font-normal tracking-tight text-gray-200 font-serif'>SB Cosmetics</h1>
      </header>

      <section className="flex items-center justify-center mt-10">
         <h1 className="text-3xl font-normal font-sans text-black">Top 5 mais vendidos</h1>
      </section>

      <Products products={products} />
    </main>
  )
}
export default App;
 