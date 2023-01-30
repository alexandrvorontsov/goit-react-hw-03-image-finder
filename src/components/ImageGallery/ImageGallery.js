import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import styles from './ImageGallery.module.css';

export default function ImageGallery({ data }) {
  return (
    <ul className={styles.ImageGallery}>
      {data.map(({ id, tags, webformatURL, largeImageURL }, index) => (
        <ImageGalleryItem
          key={index}
          id={id}
          tags={tags}
          webformatUrl={webformatURL}
          largeImageUrl={largeImageURL || webformatURL}
        />
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
