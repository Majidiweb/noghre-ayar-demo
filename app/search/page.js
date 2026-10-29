 "use client";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";
function SearchResults(){const params=useSearchParams();const q=params.get("q")||"";const result=products.filter(p=>(p.name+" "+p.description+" "+p.categoryName).includes(q.trim()));return <section className="container section"><div className="page-title"><span className="eyebrow">نتیجه جست‌وجو</span><h1>جست‌وجو برای «{q}»</h1><p>{result.length} محصول پیدا شد.</p></div>{result.length?<div className="product-grid">{result.map(p=><ProductCard key={p.id} product={p}/>)}</div>:<div className="empty-state"><h3>نتیجه‌ای پیدا نشد</h3><p>عبارت دیگری را امتحان کنید.</p><Link className="btn btn--dark" href="/shop">مشاهده فروشگاه</Link></div>}</section>}
export default function SearchPage(){return <Suspense fallback={<div className="container section">در حال جست‌وجو…</div>}><SearchResults/></Suspense>}