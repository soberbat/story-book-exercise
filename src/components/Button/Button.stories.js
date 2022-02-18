import React, { Children, Component } from "react";
import Button from "./Button";
import Center from "../Decorators/Center";

export default {
  title: "Form/Button",
  component: Button,
  decorators: [(story) => <Center> {story()} </Center>],
  argTypes: { onClick: { action: "clicked" } },
};

const Template = (args) => <Button {...args} />;
export const Success = Template.bind({});
Success.args = {
  variant: "primary",
  children: "Button Text",
};

export const Primary = () => <Button variant="primary">Primary</Button>;
export const Secondary = () => <Button variant="secondary">Secondary</Button>;

export const Danger = () => <Button variant="danger">Danger</Button>;
