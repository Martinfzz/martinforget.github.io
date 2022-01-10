/* eslint-disable react/prop-types */
import React from 'react';
import SkillBar from 'react-skillbars';

const skills = [
  {
    type: 'HTML',
    level: 90,
    color: {
      bar: '#DC7633',
      title: {
        background: '#D35400',
      },
    },
  },
  {
    type: 'CSS',
    level: 80,
    color: {
      bar: '#3498db',
      title: {
        background: '#2980b9',
      },
    },
  },
  {
    type: 'Javascript',
    level: 80,
    color: {
      bar: '#F4D03F',
      title: {
        background: '#F4D03F',
      },
    },
  },
  {
    type: 'Ruby/Rails',
    level: 75,
    color: {
      bar: '#CD6155',
      title: {
        background: '#C0392B',
      },
    },
  },
  {
    type: 'React',
    level: 75,
    color: {
      bar: '#5D6D7E',
      title: {
        background: '#34495E',
      },
    },
  },
  {
    type: 'MongoDB',
    level: 50,
    color: {
      bar: '#52BE80',
      title: {
        background: '#27AE60',
      },
    },
  },
  {
    type: 'ReactNative',
    level: 40,
    color: {
      bar: '#3498db',
      title: {
        background: '#2980b9',
      },
    },
  },
  {
    type: 'TypeScript',
    level: 40,
    color: {
      bar: '#2471A3',
      title: {
        background: '#1F618D',
      },
    },
  },
];

const About = ({ t }) => (
  <div className="bg-white" id="about">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 uppercase">{t('About Me')}</h2>
        <div className="mt-10 max-w-2xl text-xl text-gray-500 mx-auto">
          <p className="mb-20">
            {t("I'm a Fullstack web developper. I worked for few years into aeronautical engineering field. I would like to help people create their future.")}
          </p>
          <SkillBar skills={skills} animationDelay={500} />
        </div>
      </div>
    </div>
  </div>
);

export default About;
