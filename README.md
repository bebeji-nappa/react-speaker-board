# React Speaker Board
Easily create presentation board using React.

## Quick Usage
It install react-speaker-board running this comand.
```sh
$ yarn add react-speaker-board
```

It create slide component.
```js
import React from 'react'
import { MainTitle, Content, SectionTitle, Spacer, Layout, Theme } from 'react-speaker-board'

const Subject = () => {
  return (
    <Theme themeColor="sky" textColor="white">
      <Layout layout="subject">
        <MainTitle textAlign="center">React Speaker Board</MainTitle>
        <Spacer />
        <Content align="center">
          <span style={{ textAlign: "center" }}>
            Easily create presentation board using React.
          </span>
        </Content>
      </Layout>
    </Theme>
  )
}

const Concept = () => {
  return (
    <Theme themeColor="sky" textColor="white">
      <Layout layout="section">
        <Spacer />
        <Spacer />
        <MainTitle textAlign="center">
          Concept
        </MainTitle>
        <Spacer />
        <Spacer />
        <Content align="center">
          <Content align="left" size="xlarge">
            <li>Easy to make</li>
            <li>Easy to customize</li>
            <li>Abundant theme colors</li>
          </Content>
        </Content>
      </Layout>
    </Theme>
  )
}

const Documentation = () => {
  return (
    <Theme themeColor="sky" textColor="white">
      <Layout layout="subject">
        <MainTitle textAlign="center">
          Let's use React Speaker Board!
        </MainTitle>
      </Layout>
    </Theme>
  )
}

export const Slide = [
  Subject,
  Concept,
  Documentation,
]

```

It show slide compoent in page using `ReactSpeakerBoard` Component.
```js
import React from 'react'
import ReactDOM from 'react-dom'
import { ReactSpeakerBoard } from 'react-speaker-board'
import 'react-speaker-board/styles/style.css'
import { Slide } from './slide'
import "./reset.css"

ReactDOM.render(
  <ReactSpeakerBoard slide={Slide} mode="slide" />,
  document.getElementById('root')
);
```

## License
MIT

