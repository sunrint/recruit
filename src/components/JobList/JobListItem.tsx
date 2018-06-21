import * as React from 'react';
import Link from 'gatsby-link';
import { JobType } from '../../types';
import * as styles from './JobListItem.css';

const JobListItem: React.SFC<{
  node: JobType;
}> = ({
  node,
}) => (
  <Link
    className={styles['wrapper']}
    to={node.frontmatter.path}
  >{ node.frontmatter.title }</Link>
);

export default JobListItem;

export const jobMarkdownRemarkFields = graphql`
  fragment jobMarkdownRemarkFields on MarkdownRemark {
    id
    html
    frontmatter {
      date(formatString: "MMMM DD, YYYY")
      path
      title
    }
  }
`;
