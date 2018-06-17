import React from 'react';
import { compose } from 'recompose';
import connectApollo from '../lib/connectApollo';
import withRegion from '../lib/withRegion';
import connectI18n from '../lib/connectI18n';
import PageLayout from '../components/PageLayout';

const Showcase = ({ showcase }) => (
  <PageLayout title={showcase.meta_title} metaDescription={showcase.meta_description}>
    <div className="wrap mt7">
      <section id="showcase" className="section">
        <h1 className="text-center mb3">
          Showcase
        </h1>
        <ul className="mdc-image-list mdc-image-list--masonry masonry-image-list">

          <li className="mdc-image-list__item">
            <img className="mdc-image-list__image" src="../static/img/freezyboy/freezyboy.com_(iPad).png" alt="Text label" />
          </li>
          <li className="mdc-image-list__item">
            <img className="mdc-image-list__image" src="../static/img/freezyboy/freezyboy.com_(iPad) (3).png" alt="Text label" />
          </li>
          <li className="mdc-image-list__item">
            <img className="mdc-image-list__image" src="../static/img/freezyboy/freezyboy.com_(iPhone 6_7_8).png" alt="Text label" />
          </li>
          <li className="mdc-image-list__item">
            <img className="mdc-image-list__image" src="../static/img/freezyboy/freezyboy.com_(Laptop with HiDPI screen) (1).png" alt="Text label" />
          </li>
          <li className="mdc-image-list__item">
            <img className="mdc-image-list__image" src="../static/img/freezyboy/freezyboy.com_(iPad) (1).png" alt="Text label" />
          </li>
          <li className="mdc-image-list__item">
            <img className="mdc-image-list__image" src="../static/img/freezyboy/freezyboy.com_(iPad) (2).png" alt="Text label" />
          </li>
          <li className="mdc-image-list__item">
            <img className="mdc-image-list__image" src="../static/img/freezyboy/freezyboy.com_(iPhone 6_7_8 Plus).png" alt="Text label" />
          </li>
          <li className="mdc-image-list__item">
            <img className="mdc-image-list__image" src="../static/img/freezyboy/freezyboy.com_(Laptop with HiDPI screen) (2).png" alt="Text label" />
          </li>
          <li className="mdc-image-list__item">
            <img className="mdc-image-list__image" src="../static/img/freezyboy/freezyboy.com_(Laptop with HiDPI screen).png" alt="Text label" />
          </li>
          <li className="mdc-image-list__item">
            <img className="mdc-image-list__image" src="../static/img/freezyboy/freezyboy.com_(Nexus 6P).png" alt="Text label" />
          </li>
        </ul>

        <style jsx>{`
          /* Material */
          .mdc-image-list {
            display: -ms-flexbox;
            display: flex;
            -ms-flex-wrap: wrap;
                flex-wrap: wrap;
            margin: 0 auto;
            padding: 0;
          }

          .mdc-image-list__item,
          .mdc-image-list__image-aspect-container {
            position: relative;
            -webkit-box-sizing: border-box;
                    box-sizing: border-box; }

          .mdc-image-list__item {
            list-style-type: none; }

          .mdc-image-list__image {
            width: 100%;
            margin-bottom: 1em;}

          .mdc-image-list__image-aspect-container .mdc-image-list__image {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            height: 100%;
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover; }

          .mdc-image-list__image-aspect-container {
            padding-bottom: calc(100% / 1); }

          .mdc-image-list__supporting {
            color: rgba(0, 0, 0, 0.87);
            /* @alternate */
            color: var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));
            display: -ms-flexbox;
            display: flex;
            -ms-flex-align: center;
                align-items: center;
            -ms-flex-pack: justify;
                justify-content: space-between;
            -webkit-box-sizing: border-box;
                    box-sizing: border-box;
            padding: 8px 0;
            line-height: 24px; }

          .mdc-image-list__label {
            font-family: Roboto, sans-serif;
            -moz-osx-font-smoothing: grayscale;
            -webkit-font-smoothing: antialiased;
            font-size: 1rem;
            line-height: 1.75rem;
            font-weight: 400;
            letter-spacing: 0.00937em;
            text-decoration: inherit;
            text-transform: inherit;
            -o-text-overflow: ellipsis;
               text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden; }

          .mdc-image-list--with-text-protection .mdc-image-list__supporting {
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 48px;
            padding: 0 16px;
            background: rgba(0, 0, 0, 0.6);
            color: #fff; }

          .mdc-image-list--masonry {
            display: block; }

          .mdc-image-list--masonry .mdc-image-list__item {
            -webkit-column-break-inside: avoid;
            break-inside: avoid-column; }

          .mdc-image-list--masonry .mdc-image-list__image {
            display: block;
            height: auto; }

            .hero-image-list {
              width: 300px;
              margin: 0; }
              .hero-image-list .mdc-image-list__item {
                width: calc(100% / 5 - 4.2px);
                margin: 2px; }

            .hero-image-list .mdc-image-list__image {
              background-color: #000; }

            .standard-image-list {
              max-width: 900px; }
              .standard-image-list .mdc-image-list__image-aspect-container {
                padding-bottom: calc(100% / 1.5); }
              .standard-image-list .mdc-image-list__item {
                width: calc(100% / 5 - 4.2px);
                margin: 2px; }

            .masonry-image-list {
              -webkit-column-count: 5;
                      column-count: 5;
              -webkit-column-gap: 16px;
                      column-gap: 16px;
                    }
              .masonry-image-list .mdc-image-list__item {
                margin-bottom: 0px; }

            @media (max-width: 599px) {
              .standard-image-list .mdc-image-list__item {
                width: calc(100% / 3 - 4.33333px);
                margin: 2px; }
              .masonry-image-list {
                -webkit-column-count: 2;
                        column-count: 2;
                -webkit-column-gap: 16px;
                        column-gap: 16px; }
                .masonry-image-list .mdc-image-list__item {
                  margin-bottom: 0px; } }


         `}
        </style>
      </section>
    </div>
    <div className="wrap wrap--narrow mb3">
      <p>A customer story</p>
      <ul>
        <li>Supports both B2C & B2B clients. Context-aware prices.</li>
        <li>Combined with a standard CMS to lower costs</li>
        <li>Unified React Storefront</li>
        <li>Various Discount models</li>
        <li>Delivery estimation through Google Spreadsheets</li>
        <li>Document generation through smallinvoice</li>
      </ul>
      <div className="mt3">
        <p>See the shop in action </p>
        <a className="button" href="https://freezyboy.com">freezyboy.com</a>
      </div>
    </div>
  </PageLayout>
);


export default connectApollo(compose(
  connectI18n,
  withRegion('showcase'),
)(Showcase));
