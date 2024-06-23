// import style from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { selectContacts, selectNameFilter } from '../../redux/selectors';
import { useSelector } from 'react-redux';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  const foundContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );
  return (
    <section>
      <ul>
        {foundContacts.map(contact => {
          return (
            <li key={contact.id}>
              <Contact data={contact} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default ContactList;
