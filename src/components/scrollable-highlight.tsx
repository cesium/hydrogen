"use client";

import React from "react";
import Carousel from "./carousel";

interface Props {
  items: React.ReactNode[];
}

export default function ScrollableHighlight({ items }: Props) {
  return (
    <Carousel
      single
      showNavigation
      pagination
      items={items}
      paginationPos={"top"}
    />
  );
}
