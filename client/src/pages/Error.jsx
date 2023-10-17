import styled from "styled-components";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <Wrapper>
      <div className="center_error">
        <h3>OOPS! </h3>
        <p>This page does not exist return to homepage</p>
        <Link to="/" className="btn btn_primary">
          Go Home
        </Link>
      </div>
    </Wrapper>
  );
};

export default Error;

const Wrapper = styled.section`
  display: grid;
  place-items: center;
  height: 80vh;
  .center_error {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }
  h3 {
    color: #b110b1;
    font-size: 40px;
  }
  p {
    font-size: 25px;
    color: #580505;
  }
  .btn_primary {
    width: fit-content;
  }
`;
