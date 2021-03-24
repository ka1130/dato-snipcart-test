import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';
import CartIcon from '../images/cart.svg';

const StyledHeader = styled.header`
  background: rebeccapurple;
  margin-bottom: 1.45rem;
  font-family: sans-serif;

  .wrapper {
    margin: 0 auto;
    max-width: 640px;
    padding: 1rem 0;
    display: flex;
    justify-content: space-between;

    h1 {
      margin: 0;
      display: flex;
      font-size: 1rem;
      height: 1.5rem;
      line-height: 1.5rem;
    }

    a {
      color: #fff;
      text-decoration: none;
      display: flex;
    }

    .cart-icon {
      svg {
        width: 1.25rem;
        height: auto;
        fill: #fff;
      }
    }

    .qty {
      font-size: 0.8rem;
      font-weight: bold;
      margin-left: 0.5rem;
    }
  }
`;

const Header = ({ siteTitle }) => {
  return (
    <StyledHeader>
      <div className="wrapper">
        <h1>
          <Link to="/">{siteTitle}</Link>
        </h1>
        <Link to="/cart" className="cart-icon snipcart-checkout">
          <span className="qty snipcart-items-count" />
          <CartIcon />
          <span className="qty snipcart-total-price" />
        </Link>
      </div>
    </StyledHeader>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
