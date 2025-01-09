export default function Layout({ children }) {
  return (
    <section id='technology'>
      <div className='wrapper'>
        <div className='relative max-w-[1100px]z-10 flex flex-col pt-6 tablet:pt-10 h-full w-full max-w-[1110px] large-desktop:h-auto'>
          <h4 className='text-base tablet:text-lg-tablet text-white text-center tablet:text-left uppercase font-barlow-cond mb-6'>
            <span className='font-bold opacity-25 mr-6'>03</span>
            space launch 101
          </h4>

          {children}
        </div>
      </div>
    </section>
  );
}
