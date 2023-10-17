import { Link, Form } from "react-router-dom";
import styled from "styled-components";
import { FormInput, SubmitBtn } from "../components";

const SignIn = () => {
  return (
    <Wrapper>
      <Form method="post" className="form">
        <h4>Login</h4>
        <FormInput name="email" type="text" label="email" />
        <FormInput name="password" type="password" label="password" />
        <SubmitBtn text="login" />
      </Form>
    </Wrapper>
  );
};
export default SignIn;
const Wrapper = styled.section`
  display: grid;
  place-items: center;
  height: 80vh;
  h4 {
    color: var(--primary-500);
  }
`;
