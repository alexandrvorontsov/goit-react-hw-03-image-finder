import PropTypes from 'prop-types';
import styles from './Button.module.css';

export default function Button({ onBtnClick }) {
  return (
    <button className={styles.Button} type="button" onClick={onBtnClick}>
      Show more
    </button>
  );
}

Button.propTypes = {
  onBtnClick: PropTypes.func.isRequired,
};
