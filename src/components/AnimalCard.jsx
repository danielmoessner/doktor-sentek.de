import React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import ImageFluid from '../types/ImageFluid';

function AnimalCard({ title, slug, image, category, excerpt, preview }) {
  return (
    <div>
      <div className="shadow rounded-lg">
        <Link className={!preview ? 'block aspect-w-16 aspect-h-10' : ''} to={`wildtiere/${slug}`}>
          {!preview ? (
            <Img
              alt={title}
              className="rounded-lg"
              style={{ position: 'absolute' }}
              fluid={image}
            />
          ) : (
            <div className="rounded-lg overflow-hidden">{image}</div>
          )}
        </Link>
      </div>
      <div className="px-2 pt-4 flex flex-col justify-start items-start">
        <Link className="mb-2" to={`wildtiere/${slug}`}>
          <div className="text-gray-600 text-xs uppercase font-medium mb-0 leading-tight tracking-tight">
            {category}
          </div>
          <h2 className="text-2xl text-gray-800 font-bold tracking-tight leading-tight">{title}</h2>
        </Link>
        <Link to={`wildtiere/${slug}`}>
          <p className="text-sm leading-tight text-gray-900">{excerpt}</p>
        </Link>
      </div>
    </div>
  );
}

AnimalCard.defaultProps = {
  preview: false,
};

AnimalCard.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  image: ImageFluid.isRequired,
  preview: PropTypes.bool,
};

export default AnimalCard;
