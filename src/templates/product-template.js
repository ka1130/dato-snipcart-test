import React, { useContext } from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
// import ReactMarkdown from 'react-markdown';
import CartContext from '../context/CartContext';
// import { formatPrice } from '../utils/formatPrice';
// import { updateProductQty } from '../utils/cart';

const ProductTemplate = ({ data: { strapiProduct }, pageContext: { id } }) => {
  // const { name, price_in_cent, description, thumbnail } = strapiProduct;
  // const product = { ...strapiProduct, id };
  // const [, setCart] = useContext(CartContext);
  return (
    <div>
      <h2>Product</h2>
      {/* <h2>{name}</h2> */}
      <button
        // onClick={() => setCart(updateProductQty(product, 1))}
        style={{ marginBottom: '1rem' }}
      >
        Add to cart
      </button>
      {/* <h6>$ {formatPrice(price_in_cent)}</h6> */}
      {/* <GatsbyImage image={getImage(thumbnail)} alt={name} />
      <ReactMarkdown>{description}</ReactMarkdown> */}
    </div>
  );
};

// export const query = graphql`
//   query ProductBySlug($slug: String!) {
//     strapiProduct(slug: { eq: $slug }) {
//       name
//       strapiId
//       price_in_cent
//       description
//       thumbnail {
//         childImageSharp {
//           gatsbyImageData(width: 200, height: 300, placeholder: BLURRED)
//         }
//       }
//     }
//   }
// `;

export default ProductTemplate;
