import Link from "next/link";

const grades = [
  {
    id: 1,
    student: "أحمد محمد",
    module: "الرياضيات العامة",
    cc: 18,
    exam: 16,
    score: 17,
    status: "نجح",
  },
  {
    id: 2,
    student: "فاطمة علي",
    module: "البرمجة بلغة Python",
    cc: 19,
    exam: 18,
    score: 18.5,
    status: "نجح",
  },
  {
    id: 3,
    student: "محمود يوسف",
    module: "الفيزياء العامة",
    cc: 14,
    exam: 12,
    score: 13,
    status: "نجح",
  },
];

export default function GradesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-800">إدارة الدرجات</h1>
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
        <div className="mb-6 flex justify-between items-center">
          <p className="text-gray-600">قائمة درجات الطلاب</p>
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg">
            + إضافة درجة
          </button>
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full">
            <thead className="bg-gray-100 border-b">
              <tr>
                <th className="px-6 py-3 text-right text-sm font-semibold text-gray-700">
                  الطالب
                </th>
                <th className="px-6 py-3 text-right text-sm font-semibold text-gray-700">
                  المادة
                </th>
                <th className="px-6 py-3 text-right text-sm font-semibold text-gray-700">
                  الأعمال (CC)
                </th>
                <th className="px-6 py-3 text-right text-sm font-semibold text-gray-700">
                  الامتحان
                </th>
                <th className="px-6 py-3 text-right text-sm font-semibold text-gray-700">
                  النقطة النهائية
                </th>
                <th className="px-6 py-3 text-right text-sm font-semibold text-gray-700">
                  الحالة
                </th>
                <th className="px-6 py-3 text-right text-sm font-semibold text-gray-700">
                  الإجراءات
                </th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {grades.map((grade) => (
                <tr key={grade.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-800">
                    {grade.student}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800">
                    {grade.module}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800 font-semibold">
                    {grade.cc}/20
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800 font-semibold">
                    {grade.exam}/20
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800 font-semibold text-green-600">
                    {grade.score}/20
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">
                      {grade.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm space-x-2">
                    <button className="text-blue-600 hover:text-blue-700">
                      تعديل
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
