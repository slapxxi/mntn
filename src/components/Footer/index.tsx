import Logo from '~/assets/logo.svg?react'
import config from './config'

export const Footer = () => {
  return (
    <footer
      className="col-[content] row-[footer] mb-20 
      grid grid-cols-[[left_right]auto] gap-y-4 py-5 text-white
      md:grid-cols-[subgrid_[left][][][][][][left-end_right][][][][right-end]] "
    >
      <div className="col-[left] grid gap-y-6 grid-rows-[auto_auto_1fr]">
        <Logo />

        <p className="max-w-80 text-fluid-lg font-bold">
          Get out there &amp; discover your next slope, mountain &amp;
          destination!
        </p>

        <small className="mt-auto text-fluid-lg text-white opacity-50">
          Copyright 2019 MNTN, Inc. Terms &amp; Privacy
        </small>
      </div>

      <div className="col-[right] flex justify-between">
        {config.sections.map((section, index) => (
          <div key={index} className="grid content-start gap-6">
            <h2 className="text-fluid-2xl font-bold text-xamber-200">
              {section.title}
            </h2>
            <ul className="grid gap-4">
              {section.links.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-fluid-md">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  )
}
