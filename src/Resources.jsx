import React from 'react';

export default function Resources({ resources }) {
  return (
    <div className="p-4 bg-white rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Edukasi & Sumber Daya</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((resource, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-lg shadow-md p-6 flex flex-col hover:shadow-xl transition-shadow duration-300 border-t-4 border-blue-500"
          >
            <div className="flex items-center mb-4">
              <resource.icon className="text-blue-600 mr-3" size={32} />
              <h3 className="text-xl font-bold text-gray-800">{resource.title}</h3>
            </div>
            <p className="text-gray-700 mb-4 flex-grow">{resource.description}</p>
            <a
              href={resource.link}
              className="mt-auto inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 transition duration-300 transform hover:scale-105"
            >
              Baca Selengkapnya
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
