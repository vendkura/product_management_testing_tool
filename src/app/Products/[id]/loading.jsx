// src/app/products/[id]/loading.jsx
export default function Loading() {
    return (
      <div className="container px-4 py-6 mx-auto animate-pulse">
        {/* Back Button Skeleton */}
        <div className="w-32 h-6 mb-6 bg-gray-200 rounded" />
  
        <div className="grid gap-8 md:grid-cols-2">
          {/* Image Skeleton */}
          <div className="bg-gray-200 rounded-lg aspect-square" />
  
          {/* Content Skeleton */}
          <div className="space-y-4">
            <div className="w-3/4 h-8 bg-gray-200 rounded" />
            <div className="w-1/4 h-6 bg-gray-200 rounded" />
            <div className="w-1/2 h-6 bg-gray-200 rounded" />
            <div className="w-full h-24 bg-blue-200 rounded" />
          </div>
        </div>
      </div>
    )
  }