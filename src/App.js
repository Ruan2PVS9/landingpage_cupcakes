import "./App.css";
import CupcakeCarousel from "./components/carossel";
import cupcake1 from "./assets/1.jpg";
import cupcake2 from "./assets/2.jpg";
import cupcake3 from "./assets/3.jpg";
import cupcake4 from "./assets/4.jpg";

const cupcakes = [cupcake1, cupcake2, cupcake3, cupcake4];

function App() {
  return (
    <div className="App">
      <header className="Header">
        <h1>Confeitaria</h1>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Sobre</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="description">
          <section className="title">
            <h2>Confeitaria</h2>
            <p>Proident in sint consectetur qui ex irure Lorem.</p>
          </section>
          <section className="sub-description">
            <h3>Proident in sint consectetur qui ex irure Lorem.</h3>
            <p>
              Reprehenderit magna dolor quis fugiat. Culpa magna minim
              exercitation officia Lorem culpa sint. Excepteur ullamco ipsum
              cupidatat sunt aute. Fugiat id qui qui et nulla. Eu est amet minim
              elit dolor reprehenderit deserunt mollit laboris dolore cillum
              mollit qui ad. Ex laboris sint culpa enim laboris exercitation
              duis aute. Est Lorem tempor cillum laborum ex et ex laboris non
              irure aute ullamco magna.
            </p>
          </section>
        </section>

        <section className="cupcake-carousel">
          <CupcakeCarousel cupcakes={cupcakes} />
          {/* Aqui você pode usar um componente de carrossel de cupcakes */}
          {/* <div className="cupcake">Cupcake 1</div>
          <div className="cupcake">Cupcake 2</div>
          <div className="cupcake">Cupcake 3</div> */}
          {/* Adicione mais cupcakes conforme necessário */}
        </section>
      </main>
    </div>
  );
}

export default App;
