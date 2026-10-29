 "use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import { Check, Heart, Minus, Plus, ShieldCheck, Truck } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";
import { useStore } from "@/components/StoreProvider";

export default function ProductPage(){
  const {slug} = useParams();
  const product = products.find(p=>p.slug===slug) || products[0];
  const [qty,setQty] = useState(1);
  const [wish,setWish] = useState(false);
  const {addToCart} = useStore();
  const related = products.filter(p=>p.category===product.category && p.id!==product.id).slice(0,4);
  return <>
    <div className="container breadcrumbs"><Link href="/">خانه</Link><span>/</span><Link href="/shop">فروشگاه</Link><span>/</span><span>{product.name}</span></div>
    <section className="container product-detail">
      <div className="product-detail__image-wrap"><span className="product-badge">انتخاب نقره‌یار</span><img className="product-detail__image" src={product.image} alt={product.name}/></div>
      <div className="product-detail__info"><span className="eyebrow">{product.categoryName}</span><h1>{product.name}</h1><div className="product-rating"><span>★★★★★</span><small>({product.reviews} دیدگاه نمایشی)</small></div><p className="product-detail__desc">{product.description}؛ انتخابی ظریف برای استفاده روزمره و هدیه‌ای به‌یادماندنی.</p><div className="detail-price">{product.price.toLocaleString("fa-IR")} <small>تومان</small></div><div className="detail-divider"/>
        <div className="quantity-row"><span>تعداد</span><div className="quantity-control"><button onClick={()=>setQty(Math.max(1,qty-1))} aria-label="کم کردن"><Minus size={15}/></button><b>{qty.toLocaleString("fa-IR")}</b><button onClick={()=>setQty(qty+1)} aria-label="زیاد کردن"><Plus size={15}/></button></div></div>
        <div className="product-actions"><button className="btn btn--dark add-cart" onClick={()=>addToCart(product,qty)}>افزودن به سبد خرید</button><button className={`wishlist-btn ${wish?"is-active":""}`} onClick={()=>setWish(!wish)} aria-label="علاقه‌مندی"><Heart fill={wish?"currentColor":"none"}/></button></div>
        <div className="detail-perks"><div><ShieldCheck/><span><b>انتخاب با اطمینان</b><small>مشخصات محصول را پیش از خرید بررسی کنید.</small></span></div><div><Truck/><span><b>ارسال مطمئن</b><small>بسته‌بندی مناسب برای حفظ محصول</small></span></div><div><Check/><span><b>پشتیبانی خرید</b><small>برای راهنمایی با ما در تماس باشید.</small></span></div></div>
        <div className="product-disclaimer">این نسخه، نمونه نمایشی رابط فروشگاه است؛ قیمت‌ها و مشخصات نمونه‌اند و سفارش واقعی ثبت نمی‌شود.</div>
      </div>
    </section>
    <section className="section section--soft"><div className="container"><div className="section-heading"><div><span className="eyebrow">شاید این‌ها را هم دوست داشته باشید</span><h2>محصولات مشابه</h2></div><Link className="text-link" href="/shop">همه محصولات</Link></div><div className="product-grid">{(related.length?related:products.slice(0,4)).map(p=><ProductCard key={p.id} product={p}/>)}</div></div></section>
  </>;
}