import React from 'react'
import { useSpring, a } from '@react-spring/web'
import styled from 'styled-components'

export default function App() {
  const [toggle, setToggle] = React.useState(
    false
  )
  const styles = useSpring({
    // from 最初
    // to その後 toggle の値でuseSpring側いい感じに調整してくれる
    from: {
      width: '0%',
      height: "300px",
      backgroundColor: "white"
    },
    to: toggle
      ? [
          // from の背景で、0 ~ 100に変化していく
          { width: '100%' },
          {
            backgroundColor: "red"
          },
          {
            backgroundColor: "orange"
          },         
        ]
      : [
          {
            backgroundColor: "aqua"
          },
          {
            backgroundColor: "white"
          },
          { width: '0%' }
        ],
      config: {
        duration: 500,
      },
  })

  return (
    <div>
      <Container
        onClick={() => setToggle(!toggle)}
      >
        <Meter style={styles} />
        <a.div style={{ marginTop: 20 }}>
          {/* styleの値は動的に変化するのでここからwidthの値を変化する */}
          {styles.width.to((w) => {
            return w.replace(/\.(\d+)/, '')
          })}
        </a.div>
      </Container>
    </div>
  )
}

const Container = styled('div')({
  width: 400,
  height: 70,
  backgroundColor: '#fff',
  borderRadius: 20
})

const Meter = styled(a.div)({
  width: 400,
  height: 70,
  borderRadius: 20
})
