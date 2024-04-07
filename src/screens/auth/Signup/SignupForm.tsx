import { emailRegex } from "../../../utils/Regex";

// import { validateEmail } from "../../utils/Email_Password_Validation";

interface Values {
    email: string;
    confirmEmail: string;
    password: string;
  }
export const SignupForm = (
  values:Values,
  setShowError: (value: boolean) => void,
  setError: (error: string) => void

) => {
    if (!values?.email) {
        setError("Email is required");
        setShowError(true);
        setTimeout(() => {
          setShowError(false);
        }, 4000);
  
        return;
      }
      let isValidEmail = emailRegex?.test(values.email);
      if (!isValidEmail) {
        setError("Invalid email address");
        setShowError(true);
        setTimeout(() => {
          setShowError(false);
        }, 4000);
  
        return;
      }
      if (!values.confirmEmail) {
        setError("Confirm Email is required");
        setShowError(true);
        setTimeout(() => {
          setShowError(false);
        }, 4000);
  
        return;
      }
      if (values?.confirmEmail != values?.email) {
        setError("Confirm Email not match");
        setShowError(true);
        setTimeout(() => {
          setShowError(false);
        }, 4000);
  
        return;
      }
      if (!values?.password) {
        setError("password is required");
        setShowError(true);
        setTimeout(() => {
          setShowError(false);
        }, 4000);
        return;
      }
      if (values?.password.length < 6) {
        setError("password At least 6 characters");
        setShowError(true);
        setTimeout(() => {
          setShowError(false);
        }, 4000);
        return;
      }



  return true;
};
