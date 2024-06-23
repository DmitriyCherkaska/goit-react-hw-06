// import style from './Logo.module.css';
import { MdOutlineAddReaction } from 'react-icons/md';
const Logo = () => {
  return (
    <header>
      <div>
        <h1>
          <MdOutlineAddReaction size={50} />
          <br />
          Phonebook
        </h1>
      </div>
    </header>
  );
};
export default Logo;
