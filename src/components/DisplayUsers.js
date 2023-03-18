import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../store/slices/UserSlice";
import { MdDeleteForever } from "react-icons/md";

const DisplayUsers = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => {
    return state.users;
  });

  const deleteUser = (id) => {
    dispatch(removeUser(id));
  };
  // function data() {
  //   const user = useSelector((state) => state.users);
  // }

  return (
    <Wrapper>
      {data.map((user, id) => {
        return (
          <li key={id}>
            {user}
            <button onClick={() => deleteUser(id)}>
              <MdDeleteForever className="delete-icon" />
            </button>
          </li>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  li {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 1px solid #eee;

    &:first-child {
      border-top: 1px solid #eee;
    }
    button {
      background-color: transparent;
      border: 0;
    }
  }
`;

export default DisplayUsers;
