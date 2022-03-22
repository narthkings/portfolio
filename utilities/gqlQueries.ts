import { gql } from "@apollo/client";

const SUBMIT_CONTACT_FORM = gql`
  mutation SaveContactForm($name:String, $email:String, $message:String) {
    createcontact(data:{name:$name, email:$email, message:$message}) {
      name
      email
      message
    }
  }
`;

export { SUBMIT_CONTACT_FORM };