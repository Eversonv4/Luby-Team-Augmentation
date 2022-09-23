import React from "react";
import { Item } from "./styles";

interface ItemProps {
  title: string;
}

export function ItemList({ title }: ItemProps) {
  return <Item>{title}</Item>;
}
