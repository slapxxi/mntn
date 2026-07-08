import { Header } from '~/components'

const MAX_WIDTH = 1760

function App() {
  return (
    <div
      className="grid min-h-screen
      bg-xgray-800
      grid-rows-[[header_hero]_min-content_[header-end]_auto_[hero-end]]
      grid-cols-[1fr_[content]_repeat(12,minmax(0,148px))_[content-end]_1fr] gap-x-2"
    >
      <Header />
    </div>
  )
}

export default App
