interface SpeakerBoardProps {
  mode?: string,
  theme?: string,
  controlTheme?: string,
  width?: string,
  height?: string,
  controlBar?: string,
  slide: (() => JSX.Element)[],
}

interface ThemeProps {
  themeColor?: string,
  textColor?: string,
  animate?: string,
  children: React.ReactNode,
}

interface MainTitleProps {
  children: string | React.ReactNode,
  textAlign?: string,
  size?: string,
}

interface SectionTitleProps {
  children: string | React.ReactNode,
  textAlign?: string,
  size?: string,
}

interface ContentProps {
  children: string | React.ReactNode,
  align?: string,
  size?: string,
}

interface LayoutProps {
  children: React.ReactNode,
  layout: string,
}

interface Control {
  next: () => void,
  prov: () => void,
  color: string,
  controlBar?: string,
}
