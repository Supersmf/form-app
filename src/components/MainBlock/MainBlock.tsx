import React from 'react';
import TextField from '../TextField';
import SelectField from '../SelectField';
import { SelectType } from '../../common/types';
// @ts-ignore
import Button from '../Button';

import './main-block.scss';

type MainBlockType = {
  buyers: Array<SelectType>;
  users: Array<SelectType>;
};

const MainBlock = ({ buyers, users }: MainBlockType) => (
  <div className="main-block">
    <SelectField
      options={buyers}
      placeholder="Select buyer"
      isSearch
      value=""
    />
    <SelectField
      options={users}
      placeholder="Select Users"
      isAvatarField
      title="All users"
      value=""
    />
    <TextField placeholder="Text field" />
    <TextField placeholder="Text field" />
    <TextField placeholder="Text field" />
    <div className="main-block__button-bar">
      <Button name="Reset" />
      <Button name="Filter" isPrimary />
    </div>
  </div>
);

export default MainBlock;
