export type Category = {
  emoji: string;
  name: string;
  slug: string;
};

export type Group = {
  emoji: string;
  name: string;
  data: Emoji[];
};

export type Emoji = {
  name: string;
  character: string;
};
