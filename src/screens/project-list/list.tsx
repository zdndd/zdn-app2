import React from "react";
import { User } from "./search-panel";
import { Table } from "antd";

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
      ]}
    ></Table>
  );
};
