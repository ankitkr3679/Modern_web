import React, { useState } from 'react'

const PriceSection = () => {
  const [productCount, setProductCount] = useState(1)

  const starterPrice = Math.round(4000 * (productCount / 50))
  const businessPrice = Math.round(7500 * (productCount / 50))

  return (
    <section className="py-15 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-neutral-900 mb-16">
          Flexible Pricing Plans
        </h2>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Starter Plan */}
          <div className="bg-white rounded-2xl shadow-xl p-8 transition hover:shadow-2xl border border-gray-100">
            <h3 className="text-lg font-semibold text-blue-600 uppercase mb-2">Starter</h3>
            <p className="text-4xl font-bold text-neutral-800 mb-4">${starterPrice}<span className="text-base font-medium text-gray-500"> /mo</span></p>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li>✔️ Essential scheduling features</li>
              <li>✔️ Basic analytics</li>
              <li>✔️ Email support</li>
            </ul>
          </div>

          {/* Business Plan */}
          <div className="bg-white rounded-2xl shadow-xl p-8 transition hover:shadow-2xl border border-gray-100">
            <h3 className="text-lg font-semibold text-blue-600 uppercase mb-2">Business</h3>
            <p className="text-4xl font-bold text-neutral-800 mb-4">${businessPrice}<span className="text-base font-medium text-gray-500"> /mo</span></p>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li>✔️ Advanced scheduling tools</li>
              <li>✔️ In-depth reports & insights</li>
              <li>✔️ Priority support</li>
            </ul>
          </div>
        </div>

        {/* Product Range Slider */}
        <div className="max-w-xl mx-auto">
          <p className="text-center text-gray-700 text-sm mb-2">Selected: <span className="font-semibold">{productCount} Products</span></p>
          <div className="flex items-center gap-3 px-4 mb-12">
            <span className="text-xs text-gray-500">1</span>
            <input
              type="range"
              min="1"
              max="50"
              value={productCount}
              onChange={(e) => setProductCount(parseInt(e.target.value))}
              className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
            <span className="text-xs text-gray-500">50</span>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-lg font-medium text-neutral-800 mb-4">Ready to get started?</p>
            <button className="bg-blue-600 hover:bg-blue-700 transition-all text-white font-semibold px-6 py-3 rounded-xl shadow-md cursor-pointer">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PriceSection
