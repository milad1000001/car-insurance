export function Inquiry() {
  return (
    <main className="min-h-screen bg-slate-50 py-10 px-4">
      <div className="mx-auto w-full max-w-2xl space-y-6">
        <header className="space-y-2">
          <h1 className="text-2xl font-semibold text-slate-900">
            استعلام بیمه خودرو
          </h1>
          <p className="text-sm text-slate-600">
            شماره پلاک را وارد کنید تا اطلاعات خودرو و مالک نمایش داده شود.
          </p>
        </header>

        <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <form className="space-y-4">
            <div className="space-y-2">
              <label
                htmlFor="plate"
                className="text-sm font-medium text-slate-700"
              >
                شماره پلاک
              </label>
              <input
                id="plate"
                name="plate"
                type="text"
                placeholder="۱۲الف۳۴۵-۶۷"
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none ring-slate-400 focus:ring-2"
              />
              <p className="text-xs text-slate-500">
                ارقام فارسی و انگلیسی پشتیبانی می‌شود.
              </p>
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
            >
              دریافت قیمت بیمه
            </button>
          </form>
        </section>

        <section className="rounded-xl border border-dashed border-slate-300 bg-white p-4">
          <h2 className="text-sm font-semibold text-slate-800">
            نتیجه (نمونه)
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            پس از ثبت شماره پلاک، اطلاعات خودرو و قیمت بیمه در این بخش نمایش
            داده می‌شود.
          </p>
        </section>
      </div>
    </main>
  );
}
