import React from 'react';
import { Link, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import SEO from '../components/seo';

const StyledProducts = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  width: 640px;
  margin: auto;

  .product-single a {
    text-decoration: none;
    color: #333;
  }
  .gatsby-image-wrapper {
    width: 10rem;
    height: 10rem;
  }
  h3 {
    font-size: 0.9rem;
    margin: 0;
    font-variant: small-caps;
    width: 10rem;
  }
  .price {
    font-weight: normal;
    font-size: 0.8rem;
    display: block;
    margin: 0.2rem 0 0.8rem 0;
  }
`;

const IndexPage = ({ data }) => {
  const {
    allDatoCmsProduct: { nodes: products },
  } = data;
  return (
    <>
      <SEO title="Home" />
      <StyledProducts>
        {products.map(({ image, name, originalId, price, slug }) => {
          const src = getImage(image).images.sources[0].srcSet;
          return (
            <div className="product-single" key={originalId}>
              <Link to={`/products/${slug}`}>
                <h3>
                  {name}
                  <span className="price"> ${price}</span>
                </h3>
                <GatsbyImage image={getImage(image)} alt={name} src={src} />
              </Link>
            </div>
          );
        })}
      </StyledProducts>
    </>
  );
};

export const query = graphql`
  {
    allDatoCmsProduct {
      nodes {
        name
        originalId
        price
        description
        slug
        image {
          gatsbyImageData(width: 600, placeholder: BLURRED)
        }
      }
    }
  }
`;

export default IndexPage;
