## react-circles [![NPM Package](https://img.shields.io/npm/v/react-circles)](https://www.npmjs.com/package/react-circles)

A small react component to for rendering a rotating circle animation. 

## Installation

```bash
npm i react-circles
```

## Props

| Props (* required)         |  Default      |  Description              | Type          |
|---            |---            |---                        | ---           |
|`numCircles` *      | `undefined` | Number of circles to render | `number` |
|`speed`*  |   `undefined`          | Speed at which the circles rotate |  `'fast' | 'slow'`

## Usage

```javascript
import Circles from 'react-circles'

<Circles numCircles={60} speed={'slow'}/>

// Full Screen with background color 

<div style={{minHeight:window.innerHeight, minWidth:window.innerWidth, backgroundColor:"black"}}>
    <Circles numCircles={60} speed={'slow'}/>
</div>
```

## Features

The `react-circles` component is responsive and inherits its width, height, and background-color properties from its parent element

## License
[MIT](https://choosealicense.com/licenses/mit/)

## Author

* **Andrew Moss** - *Creator* - [agmoss](https://github.com/agmoss)