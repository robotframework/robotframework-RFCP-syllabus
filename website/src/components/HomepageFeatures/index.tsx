import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

type FeatureItem = {
  title: string;
  description: ReactNode;
  link: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: '0. About the Syllabus',
    description: (
      <>
        This chapter provides an overview of the Robot Framework Certified Professional® (RFCP) syllabus,
        detailing the course structure, learning objectives, and the foundational knowledge required for certification.
      </>
    ),
    link: '/docs/overview',
  },
  {
    title: '1. Introduction to Robot Framework',
    description: (
      <>
        This chapter introduces Robot Framework, detailing its primary use cases,
        its architecture, core components, specification styles, and introduces the Robot Framework Foundation.
      </>
    ),
    link: '/docs/chapter-01/overview',
  },
  {
    title: '2. Getting Started with Robot Framework',
    description: (
      <>
        This chapter introduces the foundational concepts of Robot Framework,
        execution processes, the utilization of libraries and resource files,
        how to read keyword documentation, and how to write first tests.
      </>
    ),
    link: '/docs/chapter-02/overview',
  },
  {
    title: '3. Keyword Design, Variables, and Resource Files',
    description: (
      <>
        This chapter delves into the essential components of
        Robot Framework, such as **Variables**, **User Keywords**, **Resource Files**,
        and Data-Driven Testing.
      </>
    ),
    link: '/docs/chapter-03/overview',
  },
  {
    title: '4. Advanced Structuring and Execution',
    description: (
      <>
        This chapter delves into advanced techniques for structuring
        and executing Robot Framework, explaining the use of
         **Setups** and **Teardowns**, and the application of tags
         to efficiently filter and control execution.
      </>
    ),
    link: '/docs/chapter-04/overview',
  },
  {
    title: '5. Exploring Advanced Constructs',
    description: (
      <>
        This chapter introduces advanced constructs in Robot Framework,
        such as advanced variable handling and control structures like IF and FOR statements.
      </>
    ),
    link: '/docs/chapter-05/overview',
  }
];

function Feature({title, description, link}: FeatureItem) {
  return (
      <Link to={link} className={clsx('homepage-card')}>
        <div className="card-content text--center padding-horiz--md">
            <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </Link>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="section-content">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
