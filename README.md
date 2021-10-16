# React Speaker Board
![NPM](https://img.shields.io/npm/l/react-speaker-board)
![npm](https://img.shields.io/npm/v/react-speaker-board)
![NPM](https://img.shields.io/npm/dw/react-speaker-board)

Easily create presentation board using React.

## Quick Usage
It install react-speaker-board running this comand.
```sh
$ yarn add react-speaker-board
```

It create slide component.
```js
import React from 'react'
import { Title, Text, Content, Spacer, Layout, Theme } from 'react-speaker-board'

const Subject = () => {
  return (
    <Theme themeColor="sky" textColor="white">
      <Layout layout="subject">
        <Title textAlign="center">React Speaker Board</Title>
        <Spacer />
        <Content horizontal="center">
          <Text textAlign="center">Easily create presentation board using React.</Text>
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
        <Title textAlign="center">
          Concept
        </Title>
        <Spacer />
        <Spacer />
        <Content horizontal="center">
          <Content horizontal="left" teztSize="xlarge">
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
        <Title textAlign="center">
          Let's use React Speaker Board!
        </Title>
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

ReactDOM.render(
  <ReactSpeakerBoard slide={Slide} mode="slide" />,
  document.getElementById('root')
);
```

## Documentation
- [Documentation(Japanese) - React Speaker Board](https://react-speaker-board-website.vercel.app/docs/ja/introduction)

## License
MIT

