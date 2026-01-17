declare module '@theme/Heading' {
  import type {ComponentType, ReactNode, ElementType} from 'react';

  type HeadingProps = {
    as?: ElementType;
    className?: string;
    id?: string;
    children?: ReactNode;
  };

  const Heading: ComponentType<HeadingProps>;
  export default Heading;
}

declare module '@theme/Admonition' {
  import type {ComponentType, ReactNode} from 'react';

  export type AdmonitionProps = {
    readonly type?: string;
    readonly title?: ReactNode;
    readonly icon?: ReactNode;
    children?: ReactNode;
  };

  const Admonition: ComponentType<AdmonitionProps>;
  export default Admonition;
}

declare module '@theme/Layout' {
  import type {ComponentType, ReactNode} from 'react';

  export interface Props {
    children?: ReactNode;
    title?: string;
    description?: string;
    wrapperClassName?: string;
    noFooter?: boolean;
    noNavbar?: boolean;
  }

  const Layout: ComponentType<Props>;
  export default Layout;
}
