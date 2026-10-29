import Link from "next/link";
import { ArrowLeft, ShieldCheck, Truck, Gem, Sparkles, ChevronLeft } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/lib/products";

export default function HomePage() {
  const featured = products.slice(0, 4);
  const newItems = products.slice(4, 8);
  return (
    <>
      <section className="hero">
        <div className="hero__image" />
        <div className="hero__veil" />
        <div className="container hero__content">
          <span className="eyebrow"><Sparkles size={15}/> مجموعه منتخب زیورآلات نقره</span>
          <h1>زیباییِ ظریف،<br/><em>درخششِ ماندگار</em></h1>
          <p>برای لحظه‌هایی که می‌خواهید خاص باشید؛ انتخابی از نقره‌های خوش‌ساخت، مینیمال و همیشه به‌یادماندنی.</p>
          <div className="hero__actions">
            <Link className="btn btn--light" href="/shop">مشاهده محصولات <ArrowLeft size={17}/></Link>
            <Link className="text-link text-link--light" href="/shop?sort=newest">تازه‌های نقره‌یار <ChevronLeft size={16}/></Link>
          </div>
          <div className="hero__note"><span className="hero__note-line"/> انتخاب‌شده با دقت، برای شما</div>
        </div>
        <div className="hero__index"><span>01</span><i/> 04</div>
      </section>

      <section className="trust-strip">
        <div className="container trust-grid">
          <div className="trust-item"><span className="trust-icon"><Gem/></span><div><b>طراحی چشم‌نواز</b><small>جزئیات ظریف و ماندگار</small></div></div>
          <div className="trust-item"><span className="trust-icon"><ShieldCheck/></span><div><b>خرید با اطمینان</b><small>توضیحات شفاف محصول</small></div></div>
          <div className="trust-item"><span className="trust-icon"><Truck/></span><div><b>ارسال مطمئن</b><small>بسته‌بندی مناسب هدیه</small></div></div>
          <div className="trust-item"><span className="trust-icon"><Sparkles/></span><div><b>برای هر سلیقه</b><small>از مینیمال تا چشمگیر</small></div></div>
        </div>
      </section>

      <section className="section container">
        <div className="section-heading">
          <div><span className="eyebrow">انتخاب شما، امضای شما</span><h2>دسته‌بندی محصولات</h2><p>جزئیاتی کوچک که استایل شما را کامل می‌کنند.</p></div>
          <Link className="text-link" href="/shop">همه محصولات <ArrowLeft size={16}/></Link>
        </div>
        <div className="category-grid">
          {categories.map((cat, i) => (
            <Link className={`category-card category-card--${i+1}`} href={`/shop?category=${encodeURIComponent(cat.slug)}`} key={cat.slug}>
              <div className="category-card__photo" style={{backgroundImage:`url("${cat.image}")`}} />
              <div className="category-card__overlay"/>
              <div className="category-card__text"><span>مجموعه نقره‌یار</span><h3>{cat.name}</h3><b>مشاهده مجموعه <ArrowLeft size={15}/></b></div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <div className="section-heading">
            <div><span className="eyebrow">منتخب نقره‌یار</span><h2>محبوب‌های این روزها</h2><p>انتخاب‌هایی برای هدیه دادن یا دوست داشتن خودتان.</p></div>
            <Link className="text-link" href="/shop?sort=popular">مشاهده همه <ArrowLeft size={16}/></Link>
          </div>
          <div className="product-grid">{featured.map(p => <ProductCard key={p.id} product={p}/>)}</div>
        </div>
      </section>

      <section className="editorial container">
        <div className="editorial__visual"><div className="editorial__photo"/></div>
        <div className="editorial__copy"><span className="eyebrow">A LITTLE MORE YOU</span><h2>زیبایی، در سادگی‌ست.</h2><p>بعضی اکسسوری‌ها فقط یک انتخاب نیستند؛ بخشی از داستان شخصی شما هستند. با نقره‌هایی که هر روز، به سبک خودتان می‌درخشند.</p><Link className="btn btn--dark" href="/shop">استایل خودت را پیدا کن <ArrowLeft size={17}/></Link></div>
      </section>

      <section className="section container">
        <div className="section-heading"><div><span className="eyebrow">تازه رسیده‌اند</span><h2>جدیدترین محصولات</h2></div><Link className="text-link" href="/shop?sort=newest">همه تازه‌ها <ArrowLeft size={16}/></Link></div>
        <div className="product-grid">{newItems.map(p => <ProductCard key={p.id} product={p}/>)}</div>
      </section>

      <section className="newsletter">
        <div className="container newsletter__inner"><div><span className="eyebrow">نامه‌های نقره‌یار</span><h2>خبرهای خوب، اول برای شما</h2><p>برای اطلاع از مجموعه‌های تازه و پیشنهادهای ویژه، ایمیلتان را وارد کنید.</p></div><NewsletterForm/></div>
      </section>
    </>
  );
}

function NewsletterForm() {
  return <form className="newsletter-form" action="/contact"><input type="email" aria-label="ایمیل" placeholder="ایمیل شما" required/><button className="btn btn--dark" type="submit">عضویت <ArrowLeft size={16}/></button></form>;
}