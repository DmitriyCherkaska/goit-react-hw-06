// import style from './Logo.module.css';
import { MdOutlineContacts } from 'react-icons/md';
const Logo = () => {
  return (
    <header>
      <div>
        <h1>
          <MdOutlineContacts size={50} />
          <br />
          Phonebook
        </h1>
      </div>
    </header>
  );
};
export default Logo;
