import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  setTouched,
  updateField,
} from '../../../../app/store/anketaFormReducer/anketaFormSlice';

import * as S from './InputField.styles';

export const InputField = ({
  section,
  field,
  label,
  type = 'text',
  placeholder,
}) => {
  const rootDispatch = useDispatch();
  const value = useSelector(state => state.anketaForm[section][field]);
  const error = useSelector(state => state.anketaForm.errors[field]);
  const touched = useSelector(state => state.anketaForm.touched[field]);

  const handleChange = e => {
    rootDispatch(updateField({ section, field, value: e.target.value }));
  };

  const handleFocus = () => {
    rootDispatch(setTouched({ field, touched: true }));
  };

  const handleBlur = () => {
    rootDispatch(setTouched({ field, touched: false }));
  };

  return (
    <S.InputGroup>
      <S.Label htmlFor={field}>{label}</S.Label>
      <S.Input
        id={field}
        type={type}
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        hasError={error && !touched}
        placeholder={placeholder}
      />
      {error && !touched && (
        <S.ErrorText>Поле обязательно для заполнения</S.ErrorText>
      )}
    </S.InputGroup>
  );
};
