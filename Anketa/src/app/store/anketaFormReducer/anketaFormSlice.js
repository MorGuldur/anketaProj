import { createSlice } from '@reduxjs/toolkit';

import { initialState } from './initialState';
import {
  ADDRES_INFO_IELD_TYPES,
  CONTACT_INFO_IELD_TYPES,
  INPUT_FIELD_TYPES,
  PERSONAL_INFO_IELD_TYPES,
} from '../../../features/Anketa/Anketa.conatants';

export const anketaFormSlice = createSlice({
  name: 'anketaForm',
  initialState,
  reducers: {
    updateField: (state, action) => {
      const { section, field, value } = action.payload;

      state[section][field] = value;

      if (state.touched[field]) {
        state.errors[field] = !value;
      }
    },
    setTouched: (state, action) => {
      const { field, touched } = action.payload;
      state.touched[field] = touched;

      if (!touched) {
        state.errors[field] = !state[getSectionByField(field)][field];
      }
    },
    saveForm: state => {
      const formData = {
        personalInfo: { ...state.personalInfo },
        contactInfo: { ...state.contactInfo },
        addressInfo: { ...state.addressInfo },
        timestamp: new Date().toISOString(),
      };
      state.savedForms.push(formData);
    },
    resetForm: state => {
      state.personalInfo = initialState.personalInfo;
      state.contactInfo = initialState.contactInfo;
      state.addressInfo = initialState.addressInfo;
      state.errors = initialState.errors;
      state.touched = initialState.touched;
    },
  },
});

const getSectionByField = field => {
  if (PERSONAL_INFO_IELD_TYPES.includes(field)) {
    return INPUT_FIELD_TYPES.PERSONAL_INFO;
  } else if (CONTACT_INFO_IELD_TYPES.includes(field)) {
    return INPUT_FIELD_TYPES.CONTACT_INFO;
  } else if (ADDRES_INFO_IELD_TYPES.includes(field)) {
    return INPUT_FIELD_TYPES.ADDRES_INFO;
  }
  return INPUT_FIELD_TYPES.PERSONAL_INFO;
};

export const { updateField, setTouched, saveForm, resetForm } =
  anketaFormSlice.actions;

export const selectFormData = state => state.anketaForm;

export const selectProgress = state => {
  const form = state.anketaForm;
  const totalFields = 7;
  const filledFields =
    Object.values(form.personalInfo).filter(Boolean).length +
    Object.values(form.contactInfo).filter(Boolean).length +
    Object.values(form.addressInfo).filter(Boolean).length;

  return (filledFields / totalFields) * 100;
};

export const selectErrorCount = state => {
  return Object.values(state.anketaForm.errors).filter(error => error).length;
};

export const selectIsFormValid = state => {
  const form = state.anketaForm;

  return (
    Object.values(form.personalInfo).every(Boolean) &&
    Object.values(form.contactInfo).every(Boolean) &&
    Object.values(form.addressInfo).every(Boolean) &&
    Object.values(form.errors).every(error => !error)
  );
};

export default anketaFormSlice.reducer;
