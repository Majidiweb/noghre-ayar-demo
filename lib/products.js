export const categories = [
 {name:"انگشتر",slug:"rings",image:"https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&q=85"},
 {name:"گردنبند",slug:"necklaces",image:"https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=85"},
 {name:"گوشواره",slug:"earrings",image:"https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=900&q=85"},
 {name:"دستبند",slug:"bracelets",image:"https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=900&q=85"}
];
const imgs = [
 "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1000&q=88",
 "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=88",
 "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1000&q=88",
 "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=1000&q=88",
 "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1000&q=88",
 "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1000&q=88",
 "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1000&q=88",
 "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=1000&q=88"
];
const names = ["انگشتر نقره مینیمال","گردنبند نقره ماه","گوشواره حلقه‌ای ظریف","دستبند نقره کلاسیک","انگشتر نگین‌دار آوین","گردنبند زنجیری الی","گوشواره مرواریدی آوا","دستبند نقره موج"];
const descs = ["طراحی مینیمال با خطوط نرم و پرداخت براق","گردنبندی ظریف با آویز الهام‌گرفته از ماه","گوشواره‌ای سبک برای استایل روزمره و رسمی","دستبندی کلاسیک با جلوه‌ای ساده و ماندگار","ترکیب ظرافت و درخشش برای لحظه‌های خاص","زنجیری لطیف که به‌تنهایی یا در لایه‌سازی زیباست","ترکیبی لطیف و زنانه برای استایل‌های روشن","فرمی مدرن و روان برای دوست‌داران طراحی متفاوت"];
const cats = ["rings","necklaces","earrings","bracelets","rings","necklaces","earrings","bracelets"];
const catNames = ["انگشتر","گردنبند","گوشواره","دستبند","انگشتر","گردنبند","گوشواره","دستبند"];
export const products = names.map((name,i)=>({id:i+1,slug:["minimal-silver-ring","moon-silver-necklace","hoop-earrings","classic-silver-bracelet","avin-stone-ring","eli-chain-necklace","ava-pearl-earrings","wave-silver-bracelet"][i],name,description:descs[i],price:[1850000,2450000,1690000,2150000,2890000,1980000,2250000,2390000][i],image:imgs[i],category:cats[i],categoryName:catNames[i],badge:i===0?"پیشنهاد نقره‌یار":i===4?"جدید":"",popular:8-i,reviews:12+i*3}));
