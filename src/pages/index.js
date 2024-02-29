import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img src="/img/icon.png" alt="Noir logo" width={150} height={'auto'} />
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/getting-started">
            Learn more
          </Link>
          <Link className="button button--warning button--lg" to="https://github.com/invm/noir">
            Star on GitHub
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout description="Modern database management client">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '32px 0 32px 0',
        }}>
        <Heading as="h2" className="text--warning">
          See Noir in action
        </Heading>
        <div style={{ display: 'flex', justifyContent: 'center', padding: '32px 16px 32px 16px' }}>
          <video style={{ width: 800, maxWidth: '100%' }} autoPlay={false} height="auto" controls>
            <source src="/noir.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </Layout>
  );
}
