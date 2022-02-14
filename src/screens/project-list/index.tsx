import React from "react";
import { useState } from "react";
import { SearchPanel } from "./search-panel";
import { List } from "./list";
import { useDebounce, useDocumentTitle } from "../../utils";
import { useProjects } from "../../utils/project";
import { useUsers } from "../../utils/user";

import styled from "@emotion/styled";
import { Typography } from "antd";
import { useUrlQueryParam } from "../../utils/url";

export const ProjectListScreen = () => {
  useDocumentTitle("项目列表", false);
  const [, setParam] = useState({
    name: "",
    personId: "",
  });
  const param = useUrlQueryParam(["name", "personId"]);
  const {
    isLoading,
    error,
    data: list,
    // @ts-ignore
  } = useProjects(useDebounce(param, 2000));
  const { data: users } = useUsers();

  return (
    <Container>
      <h1>项目列表</h1>
      <SearchPanel
        users={users || []}
        param={param}
        setParam={setParam}
      ></SearchPanel>
      {error ? (
        <Typography.Text type={"danger"}>{error.message}</Typography.Text>
      ) : null}
      <List
        loading={isLoading}
        users={users || []}
        dataSource={list || []}
      ></List>
    </Container>
  );
};

const Container = styled.div`
  padding: 3.2rem;
`;
