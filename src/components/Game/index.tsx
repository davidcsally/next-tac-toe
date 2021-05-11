import styled from '@emotion/styled'
import { useDispatch, useSelector } from 'react-redux'

import { boardSelector, currentTurnSelector, flipTurn, markSpace } from 'src/store/index'

const Container = styled.div`
  background-color: lightgray;
  display: grid;
  min-height: 100vh;
  place-content: center;
`

const Board = styled.div`
  border: 1px solid black;
  height: 100%;
  width: 100%;

  display: grid;
  grid-template:
    "a a a"
    "a a a"
    "a a a";
`

const Tile = styled.button`
  border: 1px solid black;
  display: grid;
  height: 50px;
  place-content: center;
  width: 50px;
`



const Game = () => {
  const dispatch = useDispatch()
  const currentTurn = useSelector(currentTurnSelector)
  const spaces = useSelector(boardSelector)

  const selectSpace = (i) => {
    if (spaces[i] === 'x' || spaces[i] === 'o') return null

    dispatch(markSpace({ index: i, turn: currentTurn }))
    dispatch(flipTurn())
  }

  return (
    <Container >
      <div>Current Turn: {currentTurn}</div>
      <Board >
        {spaces.map((s, i) => <Tile key={i} onClick={() => selectSpace(i)}>{s}</Tile>)}
      </Board>
    </Container >
  )
}

export default Game
