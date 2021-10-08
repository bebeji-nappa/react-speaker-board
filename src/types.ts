interface SpeakerBoardProps {
  mode?: string,
  theme?: string,
  controlTheme?: string,
  width?: string,
  height?: string,
  slide: JSX.Element[],
}

interface ThemeProps {
  themeColor?: string,
  textColor?: string,
  children: React.ReactNode,
}

interface MainTitleProps {
  children: string | React.ReactNode,
  textAlign?: string | null,
}

interface SectionTitleProps {
  children: string | React.ReactNode,
  textAlign?: string | null,
}

interface MainTextProps {
  children: string | React.ReactNode,
  textAlign?: string | null,
  size?: string | null,
}

interface LayoutProps {
  children: React.ReactNode,
  layout: string,
}

interface Control {
  next: () => void;
  prov: () => void;
  color: string;
}

declare module "*.png" {
  const value: any;
  export = value;
}

declare module "*.jpg" {
  const value: any;
  export = value;
}

declare module "*.jpeg" {
  const value: any;
  export = value;
}

declare module "*.svg" {
  const value: any;
  export = value;
}
