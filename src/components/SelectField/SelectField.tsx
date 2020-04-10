import React, { ChangeEvent } from 'react';
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';
import SelectOption from './SelectOption';
import ArrowIcon from '../icons/ArrowIcon';
import SearchIcon from '../icons/SearchIcon';
import { SelectType } from '../../common/types';

import './select-field.scss';

type SelectFieldType = {
  options: Array<SelectType>;
  placeholder: string;
  value: SelectType | undefined;
  isSearch?: boolean;
  title?: string;
  searchBy: string;
  isFieldOpen: boolean;
  isAvatarField?: boolean;
  fieldRef: any;
  onOptionPress: (id: number) => void;
  onFieldClick: () => void;
  onSearchChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SelectField = ({
  options,
  placeholder,
  value,
  searchBy,
  isSearch,
  title,
  isFieldOpen,
  isAvatarField,
  fieldRef,
  onOptionPress,
  onFieldClick,
  onSearchChange,
}: SelectFieldType) => (
  <div className="select-field" ref={fieldRef}>
    <div
      onClick={onFieldClick}
      className={classNames(
        'select-field__field',
        !value && 'select-field__field_casper-text'
      )}
    >
      <SelectOption
        value={value?.name || placeholder}
        avatar={isAvatarField ? value?.avatar : ''}
      />
      <ArrowIcon
        className="select-field__arrow-icon"
        isDownArrow={isFieldOpen}
      />
    </div>
    <CSSTransition
      in={isFieldOpen}
      timeout={300}
      classNames="select-field__transition"
      unmountOnExit
      appear
    >
      <div className="select-field__options-container">
        {isSearch ? (
          <div className="select-field__search-container">
            <SearchIcon className="select-field__search-icon" />
            <input
              className="select-field__search-field"
              value={searchBy}
              onChange={onSearchChange}
            />
          </div>
        ) : (
          <div className="select-field__title">{title}</div>
        )}
        {options.map(({ id, name, avatar }: SelectType) => (
          <SelectOption
            key={id}
            value={name}
            avatar={isAvatarField ? avatar : ''}
            onPress={() => onOptionPress(id)}
          />
        ))}
      </div>
    </CSSTransition>
  </div>
);

export default SelectField;
