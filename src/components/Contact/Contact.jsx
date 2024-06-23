import { useDispatch } from 'react-redux';
import { deleteContact } from '../redux/contactsSlice';

const Contact = () => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <div>
      {/* contact info */}
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Contact;
