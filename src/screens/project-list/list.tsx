import React from "react";
import { User } from "./search-panel";
import { Table, TableProps } from "antd";
import dayjs from "dayjs";
import { Project } from "../../types/project";
interface ListProps extends TableProps<Project> {
  users: User[];
}

export const List = ({ users, ...props }: ListProps) => {
  return (
    <Table
      pagination={false}
      {...props}
      columns={[
        { title: "名称", dataIndex: "name" },
        { title: "部门", dataIndex: "organization" },
        {
          title: "负责人",
          render(value, project) {
            return (
              <span>
                {users.find((user) => user.id === project.personId)?.name ||
                  "未知"}
              </span>
            );
          },
        },
        {
          title: "创建时间",
          render(value, project) {
            return (
              <span>
                {project.created
                  ? dayjs(project.created).format("YYYY-MM-DD")
                  : "无"}
              </span>
            );
          },
        },
      ]}
    ></Table>
  );
};
