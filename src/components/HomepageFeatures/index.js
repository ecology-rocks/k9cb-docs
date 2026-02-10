import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Smart Scaling',
    emoji: '📐',
    description: (
      <>
        Change ring size instantly or rearrange your course in a flash. Select, move, 
        and rotate entire groups of objects without breaking a sweat.
      </>
    ),
  },
  {
    title: 'Made For Nesting',
    emoji: '🪺',
    description: (
      <>
        Design your whole day in one sitting. Compare against any other map and 
        automatically calculate statistics within and between maps.
      </>
    ),
  },
  {
    title: 'Perfect Prints',
    emoji: '⚖️',
    description: (
      <>
        Generate fully legal maps with measurements, anchor bales, grid labels, 
        legends, and statistics. No more revising fifty times.
      </>
    ),
  },
];

function Feature({emoji, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <span className={styles.featureEmoji}>{emoji}</span>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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