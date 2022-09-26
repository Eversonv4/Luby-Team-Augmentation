import React from "react";
import { ItemList } from "../ItemList";

import { List } from "./styles";

interface Item {
  title: string;
  image: string;
}

interface StackListProps {
  stacklist: Item[];
}

export function StackList({ stacklist }: StackListProps) {
  const list = stacklist;

  return (
    <List>
      {list &&
        list.map((item) => (
          <ItemList key={item.title} image={item.image} title={item.title} />
        ))}
    </List>
  );
}
