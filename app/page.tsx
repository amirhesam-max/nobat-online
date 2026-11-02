"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    const onScroll = () => setScroll(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const services = [
    { title: "نوبت‌دهی مطب", desc: "دریافت نوبت حضوری مطب", emoji: "🏥" },
    { title: "مشاوره آنلاین", desc: "تلفنی، ویدیویی و متنی", emoji: "💻" },
    { title: "پذیرش آزمایشگاه", desc: "بدون معطلی در صف پذیرش", emoji: "🧪" },
    { title: "مراکز درمانی", desc: "بیمارستان، درمانگاه، تصویربرداری", emoji: "🏢" },
    { title: "دکترتو کلینیک", desc: "خدمات زیبایی و دندانپزشکی", emoji: "🦷" },
  ];
  const specialities = ["جرم‌گیری", "پر کردن", "ایمپلنت", "ارتودنسی", "عصب‌کشی", "لمینت", "بلیچینگ", "جرم‌گیری کودکان"];
  const cities = ["تهران", "مشهد", "اصفهان", "شیراز", "تبریز", "کرج", "اهواز", "قم"];
  const clinics = [
    { name: "کلینیک لبخند", city: "تهران", rating: 4.8 },
    { name: "مرکز دندانپزشکی کر", city: "اصفهان", rating: 4.9 },
    { name: "کلینیک دندان سفید", city: "مشهد", rating: 4.7 },
  ];

  const rotate = Math.min(scroll / 10, 15);

  return (
    <div style={{ perspective: "1200px" }}>
      <main className="mx-auto max-w-6xl p-6 space-y-12">
        {/* 3D Hero */}
        <section
          className="neu p-8 text-center space-y-4"
          style={{
            transform: `rotateX(${rotate * 0.3}deg) rotateY(${rotate * 0.2}deg)`,
            transformStyle: "preserve-3d",
            transition: "transform 0.1s linear",
          }}
        >
          <h1 className="text-3xl font-bold">نوبت‌دهی اینترنتی و مشاوره آنلاین دندانپزشکان</h1>
          <p className="text-[var(--muted)]">پزشک، تخصص یا خدمت مورد نظر خود را جستجو کنید</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <input className="neu-inset px-4 py-3 w-full sm:w-48" placeholder="شهر خود را انتخاب کنید" />
            <input className="neu-inset px-4 py-3 w-full sm:w-72" placeholder="نام پزشک، تخصص، بیماری..." />
            <button className="neu-btn px-6 py-3 font-medium text-sky-600">جستجو</button>
          </div>
          <div className="flex justify-center gap-8 text-sm pt-2">
            <span><b>+60,000</b> پزشک</span>
            <span><b>+22,000,000</b> نوبت موفق</span>
            <span><b>+1,300</b> شهر</span>
          </div>
        </section>

        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="neu p-5 text-center space-y-2"
              style={{
                transform: `translateZ(${(scroll / 50) * (i % 2 === 0 ? 1 : -1)}px)`,
                transformStyle: "preserve-3d",
              }}
            >
              <div className="text-4xl">{s.emoji}</div>
              <h3 className="font-semibold">{s.title}</h3>
              <p className="text-xs text-[var(--muted)]">{s.desc}</p>
            </div>
          ))}
        </section>

        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">پربازدیدترین خدمات دندانپزشکی</h2>
            <a href="/search" className="text-sky-600 text-sm">مشاهده همه</a>
          </div>
          <div className="grid gap-3 grid-cols-2 sm:grid-cols-4">
            {specialities.map((s, i) => (
              <div
                key={s}
                className="neu p-4 text-center font-medium"
                style={{ transform: `rotateY(${(scroll / 200) * (i % 2 ? -1 : 1)}deg)` }}
              >
                {s}
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">شهرهای پوشش داده‌شده</h2>
            <a href="/search" className="text-sky-600 text-sm">مشاهده همه</a>
          </div>
          <div className="grid gap-3 grid-cols-2 sm:grid-cols-4">
            {cities.map((c) => (
              <a key={c} href={`/search?city=${c}`} className="neu p-4 text-center hover:text-sky-600">{c}</a>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">برترین مطب‌های دندانپزشکی</h2>
            <a href="/search" className="text-sky-600 text-sm">مشاهده همه</a>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {clinics.map((c) => (
              <div key={c.name} className="neu p-5 space-y-2">
                <div className="text-3xl">🦷</div>
                <h3 className="font-semibold">{c.name}</h3>
                <p className="text-sm text-[var(--muted)]">{c.city}</p>
                <div className="text-sm">⭐ {c.rating}</div>
                <a href="/search" className="neu-btn inline-block px-4 py-2 text-sm text-sky-600">نوبت بگیرید</a>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}