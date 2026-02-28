import Link from "next/link";

const attendance = [
  {
    id: 1,
    student: "أحمد محمد",
    module: "الرياضيات العامة",
    date: "2024-01-15",
    status: "حاضر",
  },
  {
    id: 2,
    student: "فاطمة علي",
    module: "البرمجة بلغة Python",
    date: "2024-01-15",
    status: "حاضر",
  },
  {
    id: 3,
    student: "محمود يوسف",
    module: "الفيزياء العامة",
    date: "2024-01-15",
    status: "غائب",
  },
  {
    id: 4,
    student: "نور سارة",
    module: "اللغة الإنجليزية",
    date: "2024-01-15",
    status: "معذور",
  },
];

export default function AttendancePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-800">الحضور والغياب</h1>
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
          <p className="text-gray-600">سجل الحضور اليومي</p>
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg">
            + تسجيل حضور
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
                  التاريخ
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
              {attendance.map((record) => (
                <tr key={record.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-800">
                    {record.student}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800">
                    {record.module}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800">
                    {record.date}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    {record.status === "حاضر" && (
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">
                        ✓ {record.status}
                      </span>
                    )}
                    {record.status === "غائب" && (
                      <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs font-semibold">
                        ✗ {record.status}
                      </span>
                    )}
                    {record.status === "معذور" && (
                      <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-semibold">
                        ⚠ {record.status}
                      </span>
                    )}
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
