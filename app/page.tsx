import { Button, Htag, P, Tag } from "@/components";

export default function Home() {
  return (
    <div>
      <Htag tag="h1">Hello World</Htag>
      <Button apperance="primary" arrow="right">
        Primary
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
    </div>
  );
}
