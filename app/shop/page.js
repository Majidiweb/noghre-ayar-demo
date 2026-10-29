 "use client";
import { useMemo, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { SlidersHorizontal, Search, X } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/lib/products";

function ShopContent() {
  const params = useSearchParams();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(params.get("category") || "all");
  const [sort, setSort] = useState(params.get("sort") || "featured");
  const [maxPrice, setMaxPrice] = useState(20000000);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const shown = useMemo(() => {
    let list = products.filter(p => (category === "all" || p.category === category) && p.price <= maxPrice && (p.name + " " + p.description).includes(search.trim()));
    if (sort === "price-low") list = [...list].sort((a,b) => a.price-b.price);
    if (sort === "price-high") list = [...list].sort((a,b) => b.price-a.price);
    if (sort === "newest") list = [...list].sort((a,b) => b.id-a.id);
    if (sort === "popular") list = [...list].sort((a,b) => b.popular-a.popular);
    return list;
  }, [category, sort, maxPrice, search]);
  return <>
    <div className="page-banner"><div className="container"><span className="eyebrow">کشف مجموعه نقره‌یار</span><h1>فروشگاه نقره‌یار</h1><p>برای خودتان، برای عزیزانتان؛ انتخابی که می‌ماند.</p></div></div>
    <section className="container shop-layout">
      <aside className={`filters ${filtersOpen ? "filters--open" : ""}`}>
        <div className="filters__title"><b><SlidersHorizontal size={17}/> فیلتر محصولات</b><button className="icon-button mobile-only" onClick={()=>setFiltersOpen(false)} aria-label="بستن"><X/></button></div>
        <label className="field-label">جست‌وجوی محصول</label>
        <div className="search-field"><Search size={17}/><input value={search} onChange={e=>setSearch(e.target.value)} placeholder="نام محصول..."/></div>
        <div className="filter-group"><b>دسته‌بندی</b><button className={category==="all"?"filter-choice active": "filter-choice"} onClick={()=>setCategory("all")}>همه محصولات <span>{products.length}</span></button>{categories.map(c=><button key={c.slug} className={category===c.slug?"filter-choice active":"filter-choice"} onClick={()=>setCategory(c.slug)}>{c.name}<span>{products.filter(p=>p.category===c.slug).length}</span></button>)}</div>
        <div className="filter-group"><b>حداکثر قیمت</b><input className="price-range" type="range" min="500000" max="20000000" step="500000" value={maxPrice} onChange={e=>setMaxPrice(Number(e.target.value))}/><div className="price-range__labels"><span>۵۰۰ هزار</span><strong>{maxPrice.toLocaleString("fa-IR")} تومان</strong></div></div>
        <button className="reset-filters" onClick={()=>{setSearch("");setCategory("all");setMaxPrice(20000000);setSort("featured")}}>حذف فیلترها</button>
      </aside>
      <div className="shop-results">
        <div className="shop-toolbar"><div><button className="filter-toggle" onClick={()=>setFiltersOpen(true)}><SlidersHorizontal size={16}/> فیلترها</button><span className="result-count">{shown.length} محصول</span></div><label>مرتب‌سازی <select value={sort} onChange={e=>setSort(e.target.value)}><option value="featured">پیشنهاد نقره‌یار</option><option value="newest">جدیدترین</option><option value="popular">محبوب‌ترین</option><option value="price-low">ارزان‌ترین</option><option value="price-high">گران‌ترین</option></select></label></div>
        {shown.length ? <div className="product-grid product-grid--shop">{shown.map(p=><ProductCard key={p.id} product={p}/>)}</div> : <div className="empty-state"><Search size={28}/><h3>محصولی پیدا نشد</h3><p>فیلترها را تغییر دهید یا عبارت دیگری جست‌وجو کنید.</p><button className="btn btn--dark" onClick={()=>{setSearch("");setCategory("all");setMaxPrice(20000000)}}>نمایش همه محصولات</button></div>}
      </div>
    </section>
  </>;
}
export default function ShopPage(){return <Suspense fallback={<div className="container section">در حال آماده‌سازی فروشگاه…</div>}><ShopContent/></Suspense>}