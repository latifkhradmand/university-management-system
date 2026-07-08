import Header from "../Components/Header/Header";
import Services from "../Components/Services/Services";
import Slider from "../Components/Slider/Slider";

function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <Header />
      <main className="pt-16">
        <Slider />
        <Services />
      </main>
    </div>
  );
}

export default Home;
