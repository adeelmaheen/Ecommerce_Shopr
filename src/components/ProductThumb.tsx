import Link from "next/link";
import { Product } from "../../sanity.types"
import Image from "next/image";
import { imageUrl } from "@/lib/imageUrl";


const ProductThumb = ({product}:{product:Product}) => {
    const isOutOfStock = product.stock != null && product.stock <= 0;
  return (
    <div>
    
   <Link 
    href={`/product/${product?._id}`}
    className={`group flex flex-col bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden ${isOutOfStock ? "opacity-50" : ""}`}
   >
    
   <div className="relative aspect-square w-full h-full overflow-hidden">
    {product.image && (
        <Image src={imageUrl(product.image).url()} alt={product.name || "Product image"} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-contain transition-transform duration-300 group-hover:scale-105" />
    )
    
    }
    {isOutOfStock && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <span className="text-white font-bold text-lg">Out of Stock</span>
        </div>
    )}
   </div>
   <div className="p-4">
    <h2 className="text-lg font-semibold text-gray-800 truncate">
        {product.name}
    </h2>
    <p className="mt-2 text-sm text-gray-600 line-clamp-2">
        {product.description
        ?.map((block) => 
        block._type === "block"
        ? block.children?.map((child) => child.text).join("")
    : "" 
    )
    .join(" ") || "No description available"
    }
    </p>
    <p className="mt-2 text-lg font-bold text-gray-900">
        ${product.price?.toFixed(2)}
    </p>
    {/* Add Rating Section */}
 <div className="mt-2 flex items-center">
    <div className="flex items-center">
        {[...Array(5)].map((_, index) => (
            <svg
                key={index}
                className={`w-4 h-4 ${
                    index < (product?.rating || 0)
                        ? 'text-yellow-400'
                        : 'text-gray-400'
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
            >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
        ))}
    </div>
    <span className="ml-2 text-sm text-gray-600">
        {product.rating ? `${product.rating} out of 5` : 'No ratings yet'}
    </span>
</div> 
   </div>
   </Link>
   </div>
  )
}

export default ProductThumb;
