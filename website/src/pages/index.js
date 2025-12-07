"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Home;
var clsx_1 = require("clsx");
var Link_1 = require("@docusaurus/Link");
var useDocusaurusContext_1 = require("@docusaurus/useDocusaurusContext");
var Layout_1 = require("@theme/Layout");
var HomepageFeatures_1 = require("@site/src/components/HomepageFeatures");
var Heading_1 = require("@theme/Heading");
var index_module_css_1 = require("./index.module.css");
function HomepageHeader() {
    var siteConfig = (0, useDocusaurusContext_1.default)().siteConfig;
    return (<header className={(0, clsx_1.default)('hero hero--primary', index_module_css_1.default.heroBanner)}>
      <div className="container">
        <Heading_1.default as="h1" className="hero__title">
          {siteConfig.title}
        </Heading_1.default>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={index_module_css_1.default.buttons}>
          <p>
            <Link_1.default className="button button--secondary button--lg" to="/docs/overview">
              Open the Syllabus Online
            </Link_1.default>
          </p>
        </div>
          <div className={index_module_css_1.default.buttons}>
            <Link_1.default className="button button--secondary button--lg" href="https://raw.githubusercontent.com/robotframework/robotframework-RFCP-syllabus/main/Syllabus.pdf">
              Download the Syllabus PDF
            </Link_1.default>
          </div>
      </div>
    </header>);
}
function Home() {
    var siteConfig = (0, useDocusaurusContext_1.default)().siteConfig;
    return (<Layout_1.default title={"RFCP Syllabus"} description="Syllabus Page for Robot Framework Certified Professional">
      <HomepageHeader />
      <main>
        <HomepageFeatures_1.default />
      </main>
    </Layout_1.default>);
}
