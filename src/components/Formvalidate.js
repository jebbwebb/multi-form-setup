export default function validateInfo(values) {
  let errors = {};
  if (!values.fullname.trim()) {
    errors.fullname = 'This field is required';
  }

  if (!values.emailAddress) {
    errors.emailAddress = 'This field is required';
  } else if (!/\S+@\S+\.\S+/i.test(values.emailAddress)) {
    errors.emailAddress = 'This field is required';
  }

  if (!values.phoneNumber) {
    errors.phoneNumber = 'This field is required';
  } else if (values.phoneNumber.length < 10) {
    errors.phoneNumber = 'This field is required';
  }
  return errors;
}
