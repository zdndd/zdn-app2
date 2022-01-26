import React from "react";
import { useMount, useArray } from "./utils";

export const TsReactTest = () => {
  const persons: { name: string; age: number }[] = [
    { name: "jack", age: 25 },
    { name: "ma", age: 22 },
  ];
  const { value, clear, removeIndex, add } = useArray(persons);
  useMount(() => {});
  return (
    <div>
      <button onClick={() => add({ name: "jonh", age: 22 })}>add jonh</button>
      <button onClick={() => removeIndex(0)}>remove</button>
      <button onClick={() => clear()}>clear</button>
      {value.map((person, index) => (
        <div>
          <span>{index}</span> - <span>{person.name}</span>
        </div>
      ))}
    </div>
  );
};
