import css from './Contact.module.css';
import { ImPhone, ImUser } from "react-icons/im";



const Contact = ({ name, phone, deleteContacts, id }) => {

  

  return (
  <li className={css.contact}>
    <p> < ImUser size="16"/> {name}</p>
    <p> < ImPhone size="16"/> {phone}</p>
    <button className={css.deleteBtn} onClick={() => deleteContacts(id)}>Delete</button>
  </li>
  );
};

export default Contact;

