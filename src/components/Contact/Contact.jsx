// import { FaUserAlt } from 'react-icons/fa';
// import style from './Contact.module.css';
import { ImPhoneHangUp } from 'react-icons/im';
import { deleteContact } from '../../redux/contactsSlice';
import { useDispatch } from 'react-redux';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { RiEdit2Fill } from 'react-icons/ri';
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
            <ImPhoneHangUp size={16} />
          </span>
          <span>{number}</span>
        </a>
      </div>
      <div>
        <button>
          <RiEdit2Fill size={18} />
        </button>
        <button onClick={onDelete}>
          <RiDeleteBin6Fill size={18} />
        </button>
      </div>
    </div>
  );
};
export default Contact;
