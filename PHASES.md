# فازبندی پروژه — سایت رزرو نوبت آنلاین دندانپزشکی

پروژه: D:\vibe-code | استک: Next.js (App Router) + TS + Tailwind + Prisma + Postgres + NextAuth + Zarinpal + پیامک

---

## فاز 0 — آماده‌سازی (Setup)
**هدف:** محیط توسعه و ساختار پروژه.
**کارها:**
- `npx create-next-app@latest` (TS, Tailwind, App Router, ESLint).
- نصب Prisma، NextAuth، zod، react-hook-form.
- تنظیم `.env` (DATABASE_URL, NEXTAUTH_SECRET, ZARINPAL_MERCHANT, SMS_API_KEY).
- ساختار پوشه‌ها: `app/`, `components/`, `lib/`, `prisma/`, `services/`.
- Git init + .gitignore.
**خروجی:** پروژه راه‌اندازی شده، lint/typecheck سبز.
**معیار:** `npm run dev` بدون خطا.

## فاز 1 — مدل داده (Data Model)
**هدف:** اسکیما کامل.
**کارها:**
- Prisma schema: User, Clinic, Dentist, Service, WorkingHours, Slot, Appointment, Payment, Subscription, Patient.
- Relations + indexes (clinic slug, slot uniqueness).
- Migration اولیه.
- Seed داده تستی (1 مطب، 2 دندانپزشک، 5 خدمت).
**خروجی:** `prisma migrate dev` موفق، seed اجرا.
**معیار:** Prisma Studio داده‌ها را نمایش می‌دهد.

## فاز 2 — احراز هویت (Auth)
**هدف:** ورود/ثبت‌نام.
**کارها:**
- NextAuth با Credentials + SMS OTP (بیمار).
- نقش‌ها: PATIENT, CLINIC_ADMIN, DENTIST, SUPER_ADMIN.
- Middleware محافظت مسیرهای `/admin`, `/account`.
- صفحات login/register با UI مینیمال.
**خروجی:** ورود/خروج کار می‌کند، session حاوی role.
**معیار:** دسترسی غیرمجاز redirect می‌شود.

## فاز 3 — API هسته (Core APIs)
**هدف:** endpointهای CRUD.
**کارها:**
- `/api/clinics` (GET list, GET by slug).
- `/api/services` (CRUD admin).
- `/api/slots` (generate from WorkingHours, GET available).
- `/api/appointments` (create, list, cancel).
- `/api/payments` (Zarinpal request + verify).
- Validation با zod.
**خروجی:** API تست‌شده با Postman/curl.
**معیار:** تمام endpointها 200/400 صحیح.

## فاز 4 — رزرو عمومی (Public Booking UI)
**هدف:** جریان 3 مرحله‌ای بیمار.
**کارها:**
- صفحه landing + جستجو.
- صفحه مطب `/c/[slug]` (خدمات، دندانپزشکان).
- انتخاب تاریخ (تقویم شمسی) + slot.
- صفحه پرداخت دیپازیت.
- تأیید نوبت + صفحه موفقیت.
- UI مینیمال، responsive، شمسی (jalali).
**خروجی:** بیمار می‌تواند end-to-end رزرو کند.
**معیار:** جریان کامل بدون خطا در sandbox Zarinpal.

## فاز 5 — پنل ادمین مطب (Admin Panel)
**هدف:** مدیریت مطب.
**کارها:**
- داشبورد (نوبت‌های امروز/هفته).
- مدیریت خدمات (CRUD).
- مدیریت ساعات کاری.
- لیست نوبت‌ها + لغو/جابجایی.
- گزارش ساده (تعداد نوبت، no-show).
**خروجی:** ادمین مطب کنترل کامل.
**معیار:** تمام عملیات CRUD کار می‌کند.

## فاز 6 — پیامک و یادآوری (SMS & Reminders)
**هدف:** اطلاع‌رسانی.
**کارها:**
- پیامک تأیید پس از پرداخت.
- پیامک یادآوری 24h قبل (cron job).
- پیامک لغو/تغییر نوبت.
- صف پیامک (retry on failure).
**خروجی:** پیامک‌ها ارسال می‌شوند.
**معیار:** تست با شماره واقعی.

## فاز 7 — پنل دندانپزشک و سوپر ادمین
**هدف:** نقش‌های اضافی.
**کارها:**
- صفحه برنامه روزانه دندانپزشک.
- سوپر ادمین: لیست مطب‌ها، مدیریت اشتراک، آمار کلی.
**خروجی:** هر نقش view مناسب خود را دارد.

## فاز 8 — سیستم پرداخت اشتراک (Subscription)
**هدف:** درآمد پلتفرم.
**کارها:**
- پلن‌های اشتراک (Free/Pro).
- محدودیت‌های پلن (تعداد دندانپزشک، پیامک).
- پرداخت اشتراک ماهانه.
- Grace period + suspend on expiry.
**خروجی:** مطب‌ها می‌توانند upgrade کنند.

## فاز 9 — تست و کیفیت (QA)
**هدف:** پایداری.
**کارها:**
- Unit tests (Vitest) برای utils/services.
- E2E (Playwright) جریان رزرو.
- تست همزمانی slot (concurrency).
- Lint + typecheck در CI (GitHub Actions).
**خروجی:** coverage ≥ 60٪، CI سبز.

## فاز 10 — Deploy و Launch
**هدف:** انتشار.
**کارها:**
- Deploy به Vercel.
- DB managed (Neon/Supabase).
- دامنه + SSL.
- Monitoring (Sentry) + analytics.
- مستندات README + env sample.
**خروجی:** سایت live.

---

## وابستگی‌ها
فاز 0 → 1 → 2 → 3 → 4 → 5 → 6 → 7 → 8 → 9 → 10 (خطی، هر فاز به قبلی وابسته).

## تخمین زمان
هر فاز 2-5 روز (solo dev). کل: ~6-8 هفته.

## معیارهای موفقیت MVP (پس از فاز 6)
- رزرو end-to-end + دیپازیت + پیامک.
- پنل ادمین پایه.
- کاهش no-show ≥ 40٪ (پس از pilot).