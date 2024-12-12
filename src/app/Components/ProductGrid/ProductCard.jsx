"use client"

import { useRouter } from "next/navigation";

const ProductCard = ({product}) => {
    const {id,title, description, price,thumbnail, stock} = product;
    const router = useRouter()
    const handleClick = ()=>{
        router.push(`/Products/${id}`)
    }
    return (
        <div 
        onClick={handleClick}
        className="overflow-hidden transition-shadow border rounded-lg cursor-pointer hover:shadow-md"
      > 
      <div className="overflow-hidden border rounded-lg shadow-sm hover:shadow-md">
        <div className="bg-gray-100 aspect-w-16 aspect-h-9">
         <img src={thumbnail} alt={title} className="object-cover w-full h-full" />
        </div>
        <div className="p-4">
          <h3 className="font-semibold">{title}</h3>
          <p className="mt-1 text-sm text-gray-600">{description}</p>
          <div className="flex items-center justify-between mt-2">
            <span className="font-bold">${price}</span>
            <span className={`text-sm ${stock > 0 ? 'text-green' : 'text-red'} `}>
                {`${stock > 0 ? 'In Stock' : 'Out of stock' }`}    
            </span>
          </div>
        </div>
      </div>
      </div>
    )
  }
  export default ProductCard