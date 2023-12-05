import { useEffect, useState } from 'react'
import { animated, easings, useSpring } from 'react-spring'

type TextRotatorProps = {
  content: string[]
}

export const TextRotator = ({ content }: TextRotatorProps) => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((index) => index + 1)
    }, 2000)

    return () => clearTimeout(intervalId)
  }, [])

  const props = useSpring({
    to: { opacity: '0' },
    from: { opacity: '1' },
    reset: true,
    config: {
      duration: 2000,
      easing: easings.easeInOutQuart,
    },
  })

  const propsNext = useSpring({
    to: { opacity: '1' },
    from: { opacity: '0' },
    reset: true,
    config: {
      duration: 2000,
      easing: easings.easeInOutQuart,
    },
  })

  return (
    <div className='w-max relative inline-block [&>*]:inline-block [&>*]:w-max [&>*:not(:first-child)]:absolute [&>*:not(:first-child)]:inset-0'>
      <animated.span
        className='bg-gradient-to-r from-indigo-400 via-pink-400 to-indigo-200 text-transparent bg-clip-text'
        style={props}
      >
        {content[index % content.length]}
      </animated.span>

      <animated.span
        className='bg-gradient-to-r from-indigo-400 via-pink-400 to-indigo-200 text-transparent bg-clip-text'
        style={propsNext}
      >
        {content[(index + 1) % content.length]}
      </animated.span>
    </div>
  )
}
