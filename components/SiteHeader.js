 "use client";
import Link from "next/link";
import { useState } from "react";
import { Search, ShoppingBag, Menu, X, UserRound, ChevronDown } from "lucide-react";
import { useStore } from "@/components/StoreProvider";
export default function SiteHeader(){
 const {cartCount}=useStore(); const [menuOpen,setMenuOpen]=useState(false);const [searchOpen,setSearchOpen]=useState(false);const [query,setQuery]=useState("");
 return <><div className="announcement"><span>ظرافتی برای هر روز</span><i/> مجموعه‌ای از انتخاب‌های خاص نقره‌یار <i/><span>هدیه‌ای که می‌ماند</span></div><header className="site-header"><div className="container header-inner">
  <button className="icon-button mobile-only" onClick={()=>setMenuOpen(!menuOpen)} aria-label="منو">{menuOpen?<X/>:<Menu/>}</button>
  <Link href="/" className="brand"><span className="brand__mark">ن</span><span className="brand__text"><b>نقره‌یار</b><small>NOGHREYAR</small></span></Link>
  <nav className={`main-nav ${menuOpen?"main-nav--open":""}`}><Link href="/">صفحه اصلی</Link><Link href="/shop">فروشگاه <ChevronDown size={13}/></Link><Link href="/about">داستان نقره‌یار</Link><Link href="/faq">سؤالات متداول</Link><Link href="/contact">تماس با ما</Link></nav>
  <div className="header-tools"><button className="icon-button" onClick={()=>setSearchOpen(!searchOpen)} aria-label="جست‌وجو"><Search/></button><Link className="icon-button account-icon" href="/contact" aria-label="حساب کاربری"><UserRound/></Link><Link className="cart-link" href="/cart" aria-label="سبد خرید"><ShoppingBag/><span>سبد خرید</span><b>{cartCount}</b></Link></div>
 </div>{searchOpen&&<div className="search-drawer"><form className="container search-drawer__form" action="/search"><Search/><input name="q" value={query} onChange={e=>setQuery(e.target.value)} placeholder="دنبال چه چیزی می‌گردید؟" autoFocus/><button className="btn btn--dark">جست‌وجو</button><button type="button" className="icon-button" onClick={()=>setSearchOpen(false)} aria-label="بستن"><X/></button></form></div>}</header></>
}