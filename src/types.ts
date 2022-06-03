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
  id: string;
  name: string;
  character: string;
};
