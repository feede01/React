import './App.css';
import Button from "./components/Button/Button";
import Flex from './components/Flex/Flex';
import Header from './components/Header/Header';
import Item from './components/ItemListContainer/Item';

function App() {
  


  return (
    <>
    <Header/>
    <div className="App">
      <header className="App-header">
        <p>
          Hola React
        </p>
        <img 
          src="https://www.patterns.dev/img/reactjs/react-logo@3x.svg"
          alt= "React Logo"
        />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Flex>
            <Button color="orange">Soy un children</Button>
            <Button text="Learn React" color="darkgreen"/>
            <Button text = "Mas Propiedades" color="purple" size="64px" />
            <Button text="Click me"/>
          </Flex>
          
        </a>
          <Item
            price = {200}
            title="PC GAMER GAMA BAJA"
            description="Lorem Ipsum"
            img="https://s3-sa-east-1.amazonaws.com/saasargentina/QJ0OrQ5jwk99GeywUA27/imagen"
          />
           <Item
            price = {500}
            title="PC GAMER GAMA MEDIA"
            description="Lorem Ipsum"
            img="https://s3-sa-east-1.amazonaws.com/saasargentina/Ewe3ohIxEczB3e8Scz4p/imagen"
          />
          <Item
            price = {900}
            title="PC GAMER GAMA ALTA"
            description="Lorem Ipsum"
            img="https://s3-sa-east-1.amazonaws.com/saasargentina/eZ9TTJHuvau3XhtNRRjB/imagen"
          />
      </header>
    </div>
    </>
  );
}

export default App;
