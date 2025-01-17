import React, {type ReactNode} from 'react';
import Admonition from '@theme-original/Admonition';
import RFIcon from '@site/static/img/RF.svg';
import K1Icon from '@site/static/img/K1.svg';
import K2Icon from '@site/static/img/K2.svg';
import K3Icon from '@site/static/img/K3.svg';

import type AdmonitionType from   '@theme/Admonition';
import type {WrapperProps} from '@docusaurus/types';

type Props = WrapperProps<typeof AdmonitionType>;

export default function AdmonitionWrapper(props: Props): ReactNode {
  console.log('AdmonitionWrapper', props);
  if (props.type === 'lo') {
    return (
      <>
        <Admonition icon={<RFIcon />} {...props} />
      </>
    );
  }
  if (props.type === 'K1') {
    const newProps = {...props, type: 'note'};
    return (
      <>
        <Admonition icon={<K1Icon />} {...newProps} />
      </>
    );
  }
  if (props.type === 'K2') {
    const newProps = {...props, type: 'tip'};
    return (
      <>
        <Admonition icon={<K2Icon />}   {...newProps} />
      </>
    );
  }
  if (props.type === 'K3') {
    const newProps = {...props, type: 'warning'};
    return (
      <>
        <Admonition icon={<K3Icon />} {...newProps} />
      </>
    );
  }
  return (
    <>
      <Admonition {...props} />
    </>
  );
}
