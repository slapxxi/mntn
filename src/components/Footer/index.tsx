import Logo from '~/assets/logo.svg?react'
import config from './config'

export const Footer = () => {
  return (
    <footer className="col-[content] row-[footer] grid gap-y-4 md:grid-cols-subgrid text-white">
      <Logo className="md:col-span-6" />

      <p className="col-span-3 row-2 text-fluid-lg font-bold">
        Get out there &amp; discover your next slope, mountain &amp;
        destination!
      </p>

      <div className="col-span-4 row-span-3 flex justify-between">
        {config.sections.map((section, index) => (
          <div key={index} className="grid gap-6 content-start">
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

      <small className="row-3 md:col-span-6 text-fluid-lg text-white opacity-50">
        Copyright 2019 MNTN, Inc. Terms &amp; Privacy
      </small>
    </footer>
  )
}
