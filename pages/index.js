import Nav from '../components/nav'
import Home from '../components/home'

export default function IndexPage() {
  return (
    <div className="lg:container lg:mx-auto relative">
      <Nav />
      <div className="h-screen bg-gray-200">
        <Home />
      </div>
    </div>
  )
}
