import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import ReactMarkdown from 'react-markdown';

const ProductTemplate = ({ data: { datoCmsProduct } }) => {
  const { name, price, description, image, originalId, slug } = datoCmsProduct;
  const src = getImage(image).images.sources[0].srcSet;
  return (
    <div className="content">
      <h2>{name}</h2>
      <button
        className="snipcart-add-item"
        data-item-id={originalId}
        data-item-price={price}
        data-item-url={`/products/${slug}`}
        data-item-image={src}
        data-item-name={name}
      >
        Do koszyka
      </button>
      <h6>{price} zł</h6>
      <GatsbyImage image={getImage(image)} alt={name} src={src} />
      <ReactMarkdown>{description}</ReactMarkdown>
    </div>
  );
};

export const query = graphql`
  query ProductBySlug($slug: String!) {
    datoCmsProduct(slug: { eq: $slug }) {
      name
      slug
      price
      description
      originalId
      image {
        gatsbyImageData(width: 600, placeholder: BLURRED)
      }
    }
  }
`;

export default ProductTemplate;
