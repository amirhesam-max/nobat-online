export default async function ClinicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return (
    <main className="mx-auto max-w-2xl p-6 space-y-6">
      <h2 className="text-2xl font-bold">مطب: {slug}</h2>
      <section>
        <h3 className="mb-2 font-semibold">خدمات</h3>
        <ul className="space-y-2">
          <li className="rounded border p-3">جرم‌گیری — ۳۰ دقیقه</li>
          <li className="rounded border p-3">پر کردن — ۴۵ دقیقه</li>
          <li className="rounded border p-3">معاینه — ۱۵ دقیقه</li>
        </ul>
      </section>
      <section>
        <h3 className="mb-2 font-semibold">انتخاب نوبت</h3>
        <div className="grid grid-cols-3 gap-2">
          {["09:00", "09:30", "10:00", "10:30", "11:00"].map((t) => (
            <a
              key={t}
              href={`/book/${slug}-${t}`}
              className="rounded border p-2 text-center hover:bg-sky-50"
            >
              {t}
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}