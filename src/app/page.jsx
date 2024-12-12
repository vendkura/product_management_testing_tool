// page.jsx
import Header from '@/app/Components/Header'
import ProductGrid from '@/app/Components/ProductGrid'
import Filters from '@/app/Components/Filter'
import { getProducts, getCategories } from '@/app/api/route'
import { ProductProvider } from '@/app/Context/ProductContext'

async function DashboardPage () {
    const products = await getProducts()
    const categories = await getCategories()
  return (
    <ProductProvider>
    <main className="p-6">
      <Header />
      <div className="flex gap-6 row container-fluid">
        <aside className="hidden w-64 md:block">
          <Filters categories={categories} />
        </aside>
        <div className="flex-1">
        <ProductGrid initialProducts={products} />
        </div>
      </div>
    </main>
    </ProductProvider>
  )
}

export default DashboardPage