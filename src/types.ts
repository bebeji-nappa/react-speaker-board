interface SpeakerBoardProps {
  mode?: string;
  theme?: string;
  controlTheme?: string;
  width?: string;
  height?: string;
  controlBar?: string;
  slide: (() => JSX.Element)[];
}

interface ThemeProps {
  themeColor?: string;
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
  horizontal?: string;
  vertical?: string;
  textSize?: string;
  width?: string;
  height?: string;
}

interface LayoutProps {
  children: React.ReactNode;
  layout: string;
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
