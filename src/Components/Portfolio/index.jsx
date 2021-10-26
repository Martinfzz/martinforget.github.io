import React, { useState } from 'react';
import Project from '../Project';
import Kitten from '../../assets/images/kitten_project.png';
import GetABand from '../../assets/images/getABand.png';
import ImmoCoin from '../../assets/images/immocoin.png';
import Glucicalc from '../../assets/images/glucicalc.png';

const projects = [
  {
    name: 'The Kitten Projet',
    description: 'Buy kitten pictures',
    longDescription: 'The Kitten Project is a web application where you can buy pictures of small cats. You can singin, login, receive mails and proceed to payment.',
    technologies: 'Ruby On Rails, DeviseJWT, Stripe, Mailer, API',
    href: 'https://kitten-picture-eshop.herokuapp.com/',
    imageSrc: Kitten,
    imageAlt: 'The kitten project web site landing page with a lot of cats on it',
  },
  {
    name: 'Get a Band',
    description: 'Find a band for your wedding',
    longDescription: 'Get a Band is a web application where you can find a music artist for you wedding. As an artist, you can register to propose your services and manage your calendar. As bride and groom, you can book and pay an artist, chat with him, review his performance. The application include a payment methode, inscription for artists and for the bride and groom. There is also an admin interface.',
    technologies: 'Ruby On Rails, DeviseJWT, Stripe, Mailer, ForestAdmin, Calendar, Chat, API',
    href: 'https://get-a-band.herokuapp.com/',
    imageSrc: GetABand,
    imageAlt: 'Get a Band web site landing page',
  },
  {
    name: 'ImmoCoin',
    description: 'Find the house of your dreams',
    longDescription: 'ImmoCoin is a web application where you can search for real estate. You can filter your research, login. As a real estate agent, you can create an property ad.',
    technologies: 'Ruby On Rails, React, Redux, Cookies, Axios, DeviseJWT, Mailer, API',
    href: 'https://react-immo-coin.vercel.app/',
    imageSrc: ImmoCoin,
    imageAlt: 'ImmoCoin web site landing page',
  },
  {
    name: 'Glucicalc',
    description: 'Calculate your carbohydrates consumption',
    longDescription: 'Glucicalc is a web application where you can calculate your carbohydrates consumption. You can search for a product into a big database, create a meal, add a product with the quantity you want to eat. The application will calculate for you how much carbohydrates you will consume. You will find a follow-up schedule with all you meals',
    technologies: 'Ruby On Rails, React, Redux, Cookies, Axios, Recharts, Calendar, DeviseJWT, Mailer, API',
    href: 'https://gluci-calc.vercel.app/',
    imageSrc: Glucicalc,
    imageAlt: 'Glucicalc web site landing page',
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

            <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-6">
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
