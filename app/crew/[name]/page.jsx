"use client";
import { crew } from "../../constants/index";
import { usePathname } from "next/navigation";
import CrewNavigation from "../../components/CrewNavigation";
import Image from "next/image";

export default function CrewDetail() {
  const pathname = usePathname();
  const memberRole = pathname.split("/").pop();

  const member = crew.find((member) => member.slug === memberRole);
  return (
    <div className='flex flex-col items-center justify-center mt-10 tablet:h-full  desktop:h-auto desktop:grid grid-cols-2 '>
      <div className='relative flex flex-col items-center desktop:justify-center desktop:items-start mb-8 desktop:mb-0 max-w-lg large-desktop:max-w-full  text-center desktop:text-left desktop:h-full'>
        <div className='mb-8'>
          <h4 className='text-white/50 font-bellefair  text-h4-mobile tablet:text-lg-mobile  large-desktop:text-h3 uppercase mb-2 '>
            {member.role}
          </h4>
          <h3 className='text-white font-bellefair  text-lg-mobile tablet:text-h2-tablet large-desktop:text-h2 uppercase'>
            {member.name}
          </h3>
        </div>
        <p className='text-primary-300 font-barlow text-desc-mobile tablet:text-desc-tablet large-desktop:text-desc  h-[165px] tablet:h-[120px] mb-6 desktop:mb-10'>
          {member.description}
        </p>
        <CrewNavigation />
      </div>
      <figure className='mask-image h-[340px] tablet:w-3/5 desktop:w-auto  tablet:h-full desktop:h-auto overflow-hidden'>
        <Image
          src={member.src}
          alt={member.name}
          className='mask-image h-full w-full object-cover object-top desktop:object-contain '
        />
      </figure>
    </div>
  );
}
