import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import useGetAllUsers from "../hooks/useGetAllUsers";

function Home() {
  const apiUrl = "https://jsonplaceholder.typicode.com/users";
  const { result: usersList, loading, error } = useGetAllUsers(apiUrl);

  console.log("usersList", usersList);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "10px",
        marginBottom: "40px",
      }}
    >
      {usersList?.map((user) => (
        <Card user={user} loading={loading} />
      ))}
    </div>
  );
}

export default Home;
