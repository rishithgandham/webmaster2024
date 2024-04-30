import { Tab } from '@headlessui/react';
import { Link } from 'react-router-dom';
import { File, PencilLine, YoutubeIcon } from 'lucide-react';
import React, { useState } from 'react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function InteractiveTabsGeothermal() {
  let [categories] = useState({
    Quizzes: [
      {
        title:
          'Quiz 1 -> Geothermal Energy on Quizizz! (study geothermal energy with the different study modes available on quizizz)',
        icon: <PencilLine />,
        color: 'text-green-600',
        href: 'https://quizizz.com/admin/quiz/66302fa24ca6d91210e10ebc?source=quiz_share',
      },
      {
        title: 'Quiz 2 -> Geothermal Energy Google Form Survey. ',
        icon: <PencilLine />,
        color: 'text-green-600',
        href: 'https://forms.gle/XfutZDKHpwNSzKzz9',
      },
    ],
    Articles: [
      {
        title: 'Geothermal Energy Article -> Learn more about geothermal!',
        icon: <File />,
        color: 'text-gray-600',
        href: 'https://ei.lehigh.edu/learners/energy/readings/geothermal.pdf',
      },
      {
        title:
          'Geothermal Case Study 1 -> Ball State University in Muncie, Indiana Replaces Coal-fired Boilers with Campus-Wide Geothermal Energy',
        icon: <File />,
        color: 'text-gray-600',
        href: 'https://eri.iu.edu/erit/case-studies/ball-state-university-geothermal.html',
      },
      {
        title:
          'Geothermal Case Study 2 -> IEA Geothermal highlights mine water geothermal case studies',
        icon: <File />,
        color: 'text-gray-600',

        href: 'https://www.thinkgeoenergy.com/iea-geothermal-highlights-mine-water-geothermal-case-studies/',
      },
    ],
    Videos: [
      {
        title:
          'Renewables vs. Fossil Fuels: The True Cost of Energy (highlights the importance of renewables in todays world)',
        icon: <YoutubeIcon />,
        color: 'text-red-600',
        href: 'https://www.youtube.com/watch?v=6_BGHy4sfMs&ab_channel=EngineeringwithRosie',
      },
      {
        title:
          'Can 100% renewable energy power the world? - Federico Rosei and Renzo Rosei -> A cool ted talk which underlines how our society as a whole can be 100% sustainable',
        icon: <YoutubeIcon />,
        color: 'text-red-600',
        href: 'https://www.youtube.com/watch?v=RnvCbquYeIM&ab_channel=TED-Ed',
      },
      {
        title:
          'Geothermal Specific Energy Video -> Renewable Energy 101: How Does Geothermal Energy Work?',
        icon: <YoutubeIcon />,
        color: 'text-red-600',
        href: 'https://www.youtube.com/watch?v=j7q653ffQO4&ab_channel=GreenMountainEnergy',
      },
    ],
  });

  return (
    <div className="w-full  px-2 py-16 sm:px-0 text-black">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          {Object.keys(categories).map(category => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                  'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white text-blue-700 shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'rounded-xl bg-white p-3',
                'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
              )}
            >
              <ul>
                {posts.map(post => (
                  <li
                    key={post.id}
                    className="relative rounded-md p-3 hover:bg-gray-100"
                  >
                    <Link
                      className="w-full flex justify-between gap-x-5"
                      target='_blank'
                      to={post.href}
                    >
                      <h3 className="text-sm font-medium leading-5">
                        {post.title}
                      </h3>
                      <span className={post.color}>{post.icon}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

export function InteractiveTabsWind() {
  let [categories] = useState({
    Quizzes: [
      {
        title:
          'Quiz 1 -> Wind Energy on Quizizz! (study wind energy with the different study modes available on quizizz)',
        icon: <PencilLine />,
        color: 'text-green-600',
        href: 'https://quizizz.com/admin/quiz/66302e0bfb25672771361ef3?source=quiz_share',
      },
      {
        title: 'Quiz 2 -> Wind Energy Google Form Survey. ',
        icon: <PencilLine />,
        color: 'text-green-600',
        href: 'https://forms.gle/VhxXHx7o9ygVwWcp7',
      },
    ],
    Articles: [
      {
        title: 'Wind Energy Case Study 1 -> DENMARK WIND: CASE STUDY ',
        icon: <File />,
        color: 'text-gray-600',
        href: 'https://journeys.dartmouth.edu/envs3koday/looking-towards-the-future/denmark-wind-case-study/',
      },
      {
        title:
          'Wind Energy Case Study 2 -> A case study of wind farm effects using two wake parameterizations in the Weather Research and Forecasting (WRF) model (V3.7.1) in the presence of low-level jets ',
        icon: <File />,
        color: 'text-gray-600',
        href: 'https://gmd.copernicus.org/articles/14/3141/2021/',
      },
    ],
    Videos: [
      {
        title:
          'Renewables vs. Fossil Fuels: The True Cost of Energy (highlights the importance of renewables in todays world)',
        icon: <YoutubeIcon />,
        color: 'text-red-600',
        href: 'https://gmd.copernicus.org/articles/14/3141/2021/e',
      },
      {
        title:
          'Can 100% renewable energy power the world? - Federico Rosei and Renzo Rosei -> A cool ted talk which underlines how our society as a whole can be 100% sustainable',
        icon: <YoutubeIcon />,
        color: 'text-red-600',
        href: 'https://www.youtube.com/watch?v=RnvCbquYeIM&ab_channel=TED-Ed',
      },
      {
        title:
          'Wind Specific Energy Video -> US Department of Energy 101: Wind Power',
        icon: <YoutubeIcon />,
        color: 'text-red-600',
        href: 'https://www.youtube.com/watch?v=EYYHfMCw-FI&ab_channel=U.S.DepartmentofEnergy',
      },
    ],
  });

  return (
    <div className="w-full  px-2 py-16 sm:px-0 text-black">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          {Object.keys(categories).map(category => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                  'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white text-blue-700 shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'rounded-xl bg-white p-3',
                'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
              )}
            >
              <ul>
                {posts.map(post => (
                  <li
                    key={post.id}
                    className="relative rounded-md p-3 hover:bg-gray-100"
                  >
                    <Link
                      className="w-full flex justify-between gap-x-5"
                      target='_blank'

                      to={post.href}
                    >
                      <h3 className="text-sm font-medium leading-5">
                        {post.title}
                      </h3>
                      <span className={post.color}>{post.icon}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
