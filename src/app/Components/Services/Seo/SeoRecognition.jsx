import React from 'react';

export default function SeoRecognition() {
  return (
    <section className="py-12 bg-gray-100">
      {/* Title */}
      <div className="container mx-auto">
        <div className="mb-8 text-center">
          <h2 className="text-gray-700 font-semibold text-xl mb-2">Recognition</h2>
          <h3 className="text-4xl font-bold text-black mb-4">Trusted Chicago SEO Agency</h3>
        </div>

        {/* Ratings */}
        <div className="flex flex-wrap justify-center items-center gap-14 w-full mb-4">
          {[
            { name: 'Clutch', stars: 4.9, image: '/Images/Clutch-logo-color.svg' },
            { name: 'Google', stars: 4.8, image: '/Images/google-logo-color.svg' },
            { name: 'Facebook', stars: 4.6, image: '/Images/facebook-logo-color.svg' },
            { name: 'Yelp', stars: 4.5, image: '/Images/yelp-logo-color.svg' },
            { name: 'UpCity', stars: 5.0, image: '/Images/UpCity-logo-color.svg' },
          ].map((company, index) => (
            <div key={company.name} className="flex flex-col items-center text-center w-full md:w-auto">
              <img
                src={company.image}
                alt={`${company.name} logo`}
                className="mx-auto w-28 mb-2"
              />
              <div className="flex justify-center space-x-1 text-yellow-400">
                {[...Array(Math.round(company.stars))].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="text-sm font-medium text-gray-600">{company.stars}</p>
            </div>
          ))}

          {/* CTA Button next to UpCity */}
          <div className="flex flex-col items-center text-center w-full md:w-auto mt-4 md:mt-0">
            <a
              href="/get-to-know-us"
              className="px-6 py-3 bg-yellow-500 text-black font-bold rounded-lg shadow-lg hover:bg-yellow-600"
            >
              GET TO KNOW US
            </a>
          </div>
        </div>

        {/* Award Badges */}
        <div className="flex justify-center items-center gap-6 mt-8 w-3/5 mx-auto">
          {[
            'awwwards',
            'Vector-2',
            'Frame-4',
            'Frame-5',
            'Group-3',
            'Frame-6',
            'Frame-7',
            'Group-23-1',
          ].map((badge) => (
            <div key={badge} className="p-4">
              <img
                src={`/Images/${badge}.svg`}
                alt={badge}
                className="mx-auto w-44"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
