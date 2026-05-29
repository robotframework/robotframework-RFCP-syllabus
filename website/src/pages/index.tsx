import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';
import versions from '../../versions.json';

const currentVersion = versions[0];

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <p>
            <Link
              className="button button--secondary button--lg"
              to="/docs/overview">
              Open the Syllabus Online
            </Link>
          </p>
        </div>
          <div className={styles.buttons}>
            <a
              className="button button--secondary button--lg"
              href={useBaseUrl(`/pdfs/RFCP-Syllabus-${currentVersion}.pdf`)}
              download>
              Download the Syllabus PDF ({currentVersion})
            </a>
          </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`RFCP Syllabus`}
      description="Syllabus Page for Robot Framework Certified Professional">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
