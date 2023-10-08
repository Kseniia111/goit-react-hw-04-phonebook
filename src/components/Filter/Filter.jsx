import { nanoid } from 'nanoid';
import css from './Filter.module.css';

const filterId = nanoid();

export const Filter = ({ value, onChange }) => {
  return (
    <div>
      <label className={css.formLabel} htmlFor={filterId}>
        Find contacts by name
        <input
          className={css.formInput}
          type="text"
          id={filterId}
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
};
