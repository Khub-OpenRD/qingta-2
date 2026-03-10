export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-b from-sky-100 to-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-sky-600 mb-4">
          青她
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          欢迎来到青她
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="#"
            className="px-6 py-3 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors"
          >
            开始使用
          </a>
          <a
            href="#"
            className="px-6 py-3 border border-sky-500 text-sky-500 rounded-lg hover:bg-sky-50 transition-colors"
          >
            了解更多
          </a>
        </div>
      </div>
    </main>
  )
}
