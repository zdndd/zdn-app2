import { useEffect } from "react";

import { cleanObject } from "../utils";
import { useAsync } from "../utils/use-async";
import { useHttp } from "../utils/http";
import { User } from "../types/user";

export const useUsers = (param?: Partial<User>) => {
  const { run, ...result } = useAsync<User[]>();
  const client = useHttp();

  useEffect(() => {
    run(
      client(`users`, {
        data: cleanObject(param || {}),
      })
    );
  }, [param]);

  return result;
};
