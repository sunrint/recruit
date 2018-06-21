import * as React from 'react';
import { JobType } from '../../types';
import JobListItem from './JobListItem';
import * as styles from './JobList.css';

const JobList: React.SFC<{
  nodes: JobType[];
}> = ({
  nodes,
}) => (
  <div className={styles['wrapper']}>
    {nodes.map(node =>
      <JobListItem
        key={node.id}
        node={node}
      />,
    )}
  </div>
);

export default JobList;
