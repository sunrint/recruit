export interface JobType {
  id: string;
  html: string;
  frontmatter: {
    path: string;
    title: string;
  };
}
