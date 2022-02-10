import { useEffect } from "react";

import { cleanObject } from "../utils";
import { useAsync } from "../utils/use-async";
import { Project } from "../types/project";
import { useHttp } from "../utils/http";

export const useProjects = (param?: Partial<Project>) => {
  const { run, ...result } = useAsync<Project[]>();
  const client = useHttp();

  useEffect(() => {
    run(
      client(`projects`, {
        data: cleanObject(param || {}),
      })
    );
  }, [param]);

  return result;
};
