import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="text-center max-w-2xl">
        <div className="mb-8">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 rounded-full mb-6">
            <span className="text-4xl font-bold">ESISA</span>
          </div>
        </div>

        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          نظام إدارة الطلاب
        </h1>

        <p className="text-xl text-gray-600 mb-8">
          منصة شاملة لإدارة بيانات الطلاب والدرجات والحضور
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <Link
            href="/login"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition transform hover:scale-105"
          >
            تسجيل الدخول
          </Link>
          <Link
            href="/dashboard"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition transform hover:scale-105"
          >
            لوحة المعلومات
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 text-left">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">المميزات:</h2>
          <ul className="space-y-2 text-gray-700">
            <li>✓ إدارة بيانات الطلاب</li>
            <li>✓ متابعة الدرجات والتقييمات</li>
            <li>✓ نظام الحضور والغياب</li>
            <li>✓ إدارة المواد الدراسية</li>
            <li>✓ برنامج 5 سنوات (L1-L3, M1-M2)</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
