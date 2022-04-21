import { useEffect } from 'react'
import pianoKeys from 'piano-keys'

function useKeys(
  element: HTMLElement | Window | Document,
  description: string,
  handler: (event: KeyboardEvent) => void,
  keyUp?: boolean
) {
  useEffect(() => {
    if (element) {
      return pianoKeys(element, description, handler, keyUp)
    }
  }, [element, description, handler, keyUp])
}

export default useKeys
