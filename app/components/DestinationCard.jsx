"use client";
import Image from "next/image";
import React, { useState } from "react";
import { destinations } from "../constants";

function DestinationCard() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const planet = destinations[currentIndex];

  const { name, distance, time, src, description } = planet;
  return (
    <div className='max-w-[900px] mx-auto flex flex-col desktop:flex-row desktop:justify-between items-center desktop:basis-full desktop:gap-32'>
      <figure className='grid place-items-center py-[26.5px] tablet:py-[42px] mb-8'>
        <Image
          src={src}
          alt={name}
          width={445}
          className='w-[150px] tablet:w-[300px] large-desktop:w-[480px]'
        />
      </figure>
      <div className='flex flex-col items-center desktop:items-start desktop:max-w-[360px]'>
        <ul className='flex gap-8 mb-6'>
          {destinations.map((planet, index) => (
            <li
              key={planet.id}
              className={`border-b-[3px] border-transparent text-small text-primary-300 font-barlow-cond uppercase pb-3 cursor-pointer transition-all duration-500 ${
                currentIndex === index
                  ? "text-white border-b-white hover:border-b-white"
                  : "hover:border-b-white/50 hover:text-white"
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              {planet.name}
            </li>
          ))}
        </ul>
        <div className='divide-y divide-white/25 flex flex-col gap-6'>
          <div className='max-w-[500px]'>
            <h2 className='text-h2 tablet:text-display-mobile text-center desktop:text-left font-bellefair uppercase leading-none mb-4'>
              {name}
            </h2>
            <p className='text-desc-mobile font-barlow text-center desktop:text-left text-primary-300'>
              {description}
            </p>
          </div>
          <div className='text-center pt-6 flex items-center justify-center flex-col tablet:flex-row gap-6 pb-6 tablet:pb-10'>
            <div className='flex flex-col items-center desktop:items-start justify-center gap-3 grow'>
              <p className='text-small font-barlow-cond text-primary-300 uppercase'>
                avg. distance
              </p>
              <h4 className='text-h4 font-bellefair uppercase'>{distance}</h4>
            </div>
            <div className='flex flex-col items-center desktop:items-start justify-center gap-3 grow'>
              <p className='text-small font-barlow-cond text-primary-300 uppercase'>
                est. travel time
              </p>
              <h4 className='text-h4 font-bellefair uppercase'>{time}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DestinationCard;
