"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = HomepageFeatures;
var clsx_1 = require("clsx");
var Heading_1 = require("@theme/Heading");
var styles_module_css_1 = require("./styles.module.css");
var Link_1 = require("@docusaurus/Link");
var FeatureList = [
    {
        title: '0. About the Syllabus',
        description: (<>
        This chapter provides an overview of the Robot Framework® Certified Professional (RFCP®) syllabus,
        detailing the course structure, learning objectives, and the foundational knowledge required for certification.
      </>),
        link: '/docs/overview',
    },
    {
        title: '1. Introduction to Robot Framework',
        description: (<>
        This chapter introduces Robot Framework, detailing its primary use cases,
        its architecture, core components, specification styles, and introduces the Robot Framework Foundation.
      </>),
        link: '/docs/chapter-01/overview',
    },
    {
        title: '2. Getting Started with Robot Framework',
        description: (<>
        This chapter introduces the foundational concepts of Robot Framework,
        execution processes, the utilization of libraries and resource files,
        how to read keyword documentation, and how to write first tests.
      </>),
        link: '/docs/chapter-02/overview',
    },
    {
        title: '3. Keyword Design, Variables, and Resource Files',
        description: (<>
        This chapter delves into the essential components of
        Robot Framework, such as **Variables**, **User Keywords**, **Resource Files**,
        and Data-Driven Testing.
      </>),
        link: '/docs/chapter-03/overview',
    },
    {
        title: '4. Advanced Structuring and Execution',
        description: (<>
        This chapter delves into advanced techniques for structuring
        and executing Robot Framework, explaining the use of
         **Setups** and **Teardowns**, and the application of tags
         to efficiently filter and control execution.
      </>),
        link: '/docs/chapter-04/overview',
    },
    {
        title: '5. Exploring Advanced Constructs',
        description: (<>
        This chapter introduces advanced constructs in Robot Framework,
        such as advanced variable handling and control structures like IF and FOR statements.
      </>),
        link: '/docs/chapter-05/overview',
    }
];
function Feature(_a) {
    var title = _a.title, description = _a.description, link = _a.link;
    return (<Link_1.default to={link} className={(0, clsx_1.default)('homepage-card')}>
        <div className="card-content text--center padding-horiz--md">
            <Heading_1.default as="h2">{title}</Heading_1.default>
          <p>{description}</p>
        </div>
      </Link_1.default>);
}
function HomepageFeatures() {
    return (<section className={styles_module_css_1.default.features}>
      <div className="container">
        <div className="section-content">
          {FeatureList.map(function (props, idx) { return (<Feature key={idx} {...props}/>); })}
        </div>
      </div>
    </section>);
}
