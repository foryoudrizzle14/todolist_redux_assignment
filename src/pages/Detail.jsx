import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const Detail = () => {
  //변수 및 상수는 순서대로 읽어지므로 우선 사용할 상수를 선언함
  const { id } = useParams();
  //스토어에서 필요한 데이터를 조회함
  const todos = useSelector((state) => state.todos.todos);
  // 조회한 데이터에서 가져온 id와 일치하는 데이터를 찾아 저장함
  const todo = todos.find((todo) => todo.id === id);
  const navigate = useNavigate();
 
  return (
    <StContainer>
      <StDialog>
        <div>
          <StDialogHeader>
            <div>ID :{todo.id}</div>
            <StButton
              borderColor="#ddd"
              onClick={() => {
                navigate("/");
              }}
            >
              이전으로
            </StButton>
          </StDialogHeader>
          <StTitle>{todo.title}</StTitle>
          <StBody>{todo.body}</StBody>
        </div>
      </StDialog>
    </StContainer>
  );
};

export default Detail;

const StContainer = styled.div`
  border: 2px solid #eee;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StDialog = styled.div`
  width: 600px;
  height: 400px;
  border: 1px solid #eee;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StDialogHeader = styled.div`
  display: flex;
  height: 80px;
  justify-content: space-between;
  padding: 0 24px;
  align-items: center;
`;

const StTitle = styled.h1`
  padding: 0 24px;
`;

const StBody = styled.main`
  padding: 0 24px;
`;

const StButton = styled.button`
  border: 1px solid ${({ borderColor }) => borderColor};
  height: 40px;
  width: 120px;
  background-color: #fff;
  border-radius: 12px;
  cursor: pointer;
`;