import { ThreeCircles } from 'react-loader-spinner';
import styles from './Loader.module.css';

export default function Loader() {
  return (
    <div className={styles.Loader}>
      <ThreeCircles
        height={100}
        width={100}
        color="#7fa94d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
    </div>
  );
}
