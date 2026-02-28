import Link from "next/link";

const modules = [
  {
    id: 1,
    code: "MATH101",
    name: "الرياضيات العامة",
    credits: 4,
    semester: 1,
    level: "L1",
  },
  {
    id: 2,
    code: "PROG101",
    name: "البرمجة بلغة Python",
    credits: 4,
    semester: 1,
    level: "L1",
  },
  {
    id: 3,
    code: "PHYS101",
    name: "الفيزياء العامة",
    credits: 3,
    semester: 1,
    level: "L1",
  },
  {
    id: 4,
    code: "ENG101",
    name: "اللغة الإنجليزية",
    credits: 2,
    semester: 1,
    level: "L1",
  },
];

export default function ModulesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-800">المواد الدراسية</h1>
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
          <p className="text-gray-600">قائمة بجميع المواد الدراسية</p>
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg">
            + إضافة مادة
          </button>
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full">
            <thead className="bg-gray-100 border-b">
              <tr>
                <th className="px-6 py-3 text-right text-sm font-semibold text-gray-700">
                  الكود
                </th>
                <th className="px-6 py-3 text-right text-sm font-semibold text-gray-700">
                  اسم المادة
                </th>
                <th className="px-6 py-3 text-right text-sm font-semibold text-gray-700">
                  الرصيد
                </th>
                <th className="px-6 py-3 text-right text-sm font-semibold text-gray-700">
                  الفصل
                </th>
                <th className="px-6 py-3 text-right text-sm font-semibold text-gray-700">
                  المستوى
                </th>
                <th className="px-6 py-3 text-right text-sm font-semibold text-gray-700">
                  الإجراءات
                </th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {modules.map((module) => (
                <tr key={module.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-800 font-mono">
                    {module.code}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800">
                    {module.name}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800">
                    {module.credits}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800">
                    {module.semester}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800">
                    {module.level}
                  </td>
                  <td className="px-6 py-4 text-sm space-x-2">
                    <button className="text-blue-600 hover:text-blue-700">
                      تعديل
                    </button>
                    <button className="text-red-600 hover:text-red-700">
                      حذف
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
