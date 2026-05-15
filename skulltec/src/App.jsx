import Navbar from "./components/navbar";
import Titulo from "./Titulo";
import Footer from "./components/footer";
import Services from "./components/services";
import Contatos from "./components/contact";

function App() {
  return (
    <div>
      <Navbar />
      <Titulo />
      <Services />
      <Contatos />
      <Footer />
    </div>
  );
}

export default App;