import React from 'react';
import { StickyContainer, Sticky } from 'react-sticky';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { compose, getContext } from 'recompose';
import MenuSwitch from './MenuSwitch';
import Menu from './Menu';
// import CartSwitch from './CartSwitch';
import AccountSwitch from './AccountSwitch';

const Header = ({ isMenuToggled }) => (
  <StickyContainer>
    <Sticky>
      {({ distanceFromTop }) => (
        <header className={`header ${distanceFromTop < -40 ? 'header--sticky' : ''}`}>
          <div className="header-inner">
            <Link href="/">
              <a>
                <div className="unchained-brand">
                  <img className="unchained-logo" src="../static/img/unchained-logo-black.png" alt="Unchained logo" />
                  <span>unchained</span>
                </div>
              </a>
            </Link>
            <div className="header__right">
              <Menu hidden={!isMenuToggled} />
              <MenuSwitch />
              <AccountSwitch />
              {/* <CartSwitch /> */}
            </div>
          </div>
        </header>
      )}
    </Sticky>
    <style jsx global>{`
      @media (max-width: 1219px) {
        .language-switch-in-head {
          display: none;
        }
      }
      .language-switch-in-head {
        order: 2;
      }
    `}
    </style>

    <style jsx>{`
      .unchained-brand {
        display: flex;
        align-items: center;
        font-size: 20px;
      }
      .unchained-logo {
        max-width: 40px;
        margin-right: 8px;
      }
      .header {
        position: fixed;
        top: 0px;
        left: 0;
        right: 0;
        padding-top: 1em;
        padding-bottom: 1em;
        padding-left: 1em;
        z-index: 10;
        transition: all .3s ease-in-out;
        background-color: rgba(255,255,255,.9);
      }

      .header--sticky {
        top: 0;
      }

      .header-inner {
        max-width: 1314px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .unchained-logo {
        z-index: 10;
      }

      .header__right {
        z-index: 10;
        padding-right: 1em;
        display: flex;
        justify-content: flex-end;
        align-items: center;
      }
      .header--sticky {
        background-color: rgba(255,255,255,.9);
      }

      @media (min-width: 1220px) {
        .header {
          padding-top: 36px;
          top: 10px;
          left: 10px;
          right: 10px;
        }
        .header--sticky {
          padding-top: 20px;
          top: 10px;
          left: 10px;
          right: 10px;
        }
        .header__right {
          width: 100%;
          margin-left: 11.5em;
          justify-content: space-between;
        }
      }

    `}
    </style>

  </StickyContainer>

);

export default compose(getContext({
  isMenuToggled: PropTypes.bool,
  isAccountToggled: PropTypes.bool,
  isCartToggled: PropTypes.bool,
}))(Header);
