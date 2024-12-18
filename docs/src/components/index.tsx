export const IndexPage = () => (
  <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
    {/* 渐变背景 */}
    <div className="absolute inset-0 bg-gradient-to-r from-orange-100 via-red-100 to-cyan-100">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
    </div>

    {/* 内容区域 */}
    <div className="relative z-10 text-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
        React Native Awesome Slider
      </h1>
      <p className="text-md md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
        A performant React Native slider built with Reanimated 2 and React
        Native Gesture Handler.
      </p>
      <a
        href="/docs"
        className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-black rounded-full hover:bg-gray-800 transition-colors"
      >
        Read Docs
      </a>
    </div>
  </div>
);
