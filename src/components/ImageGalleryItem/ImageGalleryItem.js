import { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'components/Modal/Modal';
import styles from './ImageGalleryItem.module.css';

export default class ImageGalleryItem extends Component {
  state = {
    modalIsOpen: false,
  };

  onModal = () => {
    this.setState(({ modalIsOpen }) => ({ modalIsOpen: !modalIsOpen }));
  };

  render() {
    const { id, tags, webformatUrl, largeImageUrl } = this.props;
    const { modalIsOpen } = this.state;
    return (
      <li className={styles.ImageGalleryItem}>
        <img
          className={styles.ImageGalleryItem_image}
          id={id}
          alt={tags}
          src={webformatUrl}
          onClick={this.onModal}
        />
        {modalIsOpen && (
          <Modal
            tags={tags}
            largeImageURL={largeImageUrl}
            handleClose={this.onModal}
          />
        )}
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  webformatUrl: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  largeImageUrl: PropTypes.string.isRequired,
};
