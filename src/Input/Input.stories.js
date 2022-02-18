import React from "react";
import Input from "./Input";

export default {
  title: "Form/Input",
  component: Input,
};

export const sm = () => <Input size="sm" placeholder="Small" />;
export const md = () => <Input size="md" placeholder="Medium" />;
export const lg = () => <Input size="lg" placeholder="Large" />;
export const xl = () => <Input size="xl" placeholder="Xlarge" />;
