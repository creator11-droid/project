import styled from "styled-components";
import { useNavigation } from "react-router-dom";
const SubmitBtn = ({ text }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <button type="submit" className="btn" disabled={isSubmitting}>
      {isSubmitting ? (
        <>
          <span className="submitting">Sending</span>
        </>
      ) : (
        text || "Submit"
      )}
    </button>
  );
};
export default SubmitBtn;
