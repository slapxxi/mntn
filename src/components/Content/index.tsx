import ArrowRightIcon from '~/assets/arrow-right-icon.svg?react'
import config from './config'

export const Content = () => {
  return (
    <main className="mb-50 grid grid-flow-dense gap-y-50 area-main md:grid-cols-subgrid">
      {config.sections.map((section) => (
        <div className="group contents">
          <img
            src={section.img}
            alt=""
            className="w-full md:col-[7/-1] group-even:md:col-[1/span_4]"
          />

          <section
            key={section.title}
            className="grid grid-cols-[[full]minmax(10px,min(30vw,140px))_[main]auto[main-end_full-end]]
            grid-rows-[[header]auto[header-end]] 
            gap-y-7 self-center md:col-span-5 group-even:md:col-[6/-1]"
          >
            <div className="col-[full] row-[header] self-center align-bottom font-bold text-white opacity-10">
              <img src={section.count} alt="" />
            </div>

            <div className="col-[main] row-[header] grid gap-y-7 self-center">
              <h3 className="subtitle">{section.subtitle}</h3>
              <h2 className="title text-fluid-6xl">{section.title}</h2>
            </div>

            <p className="col-2 text-fluid-lg font-bold">{section.text}</p>

            <button className="col-[main] flex items-center gap-4 text-fluid-lg font-bold text-xamber-200">
              {section.extra}
              <ArrowRightIcon />
            </button>
          </section>
        </div>
      ))}
    </main>
  )
}
