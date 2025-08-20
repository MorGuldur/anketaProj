export const initialState = {
  personalInfo: {
    firstName: '',
    lastName: '',
    middleName: '',
    birthDate: '',
  },
  contactInfo: {
    phone: '',
    email: '',
  },
  addressInfo: {
    city: '',
  },
  errors: {
    firstName: false,
    lastName: false,
    middleName: false,
    birthDate: false,
    phone: false,
    email: false,
    city: false,
  },
  touched: {
    firstName: false,
    lastName: false,
    middleName: false,
    birthDate: false,
    phone: false,
    email: false,
    city: false,
  },
  savedForms: [],
};
