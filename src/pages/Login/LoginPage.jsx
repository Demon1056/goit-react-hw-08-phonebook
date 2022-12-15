import { Formik } from 'formik';
import * as yup from 'yup';
import {
  FormStyles,
  FieldStyles,
  ErrorMessageStyled,
} from 'components/Form/ProjectForm.styled';

const textValid = /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi;

const schema = yup.object().shape({
  email: yup
    .string()
    .required('Sorry, but Email is a required field')
    .email('Please write your real email (Example: MAILBOX@SUBDOMAIN.COM)'),
  password: yup
    .string()
    .length(8, ' Sorry, but the password should consist of 8 symbols')
    .matches(textValid, 'Password can only contain Latin letters.')
    .required('Sorry, but Password is a required field'),
});

const LoginPage = () => {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      // onSubmit={(e, actions) => updateContacts(e, actions)}
      validationSchema={schema}
    >
      <FormStyles>
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
        <button type="submit">Login</button>
      </FormStyles>
    </Formik>
  );
};
export default LoginPage;
