"use client"
import React from 'react'
import SearchBar from './SearchBar'
// import ViewToggle from './ViewToggle'
const Header = () => {
  
  // const handleSearch =(e)=>{
  //   let value = e.target.value // it is to access the content of the input field
  //   setSearchterm(value)
  // }
    return (
      <div className="flex flex-col gap-4 mb-6 md:flex-row md:justify-between md:items-center">
        <h1 className="text-2xl font-bold">Products Dashboard</h1>
        <div className="flex flex-col gap-4 sm:flex-row">
          <SearchBar  />
          {/* <ViewToggle /> */}
        </div>
      </div>
    )
  }
export default Header