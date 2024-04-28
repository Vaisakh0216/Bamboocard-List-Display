import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import useGetAllUsers from "../hooks/useGetAllUsers";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 40px;
`;

function Home() {
  const apiUrl = "https://jsonplaceholder.typicode.com/users";
  const { result: usersList, isLoading } = useGetAllUsers(apiUrl);

  return (
    <StyledDiv>
      {usersList?.map((user) => (
        <Card key={user.id} user={user} isLoading={isLoading} />
      ))}
    </StyledDiv>
  );
}

export default Home;
