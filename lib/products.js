
export const categories = [
  {
    name: "انگشتر",
    slug: "rings",
    image: "/images/categories/rings.jpg",
  },
  {
    name: "گردنبند",
    slug: "necklaces",
    image: "/images/categories/necklaces.jpg",
  },
  {
    name: "گوشواره",
    slug: "earrings",
    image: "/images/categories/earrings.jpg",
  },
  {
    name: "دستبند",
    slug: "bracelets",
    image: "/images/categories/bracelets.jpg",
  },
];

const imgs = [
  "/images/categories/rings.jpg",
  "/images/categories/necklaces.jpg",
  "/images/categories/earrings.jpg",
  "/images/categories/bracelets.jpg",
  "/images/categories/rings.jpg",
  "/images/categories/necklaces.jpg",
  "/images/categories/earrings.jpg",
  "/images/categories/bracelets.jpg",
];

const names = [
  "انگشتر نقره مینیمال",
  "گردنبند نقره ماه",
  "گوشواره حلقه‌ای ظریف",
  "دستبند نقره کلاسیک",
  "انگشتر نگین‌دار آوین",
  "گردنبند زنجیری الی",
  "گوشواره مرواریدی آوا",
  "دستبند نقره موج",
];

const descs = [
  "طراحی مینیمال با خطوط نرم و پرداخت براق",
  "گردنبندی ظریف با آویز الهام‌گرفته از ماه",
  "گوشواره‌ای سبک برای استایل روزمره و رسمی",
  "دستبندی کلاسیک با جلوه‌ای ساده و ماندگار",
  "ترکیب ظرافت و درخشش برای لحظه‌های خاص",
  "زنجیری لطیف که به‌تنهایی یا در لایه‌سازی زیباست",
  "ترکیبی لطیف و زنانه برای استایل‌های روشن",
  "فرمی مدرن و روان برای دوست‌داران طراحی متفاوت",
];

const cats = [
  "rings",
  "necklaces",
  "earrings",
  "bracelets",
  "rings",
  "necklaces",
  "earrings",
  "bracelets",
];

const catNames = [
  "انگشتر",
  "گردنبند",
  "گوشواره",
  "دستبند",
  "انگشتر",
  "گردنبند",
  "گوشواره",
  "دستبند",
];

const slugs = [
  "minimal-silver-ring",
  "moon-silver-necklace",
  "hoop-earrings",
  "classic-silver-bracelet",
  "avin-stone-ring",
  "eli-chain-necklace",
  "ava-pearl-earrings",
  "wave-silver-bracelet",
];

const prices = [
  1850000,
  2450000,
  1690000,
  2150000,
  2890000,
  1980000,
  2250000,
  2390000,
];

export const products = names.map((name, i) => ({
  id: i + 1,
  slug: slugs[i],
  name,
  description: descs[i],
  price: prices[i],
  image: imgs[i],
  category: cats[i],
  categoryName: catNames[i],
  badge: i === 0 ? "پیشنهاد نقره‌یار" : i === 4 ? "جدید" : "",
  popular: 8 - i,
  reviews: 12 + i * 3,
}));
