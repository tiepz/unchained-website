import React from 'react';
import Link from 'next/link';
import { compose } from 'recompose';
import connectApollo from '../lib/connectApollo';
import withRegion from '../lib/withRegion';
import connectI18n from '../lib/connectI18n';
import PageLayout from '../components/PageLayout';

const Platform = ({ platform }) => (
  <PageLayout title={platform.meta_title} metaDescription={platform.meta_description}>

    <div className="wrap wrap--narrow mt7">
      <div className="button-group mt0 mb3">
        <Link href="/engine">
          <a className="button">Engine</a>
        </Link>
        <Link href="/control-panel">
          <a className="button">Control Panel</a>
        </Link>
        <Link href="/consulting">
          <a className="button">Consulting</a>
        </Link>
        <Link href="/managed-hosting">
          <a className="button disabled">Managed Hosting</a>
        </Link>
      </div>
      <section className="section">
        <div className="flex-between nowrap">
          <h1>
          Unchained Managed Hosting
          </h1>
          <img className="undraw w25 mr3" src="../static/img/undraw_maintenance_cn7j.svg" alt="maintenance" />
        </div>
        <p>
        Let us host the Unchained Engine for you so you can concentrate on
        your business. We use Docker Swarm and a bunch of modern Software to setup
        a scalable Unchained infrastructure for you. It doesn&apos;t matter to us
        where the datacenter is.
        </p>
      </section>
    </div>
    <div className="wrap mt0 mb7">
      <section>

        <div className="d-flex flex-wrap features">
          <ul className="w-lg-48">
            <li>Bring your own Datacenter or go with us (We use Exoscale.ch)</li>
            <li>Traefik as Reverse Proxy https://traefik.io</li>
            <li>Auto issuance and renewal of SSL certificates</li>
            <li>MongoDB in a Replicaset Configuration</li>
            <li>On-Premise Setup of the Unchained Control Panel</li>
            <li>Multi Instance Setup of the Unchained Engine</li>
            <li>
            Automatical daily Database Backups to a Cloud of your
            choice (like Amazon, Microsoft)
            </li>
            <li>Desaster recovery process and health status widget for your website</li>
            <li>Setup and Configuration of: Domains, DNS</li>
            <li>Maintenance of the Infrastructure parts (Docker + Ubuntu)</li>
            <li>Monitoring and Incident Management with open-source tools</li>
          </ul>
          <div className="w-lg-48">
            <h4>Most important:</h4>
            <p>
          We setup the whole infrastructure in a way that a seamless handover is possible
          in a planned way, so you could basically let us setup the whole stack and then take
          over for maintenance and monitoring.
            </p>
          </div>
        </div>
      </section>
      <Link href="/platform">
        <div className="text-center">
          <a className="button mt3">
              Back to Platform overview
          </a>
        </div>
      </Link>
    </div>
  </PageLayout>
);


export default connectApollo(compose(
  connectI18n,
  withRegion('platform'),
)(Platform));
