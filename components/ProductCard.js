 "use client";
import Link from "next/link";
import { Heart, ShoppingBag, ArrowUpLeft } from "lucide-react";
import { useState } from "react";
import { useStore } from "@/components/StoreProvider";
export default function ProductCard({product}){
 const [wish,setWish]=useState(false);const {addToCart}=useStore();
 return <article className="product-card"><div className="product-card__media"><Link href={`/product/${product.slug}`}><img src={product.image} alt={product.name} loading="lazy"/></Link>{product.badge&&<span className="product-badge">{product.badge}</span>}<button className={`product-wishlist ${wish?"is-active":""}`} onClick={()=>setWish(!wish)} aria-label="افزودن به علاقه‌مندی"><Heart size={17} fill={wish?"currentColor":"none"}/></button><button className="quick-add" onClick={()=>addToCart(product,1)}><ShoppingBag size={15}/> افزودن به سبد</button></div><div className="product-card__body"><span className="product-card__category">{product.categoryName}</span><Link href={`/product/${product.slug}`} className="product-card__name">{product.name}</Link><div className="product-card__bottom"><strong>{product.price.toLocaleString("fa-IR")} <small>تومان</small></strong><Link href={`/product/${product.slug}`} className="product-open" aria-label="مشاهده محصول"><ArrowUpLeft size={17}/></Link></div></div></article>
}