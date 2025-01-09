import Link from "next/link";

export default function Home() {
  return (
    <section
      id='home'
      className='relative h-screen w-full flex flex-col items-center justify-center desktop:justify-end p-6 tablet:p-10 tablet:pb-0 pt-[88px] tablet:pt-[96px] desktop:pt-[136px]   overflow-y-auto'
    >
      <div className='relative z-10 flex flex-col items-center pt-6 tablet:py-32 h-full w-full max-w-[1110px] desktop:flex-row desktop:h-auto desktop:justify-between'>
        <div className='max-w-lg flex flex-col items-center justify-center gap-6 desktop:w-1/2 desktop:items-start'>
          <p className='text-base tablet:text-lg font-barlow-cond text-primary-300'>
            SO, YOU WANT TO TRAVEL TO
          </p>
          <h1 className='font-bellefair text-display-mobile tablet:text-display leading-none uppercase '>
            space
          </h1>
          <p className='text-desc-mobile tablet:text-desc text-center text-primary-300 font-barlow desktop:text-start mb-10 desktop:mb-0'>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className='flex-1 desktop:grow-0 flex items-center justify-center min-h-[350px] tablet:min-h-min tablet:items-end desktop:items-center'>
          <Link href='/destination'>
            <div className='grid place-content-center size-[144px] tablet:size-[272px] rounded-full bg-white text-primary-900 text-h4-mobile tablet:text-h3 font-bellefair uppercase cursor-pointer ring-0 transition-all duration-500 hover:ring-[88px] ring-white/10'>
              explore
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
