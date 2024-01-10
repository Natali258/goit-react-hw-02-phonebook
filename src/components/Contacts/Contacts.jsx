import { Filter } from 'components/Filter/Filter';
import s from './Contacts.module.css';

export const Contacts = ({ contacts, deleteContact, saveFilter }) => {
  return (
    <div>
      <Filter filter={saveFilter} />
      <ul className={s.contactsList}>
        {contacts.map(contact => (
          <li className={s.contactLi} key={contact.id}>
            {contact.name}: {contact.number}
            <button
              onClick={() => deleteContact(contact.id)}
              className={s.btnLi}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
