import React from 'react';
import classNames from 'classnames';

import './arrow-icon.scss';

type ArrowIconType = {
  className?: string;
  isDownArrow?: boolean;
};

const ArrowIcon = ({ className, isDownArrow }: ArrowIconType) => (
  <div className={classNames('arrow', isDownArrow && 'arrow_down', className)}>
    <svg xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 20 20"
        d="M1 0l5 5 5-5"
      />
    </svg>
  </div>
);

export default ArrowIcon;
