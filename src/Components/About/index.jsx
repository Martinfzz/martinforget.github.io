import React from 'react';
import SkillBar from 'react-skillbars';

const skills = [
  {
    type: 'Java',
    level: 85,
    color: {
      bar: '#3498db',
      title: {
        background: '#2980b9',
      },
    },
  },
  { type: 'Javascript', level: 75 },
];

const About = () => (
  <div className="py-12 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:text-center">
        <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl uppercase">About Me</h2>
        <div className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          <p>
            I&apos;m a Fulstack web developper.
            {' '}
            I work for few years into aeronautical engineering field
            {' '}
            Possimus magnam voluptatum cupiditate veritatis in
            {' '}
            accusamus quisquam.
          </p>
          <SkillBar skills={skills} />
        </div>
      </div>
    </div>
  </div>
);

export default About;
