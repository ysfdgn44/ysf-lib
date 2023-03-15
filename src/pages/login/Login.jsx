import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FormContainer,
  Header,
  LoginContainer,
  StyledButton,
  StyledForm,
  StyledInput,
} from "./Login.style";

const Login = ({ setCurrentUser }) => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentUser("yusuf");
    sessionStorage.setItem("user", "yusuf");
    navigate("/detail/:id");
  };
  return (
    <LoginContainer>
      <FormContainer>
        <Header>Login here</Header>
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput type="text" placeholder="username" required />
          <StyledInput type="password" placeholder="Password" required />
          <StyledButton type="submit">login</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
