import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Fast, Free, and Open Source',
    description: (
      <>
        Empower your database management experience with our keyboard-driven client! Free and open source, cross-platform, and designed for power developers.
      </>
    ),
  },
  {
    title: 'Feature-Rich',
    description: (
      <>
        Enjoy multiple connections, query tabs, export options, a sleek editor, and a lightning-fast grid – all accessible with the ease of keyboard shortcuts.
      </>
    ),
  },
  {
    title: 'Customizable and Efficient',
    description: (
      <>
        Unleash efficiency, tailor UI themes, and explore complex data effortlessly. Elevate your workflow with quick actions, making it the ultimate choice for developers.
      </>
    ),
  },
];

function Feature({ title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3" className="text--warning">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
