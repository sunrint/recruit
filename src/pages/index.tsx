import * as React from 'react';
import JobList from '../components/JobList';
import { JobType } from '../types';

const IndexPage: React.SFC<{
  data: {
    allMarkdownRemark: {
      edges: {
        node: JobType;
      }[];
    };
  };
}> = ({
  data: {
    allMarkdownRemark: {
      edges,
    },
  },
}) => (
  <div>
    <JobList
      nodes={edges.map(edge => edge.node)}
    />
  </div>
);

export default IndexPage;

export const pageQuery = graphql`
  query IndexPage {
    allMarkdownRemark(
      limit: 1000
    ) {
      edges {
        node {
          ...jobMarkdownRemarkFields
        }
      }
      totalCount
    }
  }
`;
