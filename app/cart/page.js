 "use client";
import Link from "next/link";
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { useStore } from "@/components/StoreProvider";

export default function CartPage(){
 const {cart,updateQty,removeFromCart,cartTotal,hydrated}=useStore();
 if(!hydrated) return <div className="container section">در حال بارگذاری سبد خرید…</div>;
 return <section className="container cart-page section">
  <div className="page-title"><span className="eyebrow">انتخاب‌های شما</span><h1>سبد خرید</h1></div>
  {!cart.length ? <div className="empty-state cart-empty"><ShoppingBag size={38}/><h2>سبد خرید شما خالی است</h2><p>محصولی که دوست دارید را به سبد خرید اضافه کنید.</p><Link href="/shop" className="btn btn--dark">رفتن به فروشگاه</Link></div> :
  <div className="cart-layout"><div className="cart-items">{cart.map(item=><div className="cart-item" key={item.id}><Link href={`/product/${item.slug}`}><img src={item.image} alt={item.name}/></Link><div className="cart-item__details"><Link href={`/product/${item.slug}`}><b>{item.name}</b></Link><small>{item.price.toLocaleString("fa-IR")} تومان</small><div className="quantity-control"><button onClick={()=>updateQty(item.id,item.qty-1)} aria-label="کم کردن"><Minus size={14}/></button><b>{item.qty.toLocaleString("fa-IR")}</b><button onClick={()=>updateQty(item.id,item.qty+1)} aria-label="زیاد کردن"><Plus size={14}/></button></div></div><div className="cart-item__end"><b>{(item.price*item.qty).toLocaleString("fa-IR")} تومان</b><button className="remove-btn" onClick={()=>removeFromCart(item.id)}><Trash2 size={15}/> حذف</button></div></div>)}</div>
  <aside className="cart-summary"><h3>خلاصه سفارش</h3><div><span>جمع محصولات</span><b>{cartTotal.toLocaleString("fa-IR")} تومان</b></div><div><span>هزینه ارسال</span><span>در مرحله بعد</span></div><hr/><div className="cart-summary__total"><span>مبلغ قابل پرداخت</span><b>{cartTotal.toLocaleString("fa-IR")} تومان</b></div><button className="btn btn--dark btn--wide" onClick={()=>alert("این نسخه نمایشی است؛ برای ثبت سفارش واقعی باید بک‌اند و درگاه پرداخت متصل شود.")}>ادامه و تسویه‌حساب</button><p>پرداخت واقعی در این نسخه فعال نیست.</p></aside></div>}
 </section>
}