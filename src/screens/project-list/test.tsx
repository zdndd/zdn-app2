import React, { useEffect, useState } from "react";
import { useMount } from "../../utils";

export const Test = () => {
  const [num, setNum] = useState(0);

  const add = () => setNum(num + 1);

  useMount(() => {
    setInterval(() => {}, 1000);
  });

  useEffect(() => {
    return () => {};
  });

  return (
    <div>
      <button onClick={add}>add</button>
      <p>number:{num}</p>
    </div>
  );
};
