import React from 'react';

const PurposeSection = () => {
  const features = [
    {
      icon: "🟣",
      title: "Built for impact",
      description: "We identify and nurture a truly diverse team of designers, developers and marketers."
    },
    {
      icon: "🔴",
      title: "In sync with you",
      description: "We work the way you do by adapting to your workflows and rhythm we aim to blend in for a seamless."
    }
  ];

  return (
    <section className='w-full bg-gray-50 py-16 px-4 sm:px-6 md:px-8'>
      <div className='max-w-6xl mx-auto'>
        <div className='grid md:grid-cols-3 grid-cols-1 gap-8'>
          {/* Heading text */}
          <div className='flex flex-col items-center md:items-start text-center md:text-left'>
            <p className='text-sm text-purple-600 font-medium mb-2'>
              ACHIEVE MORE
            </p>
            <h2 className='text-2xl w-full font-bold text-gray-900 text-center md:text-left md:w-4/5'>
              Purpose of a convoy is to keep your team
            </h2>

          </div>

          {/* Bullet Points */}
          <div className='col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8'>
            {
              features.map((feature, index) => (
                <div
                  key={index}
                  className='flex items-start space-x-4 w-full'
                >
                  {/* Icon */}
                  <div className='w-8 h-8 flex items-center justify-center rounded-lg text-1xl'>
                    {feature.icon}
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                      {feature.title}
                    </h3>
                    <p className='text-gray-600'>
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))
            }
          </div>

        </div>
      </div>
    </section>
  );
};

export default PurposeSection;
