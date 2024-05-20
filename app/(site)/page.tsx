"use client";

import { Button, Htag, P, Rating, Tag } from "@/components";
import { useEffect, useState } from "react";

export default function Home() {
  const [rating, setRating] = useState<number>(0);

  return (
    <div>
      <Htag tag="h1">qqqqq</Htag>
      <Button apperance="primary" arrow="right">
        Кнопка
      </Button>
      <Button apperance="ghost" arrow="down">
        Ghost
      </Button>
      <P size="small">Small</P>
      <P size="medium">Medium</P>
      <P size="large">Large</P>
      <Tag size="small" color="ghost">
        Ghost{" "}
      </Tag>
      <Tag size="small" color="red">
        Ghost{" "}
      </Tag>
      <Tag size="medium" color="green">
        Ghost{" "}
      </Tag>
      <Tag size="small" color="primary">
        Ghost{" "}
      </Tag>
      <Rating rating={rating} setRating={setRating} isEditable={true} />
    </div>
  );
}
