import React from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { categoryList, IToDo, toDoState } from "../atoms";

function ToDo({ text, category, id }: IToDo) {
  const Categories = useRecoilValue(categoryList);
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const newToDo = { text, id, category: name as any };
      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };
  return (
    <li>
      <span>{text}</span>
      {Categories.map(
        (cate) =>
          category !== cate && (
            <button name={cate} onClick={onClick}>
              {cate}
            </button>
          )
      )}
    </li>
  );
}
export default ToDo;
