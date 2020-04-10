import React, { useState, useCallback, useEffect, ChangeEvent } from 'react';
import SelectField from './SelectField';
import useToggle from '../../common/hooks/useToggle';
import useComponentUnVisible from '../../common/hooks/useComponentUnVisible';
import { SelectType } from '../../common/types';

type SelectFieldContainerType = {
  options: Array<SelectType>;
  placeholder: string;
  value: any;
  isSearch?: boolean;
  title?: string;
  isAvatarField?: boolean;
};

const SelectFieldContainer = ({
  options: initialOptions,
  placeholder,
  value: initialValue,
  isSearch,
  isAvatarField,
  title,
}: SelectFieldContainerType) => {
  const [options, setOptions] = useState<any>(initialOptions || []);
  const [value, setValue] = useState(initialValue);
  const {
    isToggledOn: isFieldOpen,
    toggle: toggleIsFieldOpen,
    setToggleOff: unsetIsFieldOpen,
  } = useToggle();
  const [searchBy, setSearchBy] = useState('');
  const { ref } = useComponentUnVisible(unsetIsFieldOpen);

  const handleOptionPress = useCallback(
    (currentId) => {
      setValue(options.find(({ id }: SelectType) => currentId === id));
      unsetIsFieldOpen();
    },
    [options, unsetIsFieldOpen]
  );

  const handleSearchChange = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLInputElement>) =>
      setSearchBy(value),
    []
  );

  useEffect(() => {
    const regex = new RegExp(`^${searchBy}`, 'i');
    setOptions(
      initialOptions.filter(({ name }: SelectType) => regex.test(name))
    );
  }, [searchBy, initialOptions]);

  return (
    <SelectField
      fieldRef={ref}
      value={value}
      options={options}
      placeholder={placeholder}
      title={title}
      isSearch={isSearch}
      isFieldOpen={isFieldOpen}
      isAvatarField={isAvatarField}
      searchBy={searchBy}
      onOptionPress={handleOptionPress}
      onFieldClick={toggleIsFieldOpen}
      onSearchChange={handleSearchChange}
    />
  );
};

export default SelectFieldContainer;
