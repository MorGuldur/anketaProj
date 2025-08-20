import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  saveForm,
  selectIsFormValid,
} from '../../app/store/anketaFormReducer/anketaFormSlice';

import * as S from './Anketa.styles';
import { InputField } from './components/InputField/InputField';
import { ProgressIndicator } from './components/ProgressIndicator/ProgressIndicator';
import { INPUT_FIELD_TYPES } from './Anketa.conatants';

export const Anketa = () => {
  const rootDispatch = useDispatch();

  const isFormValid = useSelector(selectIsFormValid);

  const handleSave = () => {
    if (isFormValid) {
      rootDispatch(saveForm());
      alert('Анкета успешно сохранена!');
    }
  };

  return (
    <S.Container>
      <h1>Анкета</h1>

      <ProgressIndicator />

      <S.FormSection>
        <S.SectionTitle>Личная информация</S.SectionTitle>
        <InputField
          section={INPUT_FIELD_TYPES.PERSONAL_INFO}
          field='firstName'
          label='Имя'
          placeholder='Введите ваше имя'
        />
        <InputField
          section={INPUT_FIELD_TYPES.PERSONAL_INFO}
          field='lastName'
          label='Фамилия'
          placeholder='Введите вашу фамилию'
        />
        <InputField
          section={INPUT_FIELD_TYPES.PERSONAL_INFO}
          field='middleName'
          label='Отчество'
          placeholder='Введите ваше отчество'
        />
        <InputField
          section={INPUT_FIELD_TYPES.PERSONAL_INFO}
          field='birthDate'
          label='Дата рождения'
          type='date'
        />
      </S.FormSection>

      <S.FormSection>
        <S.SectionTitle>Контактные данные</S.SectionTitle>
        <InputField
          section={INPUT_FIELD_TYPES.CONTACT_INFO}
          field='phone'
          label='Телефон'
          type='tel'
          placeholder='+7 (999) 999-99-99'
        />
        <InputField
          section={INPUT_FIELD_TYPES.CONTACT_INFO}
          field='email'
          label='Email'
          type='email'
          placeholder='example@mail.com'
        />
      </S.FormSection>

      <S.FormSection>
        <S.SectionTitle>Адрес</S.SectionTitle>
        <InputField
          section={INPUT_FIELD_TYPES.ADDRES_INFO}
          field='city'
          label='Город'
          placeholder='Введите ваш город'
        />
      </S.FormSection>

      <S.SaveButton onClick={handleSave} disabled={!isFormValid}>
        Сохранить
      </S.SaveButton>
    </S.Container>
  );
};
