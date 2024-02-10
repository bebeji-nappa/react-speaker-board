# React Speaker Board
![NPM](https://img.shields.io/npm/l/react-speaker-board)
![npm](https://img.shields.io/npm/v/react-speaker-board)
![NPM](https://img.shields.io/npm/dw/react-speaker-board)

Easily create presentation board using React Hooks.

## Quick Usage
It install react-speaker-board running this comand.

```sh
$ yarn add react-speaker-board
```

It create slide components.
```jsx
"use client"

import React from 'react'
import { ReactSpeakerBoard, Title, Content, Spacer, Layout, Theme, Text } from "react-speaker-board";

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
          <Content horizontal="left" textSize="xlarge">
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
  const {
    Title,
    Layout,
    Theme,
  } = useReactSpeakerBoard();

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

It show slide compoents in page using `ReactSpeakerBoard` Component.
```jsx
import React from 'react'
import { ReactSpeakerBoard } from 'react-speaker-board'
import { Slide } from './slide'

const Home = () => {
  return <ReactSpeakerBoard slide={Slide} mode="slide" />
};

default export Home;
```

## Documentation
https://react-speaker-board-website.vercel.app/docs/ja/introduction

## License
MIT

