"use client";
import TechnologyMenu from "@/app/components/TechnologyMenu";
import { technology } from "@/app/constants";
import { usePathname } from "next/navigation";

function TechnologyDetails() {
  const pathname = usePathname();
  const technName = pathname.split("/").pop();

  const tech = technology.find((tech) => tech.slug === technName);

  return (
    <div className=' flex flex-col desktop:flex-row pt-16 gap-8'>
      <picture className='-mx-6 tablet:-mx-10  desktop:ml-0 h-[260px] tablet:h-[360px] desktop:h-[600px] desktop:order-2 overflow-hidden'>
        <source media='(min-width: 1024px)' srcSet={tech.imgDesktop.src} />
        <source media='(min-width: 768px)' srcSet={tech.imgTablet.src} />

        <img
          src={tech.imgMobile.src}
          alt=''
          className='h-full w-full object-cover desktop:object-cover object-left'
        />
      </picture>
      <div className='flex flex-col items-center gap-10 desktop:flex-row'>
        <TechnologyMenu />
        <div className='max-w-lg'>
          <div className='mb-4'>
            <h2 className='text-white/50 font-bellefair text-center text-h4-mobile tablet:text-lg-mobile uppercase mb-4 '>
              {tech.title}
            </h2>
            <h2 className='text-white font-bellefair text-center text-lg-mobile tablet:text-h2-tablet uppercase'>
              {tech.name}
            </h2>
          </div>
          <p className='text-primary-300 font-barlow text-desc-mobile text-center h-[165px]'>
            {tech.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TechnologyDetails;
