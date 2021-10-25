import React, { Fragment, useState } from 'react';
import Project from '../Project';

const projects = [
  {
    name: 'Basic Tee 6-Pack ',
    description: 'Work from home accessories',
    price: '$192',
    rating: 3.9,
    reviewCount: 117,
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-quick-preview-02-detail.jpg',
    imageAlt: 'Two each of gray, white, and black shirts arranged on table.',
  },
  {
    name: 'Basic Tee',
    description: 'Work from home accessories',
    price: '$1920000',
    rating: 3.9,
    reviewCount: 117,
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-quick-preview-02-detail.jpg',
    imageAlt: 'Two each of gray, white, and black shirts arranged on table.',
  },
];

const Portfolio = () => {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(1);

  const handleOnClick = (id) => {
    setOpen(true);
    setSelectedProject(id);
  };

  return (
    <>
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
            <h2 className="text-2xl font-extrabold text-gray-900">Portfolio</h2>

            <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
              {projects.map((project) => (
                <div key={project.name} className="group relative">
                  <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                    <img
                      src={project.imageSrc}
                      alt={project.imageAlt}
                      className="w-full h-full object-center object-cover"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <button type="button" onClick={() => handleOnClick(project)}>
                      <span className="absolute inset-0" />
                      {project.name}
                    </button>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">{project.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Project data={selectedProject} open={open} setOpen={setOpen} />
    </>
  );
};

export default Portfolio;
