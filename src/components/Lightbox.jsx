import PropTypes from 'prop-types';
import React from 'react';
import LightboxBase from 'react-images';

export default class Lightbox extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};

    this.goToPrev = this.goToPrev.bind(this);
    this.goToNext = this.goToNext.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.handleClickImage = this.handleClickImage.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    if (!props.isOpen) {
      return {
        initialImage: -1,
      };
    }

    if (props.initialImage !== state.initialImage) {
      return {
        initialImage: props.initialImage,
        currentImage: props.initialImage,
      };
    }

    return null;
  }

  goToPrev() {
    this.setState(prevState => ({
      currentImage: prevState.currentImage - 1,
    }));
  }

  goToNext() {
    this.setState(prevState => ({
      currentImage: prevState.currentImage + 1,
    }));
  }

  goToIndex(index) {
    this.setState({
      currentImage: index,
    });
  }

  handleClickImage() {
    const { images } = this.props;
    const { currentImage } = this.state;

    if (currentImage < images.length - 1) {
      this.goToNext();
    }
  }

  render() {
    const { images, ...props } = this.props;
    const { currentImage } = this.state;

    return (
      <LightboxBase
        images={images}
        currentImage={currentImage}
        backdropClosesModal
        showImageCount={false}
        showThumbnails
        closeButtonTitle="Bezárás (Esc)"
        leftArrowTitle="Előző (Balra nyíl)"
        rightArrowTitle="Következő (Jobbra nyíl)"
        onClickPrev={this.goToPrev}
        onClickNext={this.goToNext}
        onClickImage={this.handleClickImage}
        onClickThumbnail={this.goToIndex}
        {...props}
      />
    );
  }
}

Lightbox.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  isOpen: PropTypes.bool,
  initialImage: PropTypes.number,
};

Lightbox.defaultProps = {
  isOpen: false,
  initialImage: 0,
};
