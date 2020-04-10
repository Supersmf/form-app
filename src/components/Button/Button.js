import React from 'react';
import classNames from 'classnames';

import './button.scss';

type ButtonType = {
  name: string,
  onClick: () => void,
  isPrimary?: string,
};

const Button = ({ name, onClick, isPrimary }: ButtonType) => (
  <button
    className={classNames('button', isPrimary && 'button__primary')}
    onClick={onClick}
  >
    {name}
  </button>
);

export default Button;
