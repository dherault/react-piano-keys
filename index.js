const pianoKeys = require('piano-keys')
const { useEffect } = require('react')

function useKeys(element, description, keyUp) {
  useEffect(() => {
    if (element) {
      return pianoKeys(element, description, keyUp)
    }
  }, [element, description, keyUp])
}

module.exports = useKeys
