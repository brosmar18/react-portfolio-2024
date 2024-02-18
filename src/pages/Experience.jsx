import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiences } from '../constants';
import { brewhemia } from '../assets/icons';

const Experience = () => {
  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 mb-10 mt-10 h-full text-black">
      <div>
        <p className="sm:text-[18px] text-[14px] uppercase tracking-wider text-center">
          What I&#39;ve done
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center mb-20">
          Work Experience
        </h2>
      </div>
      <div className="mt-12">
        <VerticalTimeline>
          {experiences.map((experience) => (
            <VerticalTimelineElement
              key={`exp-timeline-${experience.company_name}`}
              date={experience.date}
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