import * as React from 'react';
import { JobType } from '../../types';
import JobListItem from './JobListItem';
import * as styles from './JobList.css';

const JobList: React.SFC<{
  nodes: JobType[];
}> = ({
  nodes,
}) => (
  <ul className={styles['wrapper']}>
    {nodes.map(node =>
      <li key={node.id}>
        <JobListItem node={node} />
      </li>,
    )}
  </ul>
);

export default JobList;
