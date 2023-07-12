import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { categoryList, categoryState, toDoSelector } from "../atoms";
import CreateCategory from "./CreateCategory";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  font-weight: bold;
`;

const Title = styled.span`
  font-size: 50px;
`;

const Options = styled.div`
  display: block;
  & > * {
    display: inline-block;
    margin: 0px 30px;
  }
`;

const Todos = styled.div`
  span {
    margin: 0 30px;
  }
  * {
    list-style-type: none;
  }
  button {
    margin: 0 10px;
  }
`;

function ToDoList() {
  const Categories = useRecoilValue(categoryList);
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };
  return (
    <Container>
      <Title>To Dos</Title>
      <hr />
      <Options>
        <select value={category} onInput={onInput}>
          {Categories.map((cate) => (
            <option value={cate}>{cate}</option>
          ))}
        </select>
        <CreateToDo />
        <CreateCategory />
      </Options>
      <hr />
      <Todos>
        {toDos?.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </Todos>
    </Container>
  );
}

export default ToDoList;
