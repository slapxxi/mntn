import heroImage from '~/assets/hero.jpg'
import ArrowDownIcon from '~/assets/arrow-down-icon.svg?react'

export const Hero = () => {
  return (
    <div className="-z-1 grid grid-cols-subgrid grid-rows-subgrid [grid-area:hero]">
      <img
        src={heroImage}
        alt=""
        className="pointer-events-none mx-auto w-full max-w-[1960px] 
        mask-y-from-50% mask-x-from-99% opacity-80 [grid-area:hero]"
      />

      <section className="z-10 col-[content] row-2 mx-auto grid max-w-prose grid-rows-[70px_min-content]">
        <header className="row-2 grid gap-y-8 self-start">
          <h2 className="subtitle">A Hiking Guide</h2>
          <h1 className="title text-[88px]">
            Be prepared for the Mountains and beyond!
          </h1>
          <div className="row-3 flex items-center gap-4 self-start text-fluid-lg font-bold">
            scroll down <ArrowDownIcon className="h-6" />
          </div>
        </header>
      </section>
    </div>
  )
}
