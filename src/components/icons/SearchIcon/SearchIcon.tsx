import React from 'react';
import classNames from 'classnames';

import './search-icon.scss';

type SearchIconType = {
  className?: string;
};

const SearchIcon = ({ className }: SearchIconType) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    className={classNames('search-icon', className)}
    aria-hidden="true"
  >
    <path d="M 7.4 13.8 C 3.8 13.8 0.9 10.9 0.9 7.3 S 3.8 0.8 7.4 0.8 s 6.5 2.9 6.5 6.5 s -2.9 6.5 -6.5 6.5 Z m 0 -12 c -3 0 -5.5 2.5 -5.5 5.5 s 2.5 5.5 5.5 5.5 s 5.5 -2.5 5.5 -5.5 s -2.5 -5.5 -5.5 -5.5 Z m 11.8 17.4 c 0.2 -0.2 0.2 -0.5 0 -0.7 L 12.7 12 c -0.2 -0.2 -0.5 -0.2 -0.7 0 s -0.2 0.5 0 0.7 l 6.5 6.5 c 0.1 0.1 0.2 0.1 0.4 0.1 s 0.2 0 0.3 -0.1 Z" />
  </svg>
);

export default SearchIcon;
