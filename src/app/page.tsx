import Navbar from "./components/Navbar";
import AskMedisa from "./components/home/AskMedisa";
import Banner from "./components/home/Banner";
import Specialties from "./components/home/Specialties";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <Banner />
        <Specialties />
        <AskMedisa />
      </main>
    </div>
  );
}
