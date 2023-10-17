import styled from "styled-components";
import { FormInput, SubmitBtn } from "../components";
import { Form, Link, redirect } from "react-router-dom";
import { customFetch } from "../utils";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);

  try {
    const response = await customFetch.post("/register", data);
    toast.success("account created successfully");
    return redirect("/sign-in");
  } catch (error) {
    const errorMessage = error?.response?.data?.message;
    toast.error(errorMessage);
    return null;
  }
};

const SignUp = () => {
  return (
    <Wrapper>
      <Form method="post" className="form">
        <h4>Login</h4>
        <FormInput name="userName" type="text" label="name" />
        <FormInput name="email" type="text" label="email" />
        <FormInput name="password" type="password" label="password" />
        <SubmitBtn text="Register" />
      </Form>
    </Wrapper>
  );
};
export default SignUp;

const Wrapper = styled.section`
  display: grid;
  place-items: center;
  height: 80vh;
  h4 {
    color: var(--primary-500);
  }
`;
