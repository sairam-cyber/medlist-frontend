import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Specialties from '../components/Specialties';
import AskMedica from '../components/AskMedica';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <Banner />
        <Specialties />
        <AskMedica />
      </main>
    </div>
  )
}