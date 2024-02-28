import Header from '../components/Header';
import Skills from '../components/Skills';


const Home = () => {
  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 mb-10 mt-10 md:h-full flex flex-col">
      <Header />
      <Skills />
    </div>
  )
}

export default Home