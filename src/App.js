import logo from './logo.svg';
import './App.css';
import Movie from './components/movie/Movie';
import Book from './components/book/Book';
import IdCard from './components/idCard/IdCard';
import Image from './components/image/Image';
import Wrapper from './components/list/Wrapper';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <Wrapper children={
        <>
          <IdCard first_last_name="Lord Emrys" day_of_birth="1.1.1001." city="Camelot" src="/images/merlin.jpg"/>
          <IdCard first_last_name="Morgana Pendragon" day_of_birth="3.3.1003." city="Camelot" src="/images/morgana.jpg"/>
          <IdCard first_last_name="Arthur Pendragon" day_of_birth="12.12.1002." city="Camelot" src="/images/arthur.jpg"/>
        </>
      } />
        
      <Wrapper children={
        <>
           <Movie movie_name="The Prestige" year="2006" genre="Mistery/Drama" director="Christopher Nolan" actors="Christian Bale, Hugh Jackman, Scarlett Johansson" src="/images/logo192.png" />
           <Movie movie_name="Agora" year="2009" genre="Historical/Adventure/Drama" director="Alejandro Amenábar" actors="Rachel Weisz, Max Minghella, Oscar Isaac" src="/images/logo192.png" />
           <Movie movie_name="Pride and Prejudice" year="2005" genre="Romance/Drama" director="Joe Wright" actors="Keira Knightley, Matthew Macfadyen, Rosamund Pike" src="/images/logo192.png" />
        </>
      } />

      <Wrapper children={
        <>
            <Book book_name="The Master and Margarita" year="1966" author="Mihail Bulgakov" quote="Manuscripts do not burn." src="/images/logo192.png" />
            <Book book_name="War of the Worlds" year="1898" author="H. G. Wells" quote="Yet so vain is man, and so blinded by his vanity" src="/images/logo192.png" />
            <Book book_name="The Picture of Dorian Gray" year="1890" author="Oscar Wilde" quote="To define is to limit." src="/images/logo192.png" />
        </>
      } />

    </div>
  );
}

export default App;
