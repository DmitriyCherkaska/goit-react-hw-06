import { useDispatch } from 'react-redux';
import { addContact } from '../redux/contactsSlice';

const ContactsForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const contact = {
      /* create new contact object */
    };
    dispatch(addContact(contact));
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* form fields */}
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactsForm;
