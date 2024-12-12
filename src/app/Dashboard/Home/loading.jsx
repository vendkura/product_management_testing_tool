export default function Loading() {
    return (
      <div className="p-6">
        <div className="animate-pulse">
          <div className="w-48 h-8 mb-6 bg-gray-200 rounded" />
          <div className="flex gap-6">
            <div className="hidden w-64 md:block">
              {/* Filter skeleton */}
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-3/4 h-4 bg-gray-200 rounded" />
                ))}
              </div>
            </div>
            <div className="flex-1">
              {/* Product grid skeleton */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="p-4 border rounded-lg">
                    <div className="h-40 mb-4 bg-gray-200 rounded" />
                    <div className="w-3/4 h-4 mb-2 bg-gray-200 rounded" />
                    <div className="w-1/2 h-4 bg-gray-200 rounded" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }