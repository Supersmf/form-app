import React from 'react';
import './select-option.scss';

type SelectOptionType = {
  value: any;
  onPress?: () => void;
  avatar?: string;
};

const SelectOption = ({ value, onPress, avatar }: SelectOptionType) => (
  <div className="select-option" onClick={onPress}>
    {avatar && (
      <img className="select-option__avatar" src={avatar} alt="avatar" />
    )}
    {value}
  </div>
);

export default SelectOption;
