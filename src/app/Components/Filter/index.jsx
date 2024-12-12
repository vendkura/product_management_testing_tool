
const Filters = ({categories}) => {
  const [slug, name, url] = categories
    return (
      <div className="space-y-4">
        <div>
          <h3 className="mb-2 font-medium">Categories</h3>
          <ul>
            {categories.map((category)=>(
              <li key={category.slug}>
                {category.name}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-2 font-medium">Price Range</h3>
          {/* Price range slider will go here */}
        </div>
      </div>
    )
  }
export default Filters