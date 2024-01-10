import s from './Phonebook.module.css';

export const Phonebook = ({ name, number, username, contacts }) => {
  return (
    <div>
      <form className={s.forma}>
        <span className={s.label}>Name</span>
        <input
          value={name}
          onChange={username}
          type="text"
          name="name"
          required
          className={s.input}
        />
        <span className={s.label}>Number</span>
        <input
          value={number}
          onChange={username}
          type="tel"
          name="number"
          required
          className={s.input}
        />
        <button onClick={contacts} type="submit" className={s.dtnAdd}>
          Add contact
        </button>
      </form>
    </div>
  );
};
