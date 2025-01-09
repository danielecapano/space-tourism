export default function Layout({ children }) {
  return (
    <section id='destination'>
      <div className='wrapper'>
        <div className='relative items-center desktop:justify-start z-10 flex flex-col pt-6 tablet:pt-10 h-full w-full max-w-[1110px]'>
          <h4 className=' self-start text-base tablet:text-lg-tablet text-white text-center tablet:text-left uppercase font-barlow-cond mb-6'>
            <span className='font-bold opacity-25 mr-6'>01</span>
            pick your destination
          </h4>

          {children}
        </div>
      </div>
    </section>
  );
}
