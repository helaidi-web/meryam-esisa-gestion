import Link from "next/link";

const years = [
  { id: "L1", name: "السنة الأولى (L1)", level: "License", semester: "1-2" },
  { id: "L2", name: "السنة الثانية (L2)", level: "License", semester: "3-4" },
  { id: "L3", name: "السنة الثالثة (L3)", level: "License", semester: "5-6" },
  { id: "M1", name: "السنة الأولى ماستر (M1)", level: "Master", semester: "7-8" },
  { id: "M2", name: "السنة الثانية ماستر (M2)", level: "Master", semester: "9-10" },
];

export default function YearsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-800">السنوات الدراسية</h1>
            <Link
              href="/dashboard"
              className="text-blue-600 hover:text-blue-700 font-semibold"
            >
              ← العودة
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <p className="text-gray-600 mb-6">
          برنامج ESISA يتضمن 5 سنوات من الدراسة الأكاديمية
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {years.map((year) => (
            <div
              key={year.id}
              className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {year.name}
              </h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>
                  <span className="font-semibold">المستوى:</span> {year.level}
                </p>
                <p>
                  <span className="font-semibold">الفصول:</span> {year.semester}
                </p>
              </div>
              <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition">
                عرض التفاصيل
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
