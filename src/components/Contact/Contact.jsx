// import { FaUser } from 'react-icons/fa';
// import style from './Contact.module.css';
import { ImPhone } from 'react-icons/im';
import { deleteContact } from '../../redux/contactsSlice';
import { useDispatch } from 'react-redux';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { RiEdit2Line } from 'react-icons/ri';
import { FaUser } from 'react-icons/fa';

const Contact = ({ data: { id, name, number } }) => {
  const dispatch = useDispatch();
  const onDelete = () => {
    dispatch(deleteContact(id));
  };
  return (
    <div>
      <div>
        <h2>
          <span>
            <FaUser size={30} />
          </span>
          <span>{name}</span>
        </h2>
        <a href={`tel: +${number}`}>
          <span>
            <ImPhone size={16} />
          </span>
          <span>{number}</span>
        </a>
      </div>
      <div>
        <button>
          <RiEdit2Line size={18} />
        </button>
        <button onClick={onDelete}>
          <RiDeleteBin5Line size={18} />
        </button>
      </div>
    </div>
  );
};
export default Contact;
