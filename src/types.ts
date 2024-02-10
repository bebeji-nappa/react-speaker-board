interface SpeakerBoardProps {
  mode?: "slide" | "inlineSlide";
  theme?: string;
  controlArrowColor?: string;
  width?: string;
  height?: string;
  controlBgColor?: "none" | "dark" | "light";
  slide: (() => JSX.Element)[];
  controlBar?: "all" | "arrow" | "keyboard";
}

interface ThemeProps {
  themeColor?: "default" | "sunset" | "malinka" | "moon" | "darkblue" | "sky" | "green" | "dark";
  textColor?: string;
  customThemeColor?: string;
  children: React.ReactNode;
}

interface TitleProps {
  children: string | React.ReactNode;
  textAlign?: string;
  textSize?: string;
}

interface TextProps {
  children: string | React.ReactNode;
  textAlign?: string;
  textSize?: string;
}

interface ContentProps {
  children: string | React.ReactNode;
  horizontal?: "left" | "center" | "right";
  vertical?: "up" | "center" | "down";
  textSize?: "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge" | "xxxlarge";
  width?: string;
  height?: string;
  layout?: "vertical" | "horizontal";
  gap?: string;
}

interface LayoutProps {
  children: React.ReactNode;
  layout: "subject" | "section";
}

interface ControlProps {
  next: () => void;
  prov: () => void;
  color: string;
  controlBar?: string;
}

interface FigureProps {
  backgroundColor?: string;
  color?: string;
  width?: string;
  height?: string;
  borderColor?: string;
  borderWidth?: string;
  children?: string | React.ReactNode;
}

interface TriangleProps {
  color?: string;
  size: string;
  height: string;
  children?: string | React.ReactNode;
}

interface AllSlideProps {
  slide: (() => JSX.Element)[];
};

interface ArrowLeftProps {
  width?: string;
  color?: string;
}

interface ArrowRightProps {
  width?: string;
  color?: string;
}

interface ArrowUpProps {
  height?: string;
  color?: string;
}

interface CodeProps {
  children: string;
  lang: string;
  width?: string;
  height?: string;
  textSize?: string;
}
