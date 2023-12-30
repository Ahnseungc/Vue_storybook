import MyButton from "./Button.vue";
import { withDesign } from "storybook-addon-designs";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: "Example/Button",
  component: MyButton,
  decorators: [withDesign],

  argTypes: {
    backgroundColor: { control: "color" },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    primary: true,
    label: "Button",
  },
};

export const Secondary = {
  args: {
    label: "Button",
  },
};

export const Large = {
  args: {
    size: "large",
    label: "Button",
  },
};

export const Small = {
  args: {
    size: "small",
    label: "Button",
  },
};
