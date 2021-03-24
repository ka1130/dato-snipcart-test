import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { SnipcartContext } from 'gatsby-plugin-snipcart-advanced/context';
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

    .cart-icon {
      margin-left: auto;
      margin-right: 1rem;

      svg {
        width: 1.25rem;
        height: auto;
        fill: #fff;
      }
    }

    .user-icon {
      font-size: 0.8rem;
    }

    .cart-icon,
    .user-icon,
    a {
      color: #fff;
      display: flex;
      text-decoration: none;
      cursor: pointer;
      background-color: transparent;
      border: 0;
    }

    .qty {
      font-size: 0.8rem;
      font-weight: bold;
      margin-left: 0.5rem;
    }
  }
`;

const Header = ({ siteTitle }) => {
  const { state } = useContext(SnipcartContext);
  const { userStatus } = state;
  return (
    <StyledHeader>
      <div className="wrapper">
        <h1>
          <Link to="/">{siteTitle}</Link>
        </h1>
        <span className="cart-icon snipcart-checkout">
          <span className="qty snipcart-items-count" />
          <CartIcon />
          <span className="qty snipcart-total-price" />
        </span>
        <button className="user-icon snipcart-customer-signin">
          {userStatus === 'SignedOut' ? 'Zaloguj się' : 'Moje konto'}
        </button>
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
