import Header from '../components/Header';
import Stars from '../components/Stars';

const Home = () => {
  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 mb-10 mt-10 md:h-[calc(100vh-12rem)] flex items-center justify-center">
      <Stars />
      <Header />
    </div>
  )
}

export default Home