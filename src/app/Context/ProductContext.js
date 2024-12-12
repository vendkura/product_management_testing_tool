"use client"

import { createContext, useContext, useState } from "react"

const ProductContext = createContext()
export function ProductProvider({children}){
    const [searchTerm, setSearchTerm] = useState('')
    const [viewMode, setViewMode] = useState('grid')

    const value = {
        searchTerm,
        setSearchTerm,
        viewMode,
        setViewMode
    }

    return (
        <ProductContext.Provider value={value}>
        {children}
        </ProductContext.Provider>
    )
}

export function useProduct (){
    const context = useContext(ProductContext)
    if(!context){
        throw new Error('useProduct must be used within a ProductProvider')
    }
    return context
}