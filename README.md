# react-piano-keys

[![npm version](https://badge.fury.io/js/react-piano-keys.svg)](https://badge.fury.io/js/react-piano-keys)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](#contributing)

A React hotkeys librairy in less than 4KB.

## Installation

```
npm install --save react-piano-keys
```

## Usage

```jsx
import useKeys from 'react-piano-keys'

function MyCoolComponent() {
  useKeys(window, 'cmd+b', () => console.log('bold!'))

  return (
    <div>
      Press cmd+b for bold!
    </div>
  )
}
```
```jsx
import { useRef } from 'react'
import useKeys from 'react-piano-keys'

function MyOtherCoolComponent() {
  const divRef = useRef()

  useKeys(divRef.current, 'up up down down left right left right b a', () => console.log('konami code!'))

  return (
    <div ref={divRef}>
      What could the code be?
    </div>
  )
}
```

Available descriptors:
`ctrl shift alt altgr cmd enter tab space backspace escape capslock up down left right plus contextmenu delete insert pause home end numlock`

## Contributing

Yes, thank you.

## License

MIT
