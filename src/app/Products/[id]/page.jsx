import { getProductById } from "@/app/api/route"
import Image from "next/image"
import Link from "next/link"


async function ProductDetailPage({params}){
    const {id} = await params
    const product = await getProductById(id)

    return (
       <main className="container px-4 py-6 mx-auto">
            <Link href="/Dashboard/Home" className="inline-flex items-center mb-6 text-gray-600 hover:text-gray-800">
                Back to Products
            </Link>

            <div className="grid gap-8 md:grid-cols-2">
                {/* Image */}
                <div className="relative overflow-hidden rounded-lg aspect-square">
                    <img src={product.thumbnail} alt={product.title} className="object-cover w-full h-full" />
               
                </div>
                {/* Details */}

                <div>
          <div className="mb-4">
            <h1 className="mb-2 text-3xl font-bold">{product.title}</h1>
            <p className="text-sm text-gray-500">{product.category}</p>
          </div>

          <div className="space-y-4">
            <p className="text-2xl font-bold">${product.price}</p>
            
            <div className={`inline-flex px-3 py-1 rounded-full text-sm
              ${product.stock > 0 
                ? 'bg-green-100 text-green-800' 
                : 'bg-red-100 text-red-800'
              }`}
            >
              {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
            </div>

            <p className="text-gray-600">{product.description}</p>

            {/* Additional Details */}
            <div className="pt-4 mt-6 border-t">
              <h2 className="mb-2 font-semibold">Product Details</h2>
              <dl className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <dt className="text-gray-500">Brand</dt>
                  <dd>{product.brand}</dd>
                </div>
                <div>
                  <dt className="text-gray-500">Rating</dt>
                  <dd>{product.rating} / 5</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </main>
    )
}

export default ProductDetailPage