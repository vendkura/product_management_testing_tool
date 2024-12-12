Lorsque je cree un composant, je dois toujours l'exporter pour pouvoir l'utiliser ou je veux
et la maniere dont on importe les composants :
```jsx
import [Compoent] from '@/component/[component_path]'
```

# Data Fetching :
- aync/await : these are used to handle data delay when we are dealing with apis, mostly they aim to check if the data we are looking for is there and then if we get it we do what we want.
Example : 
```js
async function fetchData(){
    let getData = await fetch('api_url');
    if getData(){
        let data = await getData.json()
    }
}
```
So we async to say hey, the thing I want to fetch may get some time dealy, so be prepared for that and then with await we say, well we want this api, if it works wait we get the data we want then we put it in the format we want and that's it.

- Api fetching : when build the route to fetch an api we should always keep in my to build try and catch, and always return the data.

- To use hook state inside a file we need to mention "use client" at the top to prevent that this is a client side file and then we may use hooks.

- useMemo is used when we want to verify that data changed before processing like in this case, we only process the filtering when user inputs data into the searchbar input. 
- useState cannot be called inside an async function

- defining a context in nextjs is like defining a space that is shared between all the components inside that spaces. 
By using : 
- createContext : we create the context and then make react ready to share what we want inside.
Example : 
```js

const ProductContext = createContext()
```
- After that we should define what we are going to share in this space by defining the values and passing them in.
```js
export function ProductProvider({children}){
    // the useState are just to handle the changing values when user change it.
    const [searchTerm, setSearchTerm] = useState('') 
    const [viewMode, setViewMode] = useState('grid')

    const value = {
        searchTerm,
        setSearchTerm,
        viewMode,
        setViewMode
    }

    return (
        // We call the created context and give it the value we want to share. Always add th children attribute in the middle, it is that make it availabble for the the components inside it.
        <ProductContext.Provider value={value}>
        {children}
        </ProductContext.Provider>
    )
}
```