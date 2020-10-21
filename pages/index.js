import Nav from '../components/nav'
import Home from '../components/home'

export default function IndexPage() {
  return (
    <div className="lg:container lg:mx-auto">
      <div className="h-screen bg-gray-200">
        <Nav />
        <Home />
      </div>
    </div>
  )
}
