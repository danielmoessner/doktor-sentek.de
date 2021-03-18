import React from 'react';
import PropTypes from 'prop-types';
import Hero from './Hero';
import Seo from './Seo';
import ImageFluid from '../types/ImageFluid';

function Animal({ title, image, category, excerpt, body, preview }) {
  return (
    <div>
      {!preview ? <Seo title={title} description={excerpt} image={image.src} /> : null}
      <div className="mb-6">
        <Hero image={image} preview={preview} alt={title} />
      </div>
      <div className="max-w-xl w-full mx-auto mb-3">
        <div className="text-gray-600 uppercase font-medium leading-tight tracking-tight -mb-2">
          {category}
        </div>
        <h2 className="text-5xl font-bold text-gray-800 tracking-tight leading-tight">{title}</h2>
      </div>
      <div className="max-w-xl w-full mx-auto mb-40">
        {!preview ? (
          <article
            className="prose-sm sm:prose lg:prose-xl"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: body }}
          />
        ) : (
          <article className="sm:prose lg:prose-xl prose-sm">{body}</article>
        )}
      </div>
    </div>
  );
}

Animal.defaultProps = {
  preview: false,
};

Animal.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  image: ImageFluid.isRequired,
  preview: PropTypes.bool,
};

export default Animal;
