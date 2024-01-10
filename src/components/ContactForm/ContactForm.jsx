import React from 'react';
import s from './ContactForm.module.css';

export class ContactForm extends React.Component {
  state = {
    name: '',
    number: '',
  };
  handleChangeInput = e => {
    console.log(e);
    if (e.target.name === 'name') {
      this.setState({ name: e.target.value });
    }
    if (e.target.name === 'number') {
      this.setState({ number: e.target.value });
    }
  };

  saveContact = () => {
    console.log(this.state.name);
    this.props.addContacts({
      name: this.state.name,
      number: this.state.number,
    });
  };

  render() {
    return (
      <div>
        <form className={s.forma}>
          <span className={s.label}>Name</span>
          <input
            value={this.state.name}
            onChange={this.handleChangeInput}
            type="text"
            name="name"
            required
            className={s.input}
          />
          <span className={s.label}>Number</span>
          <input
            value={this.state.number}
            onChange={this.handleChangeInput}
            type="tel"
            name="number"
            required
            className={s.input}
          />
          <button onClick={this.saveContact} type="submit" className={s.dtnAdd}>
            Add contact
          </button>
        </form>
      </div>
    );
  }
}
