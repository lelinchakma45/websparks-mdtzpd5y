import React from 'react'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="text-center space-y-6 max-w-2xl">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Welcome to WebSparks AI
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Your expert AI-powered Full Stack Software Engineer is ready to create exceptional, 
            production-worthy applications with modern technologies and outstanding user interfaces.
          </p>
        </div>
        
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Development Environment Ready
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="bg-blue-50 rounded-lg p-3 text-center">
              <div className="font-semibold text-blue-700">React 18</div>
              <div className="text-blue-600">TypeScript</div>
            </div>
            <div className="bg-indigo-50 rounded-lg p-3 text-center">
              <div className="font-semibold text-indigo-700">Vite</div>
              <div className="text-indigo-600">Fast Build</div>
            </div>
            <div className="bg-purple-50 rounded-lg p-3 text-center">
              <div className="font-semibold text-purple-700">Tailwind</div>
              <div className="text-purple-600">CSS Framework</div>
            </div>
            <div className="bg-green-50 rounded-lg p-3 text-center">
              <div className="font-semibold text-green-700">ESLint</div>
              <div className="text-green-600">Code Quality</div>
            </div>
          </div>
        </div>

        <div className="text-center space-y-2">
          <p className="text-gray-500 text-sm">
            Start prompting to see the magic happen!
          </p>
          <p className="text-xs text-gray-400 font-medium">
            Powered by WebSparks AI
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
