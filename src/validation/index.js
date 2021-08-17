import * as Yup from 'yup';
import { camelCaseToCapitalize } from 'utils/index';

export const genrateSchema = param => {
  const labels = Object.keys(param);
  const SUPPORTED_FORMATS = [
    'image/jpg',
    'image/jpeg',
    'image/gif',
    'image/png'
  ];
  const schema = {};
  labels.map(label => {
    if (label.indexOf('email') !== -1)
      schema[label] = Yup.string()
        .email(`${camelCaseToCapitalize(label)} must be valid`)
        .required(`${camelCaseToCapitalize(label)} is required`);
    else if (label.indexOf('languageId') !== -1);
    else if (label.indexOf('password') >= 0 || label.indexOf('Password') >= 0)
      schema[label] = Yup.string()
        .min(6, `${camelCaseToCapitalize(label)} must be at least 6 characters`)
        .required(`${camelCaseToCapitalize(label)} is required`);
    else if (label.indexOf('confirm') >= 0)
      schema[label] = Yup.string()
        .oneOf(
          [Yup.ref('password'), null],
          'Password is not matching with Confirm password'
        )
        .required(`Confirm Password Required`);
    else if (label.indexOf('fullName') !== -1)
      schema[label] = Yup.string()
        .max(25, 'Maximum 25 letters')
        .matches(
          // /^([^0-9]*)$/,
          /^[aA-zZ\s]+$/,
          'Only alphabets are allowed'
        );
    else if (label.indexOf('name') !== -1)
      schema[label] = Yup.string()
        .max(25, 'Maximum 25 letters')
        .trim()
        .matches(
          // /^([^0-9]*)$/,
          /^[aA-zZ\s]+$/,
          'Only alphabets are allowed'
        )
        .required(`${camelCaseToCapitalize(label)} is required`);
    else if (label.indexOf('phoneNumber') !== -1)
      schema[label] = Yup.string()
        .matches(/^[0-9]+$/, 'Must be only digits')
        .min(4, 'Minimum 4 digits')
        .max(15, 'Maximum 15 digits');
    else if (label.indexOf('zip') !== -1)
      schema[label] = Yup.string()
        .matches(/^[0-9]+$/, 'Must be only digits')
        .required(`${camelCaseToCapitalize(label)} is required`)
        .min(5, 'Must be exactly 5 digits')
        .max(5, 'Must be exactly 5 digits');
    else
      schema[label] = Yup.string().required(
        `${camelCaseToCapitalize(label)} is required`
      );
  });
  return Yup.object().shape(schema);
};
