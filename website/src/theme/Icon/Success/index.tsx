import type {ReactNode, SVGProps} from 'react';
import CheckIcon from '@site/static/img/libdoc-icons/check.svg';

export default function IconSuccess(props: SVGProps<SVGSVGElement>): ReactNode {
  return <CheckIcon {...props} />;
}
