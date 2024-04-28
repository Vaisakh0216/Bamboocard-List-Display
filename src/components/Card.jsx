import React from "react";
import { Box, CardContent, Skeleton } from "@mui/material";
import { Avatar } from "@mui/material";
import styled from "styled-components";

const StyledCard = styled(Box)`
  width: 280px;
  height: 300px;
  max-width: 340px;
  max-height: 359px;
  margin: 0px 10px 10px;
  background-color: white;
  border-radius: 10px;
  transition: all 0.5s ease;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    z-index: 1000;
  }
`;

const UserDiv = styled.div`
  position: relative;
  background-color: #5c62e3;
  border-radius: 10px;
  position: relative;
  height: 107px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 16px;
  font-weight: 600;
`;

const StyledAvatar = styled(Avatar)`
  margin: -15% 0% 0% 5%;
  position: absolute;
  width: 80px !important;
  height: 80px !important;
  border: 2px solid white;
  background-color: black !important;
`;

const InfoDiv = styled.div`
  margin: 5px 0px 0px 30px;
`;

const StyledH6 = styled.h6`
  margin: 5px 0px 0px 0px;
  display: flex;
  color: black;
  font-size: 14px;
`;
const Email = styled.h6`
  margin: 0px 0px 0px 0px;
  display: flex;
  color: #6b7387;
  font-size: 12px;
`;

const Description = styled.p`
  margin: 10px 0px 0px 0px;
  display: flex;
  color: #6b7387;
  font-size: 12px;
  text-align: left;
`;

const Website = styled.a`
  margin: 10px 0px 0px 0px;
  display: flex;
  font-size: 12px;
  text-align: left;
`;

const CardWrapper = ({ user, loading }) => {
  return (
    <>
      {loading ? (
        <Skeleton
          variant="rectangular"
          sx={{ width: "280px", height: "300px", borderRadius: "10px" }}
        />
      ) : (
        <StyledCard>
          <CardContent sx={{ padding: 1 }}>
            <UserDiv>{user?.name}</UserDiv>
            <StyledAvatar>
              <span style={{ fontSize: "50px", fontWeight: "400" }}>
                {user?.name?.charAt(0)}
              </span>
            </StyledAvatar>
            <InfoDiv>
              <StyledH6>{user?.username}</StyledH6>
              <Email>{user?.email}</Email>
              <Description>
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas.
              </Description>
              <Website href={user?.website}>{user?.website}</Website>
            </InfoDiv>
          </CardContent>
        </StyledCard>
      )}
    </>
  );
};

export default CardWrapper;
