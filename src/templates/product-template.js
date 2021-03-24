import React, { useContext } from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import ReactMarkdown from 'react-markdown';
import CartContext from '../context/CartContext';
// import { updateProductQty } from '../utils/cart';

const ProductTemplate = ({ data: { datoCmsProduct }, pageContext: { id } }) => {
  const { name, price, description, image, originalId, slug } = datoCmsProduct;
  // const product = { ...strapiProduct, id };
  // const [, setCart] = useContext(CartContext);
  const src = getImage(image).images.sources[0].srcSet;
  return (
    <div>
      <h2>{name}</h2>
      <button
        className="snipcart-add-item"
        data-item-id={originalId}
        data-item-price={price}
        data-item-url={`/products/${slug}`}
        data-item-description={description}
        data-item-image={src}
        data-item-name={name}
        // style={{ marginBottom: '1rem' }}
      >
        Add to cart
      </button>
      <h6>$ {price}</h6>
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
