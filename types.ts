export type ResumeItem = {
  title: string;
  where: string;
  when: string;
  desc: string;
};

export type ResumeSection = {
  hed: string;
  items?: ResumeItem[];
  flatItems?: string[];
};

export type SlideshowItem = {
  img: string;
  text: string;
  credit: string;
};

export type UsePrevNextButtonsType = {
  prevDisabled: boolean;
  nextDisabled: boolean;
  onPrevClick: () => void;
  onNextClick: () => void;
};

export type PrevNextButtonProps = {
  onClick: () => void;
  disabled: boolean;
};

export type UseDotButtonType = {
  selectedIndex: number;
  scrollSnaps: number[];
  onDotButtonClick: (index: number) => void;
};

export type DotButtonProps = {
  onClick: () => void;
  isSelected: boolean;
};
