import PropTypes from 'prop-types';
import styles from './ImageGallery.module.css';

export default function ImageGallery({ data }) {
  return (
    <ul className={styles.ImageGallery}>
      {data.map(({ id, tags, webformURL, largeImageUrl }) => (
        <ImageGalleryItem
          key={id}
          id={id}
          tags={tags}
          webformURL={webformURL}
          largeImageUrl={largeImageUrl}
        />
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
