import React from 'react'
import Image from 'next/image';
import { PEOPLE_URL } from '@/constants';

interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const CampSite = ({ backgroundImage, title, subtitle, peopleJoined }: CampProps) => {
  return (
    <div className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover rounded-md bg-no-repeat lg:rounded-5xl 2xl:rounded-5xl ml-7`}>
      <div className='flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10'>
        <div className='flexCenter gap-4'>
          <div className='rounded-full bg-green-50 p-4'>
            <Image
              src="/folded-map.svg"
              alt="map"
              width={28}
              height={28}
            />
          </div>
          <div className='flex flex-col gap-1 '>
            <h1 className='bold-18 text-white'>{title}</h1>
            <p className='bold-14 text-white'>{subtitle}</p>
          </div>
        </div>
        <div className='flexCenter gap-6'>
          <span className='flex -space-x-4 overflow-hidden'>
            {PEOPLE_URL.map((url) => (
              <Image
                className='inline-block h-10 w-10 rounded-full'
                src={url}
                key={url}
                alt='person'
                width={52}
                height={52}
              />
            ))}
          </span>
          <p className='text-white bold-16 md:bold-20'>{peopleJoined}</p>
        </div>
      </div>
    </div>
  )
}
const Camp = () => {
  return (
    <section className=' 2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20'>
      <div className='hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[580px]'>
        <CampSite
          backgroundImage='bg-bg-img-1'
          title='Sharjah Camp'
          subtitle='Emirates Hayat'
          peopleJoined='90+ Joined'
        />
        <CampSite backgroundImage='bg-bg-img-2'
          title='Jubel Ali Camp'
          subtitle='Emaar Hayat'
          peopleJoined='70+ Joined' />
      </div>
      <div className='flexEnd mt-10 px-6 lg:mt-20 lg:mr-6'>
        <div className='bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[400px] xl:rounded-5xl xl:px-12 xl:py-10 relative xl:mt-[-250px]  w-full overflow-hidden rounded-3xl'>
          <h5 className='regular-18 md:regular-32 2xl:regular-64 capitalize text-white'>
            <strong>Feeling Relaxed </strong>And Enjoyed
          </h5>
          <p className='regular-12 xl:regular-16 mt-5 text-white'>
            Starting From The Anxiety of the Traveller when visiting Dubai, the possibility of getting lost is very large. That's why we are here for those who want to experience the beauty of Dubai.
          </p>
          <Image
          src="/quote.svg"
          alt='camp-2'
          width={100}
          height={100}
          className='camp-quote'
          />
        </div>
      </div>
    </section>
  )
}

export default Camp
