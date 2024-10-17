import React, { useEffect, useState } from 'react'

const LoadMore = () => {

    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])
    const [count, setCount] = useState(0)

   async function fetchProducts()
   {
    try{
            setLoading(true)
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${
                count === 0 ? 0 : count * 20}`)
            const data = await response.json();
            console.log(data)
            setProducts(data)
            setLoading(false)
    }catch(e){
        setError(e)
        setLoading(false)
    }
   }

   useEffect(()=>{
    fetchProducts()
   }, [])

   if(loading)
   {
    return <div>Loading data ! Please wait.</div>;
   }
  return (
    <div>LoadMore</div>
  )
}

export default LoadMore