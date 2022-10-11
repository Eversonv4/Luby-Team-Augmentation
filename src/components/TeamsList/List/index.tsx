import React from "react";
import { TeamsItem } from "../TeamsItem";

import { List } from "./styles";

interface TechListProps {
  techlist: string[];
}

export function TeamsList({ techlist }: TechListProps) {
  const list = techlist;

  return (
    <List>
      {list && list.map((item) => <TeamsItem key={item} title={item} />)}
    </List>
  );
}
