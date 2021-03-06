import React from 'react';
import { compose, pure } from 'recompose';
import Link from 'next/link';
import { Pie } from 'react-chartjs-2';
import Markdown from 'react-remarkable';
import variables from '../styles/variables';
import connectApollo from '../lib/connectApollo';
import withRegion from '../lib/withRegion';
import withCurrentUser from '../lib/withCurrentUser';
import connectI18n from '../lib/connectI18n';
import PageLayout from '../components/PageLayout';

const pieOptions = {
  segmentShowStroke: true,
  // String - The colour of each segment stroke
  segmentStrokeColor: '#fff',
  // Number - The width of each segment stroke
  segmentStrokeWidth: 2,
  // Number - The percentage of the chart that we cut out of the middle
  percentageInnerCutout: 50, // This is 0 for Pie charts
  // Number - Amount of animation steps
  animationSteps: 100,
  // String - Animation easing effect
  animationEasing: 'easeOutBounce',
  // Boolean - Whether we animate the rotation of the Doughnut
  animateRotate: true,
  // Boolean - Whether we animate scaling the Doughnut from the centre
  animateScale: false,
  tooltip: false,
  legend: {
    display: true,
  },
};

const Fundraiser = ({ fundraiser, currentUser }) => (
  <PageLayout title={fundraiser.meta_title} metaDescription={fundraiser.meta_description}>

    <div className="wrap wrap--narrow mt7">
      <section id="fundraiser" className="section">
        <h2>
          {fundraiser.title}
        </h2>
        <Markdown source={fundraiser.intro} />
      </section>
    </div>
    <div className="c-bg-dark mv1">
      <div className="wrap wrap--narrow">
        <a className="button button--primary button--blocked" href="https://github.com/unchainedshop/unchained-evolution/blob/master/business-plan.md">
              Read our Business Plan
        </a>
      </div>
    </div>

    <div className="wrap wrap--narrow mb7">
      <section className="section">
        <div className="mv4">
          <p>
Get whitelisted as an investor
          </p>
          {currentUser._id ? (
            <Link href="/profile">
              <a className="button">
                Check your whitelisting status
              </a>
            </Link>
          ) : (
            <Link href="/signup?redirect=/fundraiser">
              <a className="button hero-button">
              Join the queue
              </a>
            </Link>
          )}
        </div>

        <div className="charts">
          <div className="chart">
            <h3 className="mb1">
              Distribution
            </h3>
            <Pie
              data={{
                labels: [
                  'Open Source Bounties 15%',
                  'Company Reserve 10%',
                  'Team & Advisors 15%',
                  'Sale 60%',
                ],
                datasets: [{
                  data: [15, 10, 15, 60],
                  backgroundColor: [
                    variables.grayColor,
                    variables.darkGrayColor,
                    variables.darkColor,
                    variables.primaryColor,
                  ],
                }],
              }}
              options={pieOptions}
            />
            <p>
              Unchained tokens account for a total of approximately
              3 decades of Unchained Managed Hosting.
            </p>
            <p>
              This allows us to secure the development and sustain
              maintenance of the Unchained Platform for years.
            </p>
          </div>
          <div className="chart">
            <h3 className="mb1">
              Allocation
            </h3>
            <Pie
              data={{
                labels: [
                  'Social Media & PR 20%',
                  'Engineering 50%',
                  'Business Administration 10%',
                  'Sales & Events 20%',
                ],
                datasets: [{
                  data: [20, 50, 10, 20],
                  backgroundColor: [
                    variables.darkGrayColor,
                    variables.secondaryColor,
                    variables.darkColor,
                    variables.grayColor,
                  ],
                }],
              }}
              options={pieOptions}
            />
          </div>
        </div>
      </section>
      <div className="dangerously" dangerouslySetInnerHTML={{ // eslint-disable-line
        __html: fundraiser.content,
      }}
      />
    </div>
    <style jsx>
      {`
      .charts {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
      }
      .chart {
        margin-top: 1.5em;
        margin-bottom: 4em;
        text-align: center;
        min-width: 30vw;
      }
    `}
    </style>
  </PageLayout>
);


export default connectApollo(compose(
  connectI18n,
  withCurrentUser,
  withRegion('fundraiser'),
  pure,
)(Fundraiser));
