import * as React from 'react';
import Helmet from 'react-helmet';
import { JobType } from '../types';

const JobTemplate: React.SFC<{
  data: {
    markdownRemark: JobType;
  };
}> = ({
  data: {
    markdownRemark: job,
  },
}) => (
  <div className='post-container'>
    <Helmet title={`${job.frontmatter.title}`} />
    <div className='job'>
      <div className='job-content' dangerouslySetInnerHTML={{ __html: job.html }} />
    </div>
  </div>
);

export default JobTemplate;

export const pageQuery = graphql`
  query JobByPath($path: String!) {
    markdownRemark(
      frontmatter: {
        path: {
          eq: $path
        }
      }
    ) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;
