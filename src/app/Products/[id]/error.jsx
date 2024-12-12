// src/app/products/[id]/error.jsx
'use client'

export default function Error({ error, reset }) {
  return (
    <div className="container px-4 py-6 mx-auto">
      <div className="text-center">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">
          Something went wrong!
        </h2>
        <p className="mb-4 text-gray-600">{error.message}</p>
        <button
          onClick={() => reset()}
          className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
        >
          Try again
        </button>
      </div>
    </div>
  )
}