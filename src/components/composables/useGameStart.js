import { FIELD, GAME_STATUS, GAME_SPEED } from '@/constants'
import { computed } from 'vue'

export default function useGameStart(
  init,
  fields,
  difficult,
  number,
  gameStatus
) {
  const start = () => {
    init()
    prepareGame()
  }

  const getRandon = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min
  }

  const prepareGame = () => {
    gameStatus.value = GAME_STATUS.PREVIEW

    for (let i = 0; i < difficult.value; i++) {
      const index = getRandon(0, number - 1)

      if (fields.value[index].value !== FIELD.FILLED) {
        fields.value[index].value = FIELD.FILLED
      } else {
        i--
      }
    }

    setTimeout(() => {
      gameStatus.value = GAME_STATUS.STARTED
    }, GAME_SPEED)
  }

  let canStartGame = computed(() => {
    return (
      gameStatus.value !== GAME_STATUS.PREVIEW &&
      gameStatus.value !== GAME_STATUS.WIN
    )
  })

  return {
    start,
    canStartGame,
  }
}
