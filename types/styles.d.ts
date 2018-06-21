declare module '*.css' {
  interface Styles {
    [className: string]: string;
  }

  const styles: Styles;

  export = styles;
}
