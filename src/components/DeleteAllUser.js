import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { deleteUsers } from "../store/slices/UserSlice";

export const DeleteAllUser = () => {
  const dispatch = useDispatch();

  const clearUsers = () => {
    dispatch(deleteUsers());
  };

  return (
    <Wrapper>
      <button className="clear-btn" onClick={clearUsers}>
        clear users
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .clear-btn {
    margin-top: 10px;
    color: white;
    border: none;
    outline: none;
    text-transform: capitalize;
    background: linear-gradient(135deg, #4dd730 0%, #dbe063 100%);
    font-size: 1.8rem;
    padding: 7px 13px;
    border-radius: 4px;
    letter-spacing: 0.3px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
      rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    transition: transform 0.5s ease;
  }
`;
