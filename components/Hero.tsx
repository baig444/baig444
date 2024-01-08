import React from 'react'
import Image from 'next/image'
import Button from './Button'

const Hero = () => {
    return (
        <section className='max-container padding-container  flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row'>
            <div className='hero-map' />

            {/* left Text */}
            <div className='relative z-20 flex flex-1 flex-col xl:w-1/2'>
                <Image src="/camp.svg"
                    alt='camp'
                    width={50}
                    height={50}
                    className='absolute left-[-5px] top-[-39px] w-10 lg:w-[50px]' />
                <h1 className='bold-52 lg:blod-88'>Emirates Camping <br /> Area</h1>
                <p className='regular-16 mt-6 text-gray-30 xl:max-w-[520px]'>
                    We Want to be each of your journeys seekings the satisfaction of seeing the luxury and beauty of UAE. We can help you on an adventure around the world in just one app
                </p>
                <div className='my-11 flex flex-wrap gap-5'>
                    <div className='flex items-center gap-2'>
                        {Array(5).fill(1).map((_, i) => (
                            <Image
                                src='/star.svg'
                                key={i}
                                alt='star'
                                width={24}
                                height={24} />
                        ))}
                    </div>
                    <p className='bold-16 lg:bold-20 text-blue-70'>
                        120k
                        <span className='regular-16 lg:regular-20 ml-3 underline'>Excellent Reviews</span>
                    </p>
                </div>
                <div className='flex flex-col w-full gap-3 sm:flex-row'>
                    <Button type='button' title='Download App' variant='btn_green' />
                    <Button type='button' title='How we work'
                        icon='/play.svg'
                        variant='btn_white_text' />
                </div>
            </div>
            <div className='relative flex flex-1 items-start'>
                <div className='relative flex z-20 w-[220px] flex-col gap-5 mt-[-15px] rounded-3xl bg-green-90 px-3.5 py-6'>
                    <div className='flex flex-col'>
                        <div className='flexBetween'>
                            <p className='regular-16 text-gray-20'>Location</p>
                            <Image src='/close.svg' alt='close' width={24} height={24} />
                        </div>
                        <p className='bold-20 text-white'>Palm Jumerah</p>
                    </div>


                    <div className='flexBetween'>
                        <div className='flex flex-col'>
                            <p className='regular-16 block text-gray-20'>Distance</p>
                            <p className='bold-20 text-white'>193.99 mi</p>
                        </div>
                        <div className='flex flex-col'>
                            <p className='regular-16 block text-gray-20'>Elevation</p>
                            <p className='bold-16 text-white'>5.040 km</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Hero
