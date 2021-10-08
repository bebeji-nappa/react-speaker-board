# React Speaker Board
Easily create presentation board using React.

## Quick Usage
It install react-speaker-board running this comand.
```sh
$ yarn add react-speaker-board
```

It create slide view component.
```js
import React from 'react'
import { MainTitle, MainContent, SectionTitle, Spacer, Layout, Theme } from 'react-speaker-board'

const Subject = (
  <Theme themeColor="green" textColor="white">
    <Layout layout="subject">
      <MainTitle textAlign="center"></MainTitle>
      <Spacer />
      <MainContent textAlign="center">
        <span style={{ textAlign: "center" }}>
          nappa
        </span>
      </MainContent>
    </Layout>
  </Theme>
)

const Content_1 = (
  <Theme themeColor="malinka" textColor="white">
    <Layout layout="subject">
      <MainTitle textAlign="center">Content 1</MainTitle>
    </Layout>
  </Theme>
)

const Content_2 = (
  <Theme themeColor="sunset" textColor="white">
    <Layout layout="section">
      <Spacer />
      <Spacer />
      <SectionTitle textAlign="left">
        I use React Speaker Board.
      </SectionTitle>
      <Spacer />
      <Spacer />
      <MainContent size="large">
        <li>list1</li>
        <li>list2</li>
        <li>list3</li>
      </MainContent>
    </Layout>
  </Theme>
)

const Content_3 = (
  <Theme themeColor="darkblue" textColor="white">
    <Layout layout="section">
      <Spacer />
      <Spacer />
      <SectionTitle textAlign="left">
        I use React Speaker Board.
      </SectionTitle>
      <Spacer />
      <Spacer />
      <Spacer />
      <MainContent textAlign="center" size="xxlarge">
        <Layout layout="subject">YES!!</Layout>
      </MainContent>
    </Layout>
  </Theme>
)

export const Slide = [
  Subject,
  Content_1,
  Content_2,
  Content_3,
]

```


