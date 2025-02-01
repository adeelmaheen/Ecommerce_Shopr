
import { getAllProducts } from "@/sanity/lib/products/getAllProducts";
import ProductsView from "@/components/ProductsView"; // Adjust the import path as necessary
import { getAllCategories } from "@/sanity/lib/products/getAllCategories"; // Adjust the import path as necessary
import BlackFridayBanner from "@/components/BlackFridayBanner";
import Carasoul from "@/components/Carasoul";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Categories from "@/components/Categories";



export const dynamic = "force-dynamic"
export const revalidate = 60;   // revalidate at every 60 seconds

interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
}

interface BlockContent {
  _type: 'block';
  children: Array<{
    _type: 'span';
    text: string;
  }>;
}

export interface Product {
  _id: string;
  name: string;
  price: number;
  description?: BlockContent[];
  images?: SanityImage[];
  slug?: {
    current: string;
  };
  rating?: number;
  stock?: number;
}

export default async function Home() {
  const products = (await getAllProducts()).map(product => ({
    ...product,
    // slug: product.slug|| { current: '' }, // Ensure slug property exists
    // rating: product.rating || 0 // Ensure rating property exists
  }));
  console.log(products)
  const categories = await getAllCategories();

  console.log(
    crypto.randomUUID().slice(0,5) + 
    `>>> Rerendered  the home page cache with ${products.length} products and ${categories.length} categories`
  );
 
  return (
  
   <div className="flex flex-col items-center justify-top min-h-screen bg-gray-100 p-4">
       
       <BlackFridayBanner/>
       <Hero/>
       <Services/>
       <Carasoul/>
       <ProductsView products={products} categories={categories} />
       <Categories/>
       
   </div>
   
   
  );
}
