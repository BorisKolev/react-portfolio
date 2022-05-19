import { useEffect, useState } from 'react';

const typedTextStr = "Junior Software Engineer at ASM.";

const Phase = {
  Typing: 'Typing',
  Pausing: 'Pausing',
  Deleting: 'Deleting',
}

const TYPING_INTERVAL = 150
const PAUSE_MS = 1000
const DELETING_INTERVAL = 50

export const useTypedText = () => {
  
  const [phase, setPhase] = useState(Phase.Typing)
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    switch(phase)
    {
      case Phase.Typing: 
      {
        const nextTypedText = typedTextStr.slice(
          0,
          typedText.length + 1
        )

        if(nextTypedText === typedText) 
        {
          setPhase(Phase.Pausing)
          return
        }

        const timeout = setTimeout(() => {
          setTypedText(nextTypedText)
        }, TYPING_INTERVAL)

        return () => clearTimeout(timeout)
      }

      case Phase.Deleting: 
      {
        if(!typedText)
        {
          setPhase(Phase.Typing)
          return
        }

        const nextRemaining = typedTextStr.slice(
          0,
          typedText.length - 1
        )

        const timeout = setTimeout(() => {
          setTypedText(nextRemaining)
        }, DELETING_INTERVAL)

        return () => clearTimeout(timeout)
      }

      case Phase.Pausing:
        default:
          const timeout = setTimeout(() => {
            setPhase(Phase.Deleting)
          }, PAUSE_MS)
          
          return () => clearTimeout(timeout)
    }
  }, [typedTextStr, typedText, phase])

  return typedText
}
