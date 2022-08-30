import React from 'react'
import { useSpring, a } from '@react-spring/web'
import styled from 'styled-components'
import Link from 'next/link'

export default function App() {
  const [toggle, setToggle] = React.useState(
    false
  )

  const styles = useSpring({
    // from 最初
    // to その後 toggle の値でuseSpring側いい感じに調整してくれる
    from: {
      x: 0,
      y: 0,
      rotate: 0,
    },
    to: toggle
      ? [
          { x: 300 },         
        ]
      : [
          { x: 0 },
        ],
      config: {
        duration: 300,
      },
  })

  return (
    <div>
      <Link href="/react-spring">
        <a>戻る</a>
      </Link>
      <button onClick={() => setToggle(!toggle)} >toggle</button>
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
        <div style={{
          marginRight: 200
        }}>
          <Square style={styles} />
        </div>
        <div style={{
          marginRight: 400
        }}>
          <Square style={styles} />
        </div>
        <div style={{
          marginRight: 600
        }}>
          <Square style={styles} />
        </div>
        <div style={{
          marginRight: 800
        }}>
          <Square style={styles} />
        </div>
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
