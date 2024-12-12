"use client"

import React from 'react'
import ProductCard from './ProductCard'
import { useState, useMemo } from 'react'
import { useProduct } from '@/app/Context/ProductContext'

const ProductGrid = ({initialProducts}) => {
  const [products] = useState(initialProducts)

  const {searchTerm} = useProduct('')

  const filteredProducts = useMemo(()=>{
    if (!searchTerm){
      return products
    }
      let searchLower = searchTerm.toLowerCase()
    return initialProducts.filter(product => product.title.toLowerCase().includes(searchLower) || product.description.toLowerCase().includes(searchLower) || product.category.toLowerCase().includes(searchLower))
  }, 
[initialProducts, searchTerm]
)
    return (
      <div>
        <p>
        Showing {filteredProducts.length} of {initialProducts.length} products
        </p>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        }
      </div>

      {filteredProducts.length===0 && (
        <p>No products found</p>
      )}
      </div>
    )
  }
export default ProductGrid