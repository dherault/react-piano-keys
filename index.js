const pianoKeys = require('piano-keys')
const { useEffect } = require('react')

function useKeys(element, description, handler, keyUp) {
  useEffect(() => {
    if (element) {
      return pianoKeys(element, description, handler, keyUp)
    }
  }, [element, description, handler, keyUp])
}

module.exports = useKeys
