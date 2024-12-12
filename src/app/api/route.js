export async function getProducts(){
    try{
        const getResponse = await fetch("https://dummyjson.com/products")
        const getProducts = await getResponse.json()
        const products = getProducts.products
        return products
    }catch(error){
        console.log("Error fetching products", error)
        throw new Error('Failed to fetch products')
    }
}

export async function getCategories(){
    try{
        const getResponse = await fetch("https://dummyjson.com/products/categories")
        const categories = await getResponse.json()
        return categories

    }catch(error){
        console.log("Error fetching categories", error)
        throw new Error('Failed to fetch categories')
    }
}

export async function getProductById(id){
    try{
        const getResponse = await fetch(`https://dummyjson.com/products/${id}`)
        const product = await getResponse.json()
        return product

    }catch(error){
        console.log("Error fetching product by id", error)
        throw new Error('Failed to fetch product by id')
    }
}