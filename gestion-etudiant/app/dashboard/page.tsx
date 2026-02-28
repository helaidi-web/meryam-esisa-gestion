import Link from "next/link";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800">لوحة المعلومات</h1>
          <nav className="flex gap-4">
            <Link href="/" className="text-blue-600 hover:text-blue-700">
              الرئيسية
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-gray-500 text-sm font-medium">إجمالي الطلاب</div>
            <div className="text-3xl font-bold text-gray-800 mt-2">0</div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-gray-500 text-sm font-medium">المواد الدراسية</div>
            <div className="text-3xl font-bold text-gray-800 mt-2">0</div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-gray-500 text-sm font-medium">معدل الحضور</div>
            <div className="text-3xl font-bold text-gray-800 mt-2">0%</div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-gray-500 text-sm font-medium">المتوسط العام</div>
            <div className="text-3xl font-bold text-gray-800 mt-2">0.00</div>
          </div>
        </div>

        {/* Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link
            href="/dashboard/years"
            className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg shadow-lg p-6 hover:shadow-xl transition transform hover:scale-105"
          >
            <div className="text-2xl mb-2">📚</div>
            <h3 className="text-xl font-bold">السنوات الدراسية</h3>
            <p className="text-sm mt-2 opacity-90">إدارة السنوات (L1-L3, M1-M2)</p>
          </Link>

          <Link
            href="/dashboard/modules"
            className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-lg shadow-lg p-6 hover:shadow-xl transition transform hover:scale-105"
          >
            <div className="text-2xl mb-2">📖</div>
            <h3 className="text-xl font-bold">المواد الدراسية</h3>
            <p className="text-sm mt-2 opacity-90">إضافة وإدارة المواد</p>
          </Link>

          <Link
            href="/dashboard/grades"
            className="bg-gradient-to-br from-yellow-500 to-yellow-600 text-white rounded-lg shadow-lg p-6 hover:shadow-xl transition transform hover:scale-105"
          >
            <div className="text-2xl mb-2">📊</div>
            <h3 className="text-xl font-bold">الدرجات</h3>
            <p className="text-sm mt-2 opacity-90">إدارة الدرجات والتقييمات</p>
          </Link>

          <Link
            href="/dashboard/attendance"
            className="bg-gradient-to-br from-red-500 to-red-600 text-white rounded-lg shadow-lg p-6 hover:shadow-xl transition transform hover:scale-105"
          >
            <div className="text-2xl mb-2">✅</div>
            <h3 className="text-xl font-bold">الحضور</h3>
            <p className="text-sm mt-2 opacity-90">متابعة الحضور والغياب</p>
          </Link>
        </div>
      </div>
    </main>
  );
}
