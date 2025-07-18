import React from 'react'
import slack from "../assets/slack.png"
import amazon from "../assets/amazon.png"
import woocommerce from "../assets/woocommerce.png"
import meundies from "../assets/meundies.png"
import sitepoint from "../assets/sitepoint.png"

const CompanyLogo = () => {
  const logos = [slack, amazon, woocommerce, meundies, sitepoint];

  return (
    <>
      {/* ✅ Desktop layout (sm and above) */}
      <div className='w-full overflow-hidden container mx-auto py-20 gap-8 flex-col sm:flex-row sm:flex  sm:items-center items-start hidden sm:flex'>
        <div className='w-[300px] shrink-0 px-5 text-gray-600 border-l-4 border-blue-500 bg-white py-2 z-10 sm:text-base text-xl font-semibold text-left'>
          Proud partner at <br /> Hubspot & Segment
        </div>
        <div className="flex animate-marquee whitespace-nowrap cursor-pointer">
          {[...logos, ...logos].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`company logo ${index}`}
              className="mx-12 h-8 w-36 object-contain transition-all"
            />
          ))}
        </div>

      </div>

      {/* ✅ Mobile layout (below sm) */}
      <div className="sm:hidden w-full overflow-hidden py-10 bg-white">
        <div className="text-center px-4">
          <h2 className="text-gray-700 font-semibold text-lg">
            Proud partner at <br /> Hubspot & Segment
          </h2>
          <div className="mx-auto mt-2 h-1 w-24 bg-blue-500 rounded" />
        </div>

        <div className="mt-6 overflow-hidden w-full cursor-pointer">
          <div className="flex animate-marquee whitespace-nowrap min-w-max items-center gap-8 px-4">
            {[...logos, ...logos].map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt="company logo"
                className="h-8 w-24 object-contain  transition-all"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyLogo;
