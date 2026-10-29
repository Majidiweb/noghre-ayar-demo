 "use client";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
const StoreContext = createContext(null);
export function StoreProvider({children}){
 const [cart,setCart]=useState([]);
 const [hydrated,setHydrated]=useState(false);
 useEffect(()=>{try{setCart(JSON.parse(localStorage.getItem("noghreayar-cart")||"[]"))}catch{}setHydrated(true)},[]);
 useEffect(()=>{if(hydrated)localStorage.setItem("noghreayar-cart",JSON.stringify(cart))},[cart,hydrated]);
 const addToCart=(product,qty=1)=>setCart(old=>{const found=old.find(i=>i.id===product.id);return found?old.map(i=>i.id===product.id?{...i,qty:i.qty+qty}:i):[...old,{...product,qty}]});
 const updateQty=(id,qty)=>setCart(old=>qty<1?old.filter(i=>i.id!==id):old.map(i=>i.id===id?{...i,qty}:i));
 const removeFromCart=id=>setCart(old=>old.filter(i=>i.id!==id));
 const cartTotal=cart.reduce((sum,item)=>sum+item.price*item.qty,0);
 const value=useMemo(()=>({cart,addToCart,updateQty,removeFromCart,cartTotal,cartCount:cart.reduce((n,i)=>n+i.qty,0),hydrated}),[cart,cartTotal,hydrated]);
 return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}
export function useStore(){return useContext(StoreContext)}