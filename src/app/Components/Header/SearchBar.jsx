"use client"
import { useProduct } from '@/app/Context/ProductContext'
import React from 'react'
import { useState } from 'react'

const SearchBar = ({onSearch}) => {

    const {searchTerm, setSearchTerm} = useProduct()

    const handleSearch =(e) =>{
      setSearchTerm(e.target.value) // it is to access the content of the input field
    }
    return (
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search products..."
          className="w-full px-4 py-2 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {/* Add search icon here */}
      </div>
    )
  }
export default SearchBar