'use client';
import { motion } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiences } from '../constants';



const Experience = () => {

  const textVariant = {
    hidden: {
      y: -20,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 1.25,
        delay: 0.2,
      }
    }
  };


  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 mb-10 mt-10 h-full text-black">
      <motion.div
        initial='hidden'
        animate='show'
        variants={textVariant}
      >
        <p className="uppercase tracking-wider text-center text-dark-text text-lg mb-1 md:text-xl">
          What I&#39;ve done
        </p>
        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-dark-primary to-dark-secondary text-4xl lg:text-6xl font-bold text-center mb-0">
          Work Experience
        </h2>
      </motion.div>
      <div className="mt-20 md:mt-32">
        <VerticalTimeline>
          {experiences.map((experience) => (
            <VerticalTimelineElement
              key={`exp-timeline-${experience.company_name}`}
              contentArrowStyle={{ borderRight: `7px solid ${experience.border}` }}
              date={experience.date}
              dateClassName='text-white'
              iconStyle={{ background: experience.iconBg }}
              icon={
                <div className='flex justify-center items-center w-full h-full '>
                  <img
                    src={experience.icon}
                    alt={experience.company_name}
                    className='w-[80%] h-[80%] object-contain'
                  />
                </div>
              }
              contentStyle={{
                borderBottom: '8px',
                borderStyle: 'solid',
                borderBottomColor: experience.border,
                boxShadow: 'none',
              }}
            >
              <div>
                <h3 className='text-xl font-poppins font-semibold'>
                  {experience.title}
                </h3>
                <p className='font-medium text-base' style={{ margin: 0 }}>
                  {experience.company_name}
                </p>
                <ul className='my-5 list-disc space-y-2 text-sm'>
                  {experience.points.map((point, index) => (
                    <li
                      key={`exp-point-${index}`}
                      className='pl-1'
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  )
}

export default Experience