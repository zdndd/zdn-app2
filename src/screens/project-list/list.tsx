import React from "react";
import { User } from "./search-panel";
import { Table } from "antd";
import dayjs from "dayjs";

export interface Project {
  id: number;
  name: string;
  personId: number;
  pin: boolean;
  organization: string;
  created: number;
}
interface ListProps {
  users: User[];
  list: Project[];
}

export const List = ({ list, users }: ListProps) => {
  return (
    <Table
      pagination={false}
      dataSource={list}
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
