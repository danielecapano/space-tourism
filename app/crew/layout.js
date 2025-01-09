export default function Layout({ children }) {
  return (
    <section id='crew'>
      <div className='wrapper tablet:pb-0 large-desktop:pb-12'>
        <div className='relative z-10 flex flex-col pt-6 tablet:pt-10 h-full w-full max-w-[1110px]  tablet:overflow-hidden'>
          <h4 className='text-base tablet:text-lg-tablet text-white text-center tablet:text-left uppercase font-barlow-cond mb-6'>
            <span className='font-bold opacity-25 mr-6'>02</span>
            meet your crew
          </h4>

          {children}
        </div>
      </div>
    </section>
  );
}
