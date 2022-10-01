import Image from "next/image";
import React from "react";
import { Item, Title } from "./styles";

interface ItemProps {
  title: string;
  image: string;
}

export function ItemList({ title, image }: ItemProps) {
  return (
    <Item>
      <Image src={image} alt={title} width={75} height={75} loading="lazy" />
      <Title>{title}</Title>
    </Item>
  );
}
