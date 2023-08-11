import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <div className="contacts">
      <Contact
        img="http://placekitten.com/200/300"
        name="Mr. Whiskerson"
        phone="(212) 555-1234"
        email="mr.whiskaz@catnap.meow"
      />
      <Contact
        img="http://placekitten.com/201/300"
        name="Fluffykins"
        phone="(212) 555-2345"
        email="fluff@me.com"
      />
      <Contact
        img="http://placekitten.com/202/300"
        name="Felix"
        phone="(212) 555-4567"
        email="thecat@hotmail.com"
      />
      <Contact
        img="http://placekitten.com/203/300"
        name="Pumpkin"
        phone="(0800) CAT KING"
        email="pumpkin@scrimba.com"
      />
    </div>
  );
}

export default App;
