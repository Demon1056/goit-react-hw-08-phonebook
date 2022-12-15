import { Formik } from 'formik';
import * as yup from 'yup';
import {
  FormStyles,
  FieldStyles,
  ErrorMessageStyled,
} from './RegisterPage.styled';
const textValid = /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi;
const emailValid = /^(@)$/gi;
const schema = yup.object().shape({
  name: yup
    .string()
    .matches(textValid, 'Name can only contain Latin letters.')
    .required('Sorry, but Name is a required field'),
  email: yup
    .string()
    // .matches(phoneRegExp, 'Phone number is not valid')
    .required('Sorry, but Email is a required field')
    .matches(emailValid, 'Email can only contain Latin letters.'),
  password: yup
    .string()
    .length(8, ' Sorry, but the password should consist of 8 symbols')
    .matches(textValid, 'Password can only contain Latin letters.')
    .required('Sorry, but Password is a required field'),
});

const RegisterPage = () => {
  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      // onSubmit={(e, actions) => updateContacts(e, actions)}
      validationSchema={schema}
    >
      <FormStyles>
        <label>
          Name
          <FieldStyles type="text" name="name" />
        </label>{' '}
        <ErrorMessageStyled name="name" component="span" />
        <label>
          Email
          <FieldStyles type="email" name="email" />
        </label>
        <ErrorMessageStyled name="email" component="span" />
        <label>
          Password
          <FieldStyles type="password" name="password" />
        </label>
        <ErrorMessageStyled name="password" component="span" />
        <button type="submit">Register</button>
      </FormStyles>
    </Formik>
  );
};
export default RegisterPage;

// import { useSelector, useDispatch } from 'react-redux';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import { addContact } from 'redux/contacts/operations';
// import { getContacts } from 'redux/contacts/selectors';

// export const ContactForm = () => {
//   const contacts = useSelector(getContacts);

//   const dispatch = useDispatch();

//   const updateContacts = (values, actions) => {
//     if (contacts.find(({ name }) => name === values.name)) {
//       Notify.warning(`${values.name} is already in contacts`);
//       actions.resetForm();
//       return;
//     }
//     dispatch(addContact(values));
//     actions.resetForm();
//   };

//   return (
//     <Formik
//       initialValues={{ name: '', phone: '' }}
//       onSubmit={(e, actions) => updateContacts(e, actions)}
//       validationSchema={schema}
//     >
//       <FormStyles>
//         <label>
//           Name
//           <FieldStyles type="text" name="name" />
//         </label>{' '}
//         <ErrorMessageStyled name="name" component="span" />
//         <label>
//           Number
//           <FieldStyles type="tel" name="phone" />
//         </label>
//         <ErrorMessageStyled name="phone" component="span" />
//         <button type="submit">Add contact</button>
//       </FormStyles>
//     </Formik>
//   );
// };
