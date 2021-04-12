import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

function Component() {
  const data = useStaticQuery(graphql`
    {
      settingsYaml(slug: { eq: "global" }) {
        logo
      }
    }
  `);
  const global = data.settingsYaml;

  return (
    <div
      className="w-full"
      // eslint-disable-next-line
      dangerouslySetInnerHTML={{ __html: global.logo }}
    />
  );
}

Component.defaultProps = {};

Component.propTypes = {};

export default Component;
