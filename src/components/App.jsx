import ContactList from './ContactList/ContactList';
import SearchBox from './SearchBox/SearchBox';
import './App.css';
import Logo from './Logo/Logo';

function App() {
  return (
    <>
      <Logo />
      <SearchBox />
      {/* <ContactForm /> */}
      <ContactList />
    </>
  );
}

export default App;
