import React from "react";
import { ItemList } from "../ItemList";

import { List } from "./styles";

interface TechListProps {
  techlist: string[];
}

export function TeamsList({ techlist }: TechListProps) {
  const list = techlist;

  return <List>{list && list.map((item) => <ItemList title={item} />)}</List>;
}
