import { ThreeDots } from 'react-loader-spinner';
import styles from './Loader.module.css';

export default function Loader() {
  return (
    <div className={styles.Loader}>
      <ThreeDots 
        height="80" 
        width="80" 
        radius="9"
        color="blue" 
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
     />
    </div>
  );
}
