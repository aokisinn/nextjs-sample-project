import React from 'react'
import { useSpring, a } from '@react-spring/web'
import styled from 'styled-components'
import Link from 'next/link'

export default function App() {
  const [styles, api] = useSpring(() => {
    return {
      x: 0,
      y: 0,
      rotate: 0,
      config: {
        duration: 1000
      }
    }
  })
  React.useEffect(() => {
    let unmounted = false
    ;(async () => {
      while (true) {
        if (unmounted) {
          break
        }
        await Promise.all(
          api.start({
            x: Math.random() * 600 - 300,
            y: Math.random() * 600 - 300,
            rotate: Math.random() * 360
          })
        )
      }
    })()
    return () => {
      unmounted = true
    }
  }, [])
  return (
    <div>
      <Link href="/react-spring">
        <a>戻る</a>
      </Link>
      <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          height: "100%",
          fontFamily: "sans-serif",
          textAlign: "center"
      }}>
        <Square style={styles} />
      </div>
    </div>
  )
}

const Square = styled(a.div)({
  width: 100,
  height: 100,
  borderRadius: 20,
  backgroundImage:
    'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)'
})
