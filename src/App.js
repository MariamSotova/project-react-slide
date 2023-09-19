import "./App.css";
import { Slider } from "./Slider";
import { Advant } from "./Advant";
import { Header } from "./Header";
import { Faqlist } from "./Faqlist";
import { Modal } from "./Modal";
import { ParallaxButton } from "./ButtonParallax";
import { Income } from "./Income";

function App() {
  return (
    <div className="App">
      <Slider />
      <Advant />
      <Header />
      <Faqlist />
      <Modal />
      <ParallaxButton text="Bich" />
      <ParallaxButton text="Yep" />
      <Income />
    </div>
  );
}

export default App;
