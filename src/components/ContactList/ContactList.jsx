import React from 'react';
import css from './ContactList.module.css';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className={css.list}>
      {contacts?.map(({ id, name, number }) => {
        return (
          <li className={css.contactItem} key={id}>
            <span className={css.contactName}>{name}:</span>
            <span className={css.contactNumber}>{number}</span>
            <button
              className={css.button}
              type="button"
              onClick={() => deleteContact(id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
