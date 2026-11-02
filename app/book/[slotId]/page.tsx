import Link from "next/link";

export default async function BookPage({ params }: { params: Promise<{ slotId: string }> }) {
  const { slotId } = await params;
  return (
    <main className="mx-auto max-w-md p-6 space-y-4 text-center">
      <h2 className="text-2xl font-bold">پرداخت دیپازیت</h2>
      <p className="text-gray-600">slot: {slotId}</p>
      <p className="text-sm text-gray-500">
        مبلغ دیپازیت: ۵۰٬۰۰۰ تومان (نمونه)
      </p>
      <button className="w-full rounded-lg bg-sky-500 px-6 py-3 text-white font-medium hover:bg-sky-600">
        پرداخت با زرین‌پال
      </button>
      <Link href="/" className="block text-sm text-gray-500">بازگشت</Link>
    </main>
  );
}