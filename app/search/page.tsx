export default function SearchPage() {
  const clinics = [
    { slug: "smile-clinic", name: "کلینیک لبخند", city: "تهران" },
    { slug: "dental-care", name: "مرکز دندانپزشکی کر", city: "تهران" },
  ];
  return (
    <main className="mx-auto max-w-2xl p-6">
      <h2 className="mb-4 text-2xl font-bold">جستجوی مطب</h2>
      <ul className="space-y-3">
        {clinics.map((c) => (
          <li key={c.slug}>
            <a
              href={`/c/${c.slug}`}
              className="block rounded-lg border p-4 hover:bg-sky-50"
            >
              <div className="font-medium">{c.name}</div>
              <div className="text-sm text-gray-500">{c.city}</div>
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}