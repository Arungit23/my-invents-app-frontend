import React,  { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useRidirectLoggedOutUser from '../../customHook/useRidirectLoggedOutUser';
import { selectIsLoggedIn } from "../../redux/features/auth/authSlice";
import { getProducts } from "../../redux/features/product/productSlice";
import ProductList from "../../components/product/productList/ProductList"
import ProductSummary from "../../components/product/productSummary/ProductSummary"

const Dashboard = () => {
 useRidirectLoggedOutUser('/login')
 const dispatch = useDispatch();
 const isLoggedIn = useSelector(selectIsLoggedIn)
 const {products, isLoading, isError, message} = useSelector((state)=>state.product)

 useEffect(()=>{
   if(isLoggedIn === true){ 
     dispatch(getProducts())
     // console.log(products)
   }
   if(isError){
     console.log(message)
   }

 },[isLoggedIn,isError,message,dispatch])
 return (
   <div>
     
      <ProductSummary product={products}/>
     <ProductList products={products} isLoading={isLoading}/> 
   </div>
 )
}

export default Dashboard
