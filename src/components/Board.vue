<template>
  <div class="board-wrapper">
    <div class="board">
      <BoardItem
        v-for="field in fields"
        :field="field"
        :key="'item-' + field.id"
        :game-status="gameStatus"
        @selectField="selectField($event)"
      />
    </div>

    <div class="difficult">
      Сложность: <strong>{{ difficult }}</strong>
    </div>
    <div class="result">
      <p class="fail" v-if="isFail">Вы проиграли. Попробуйте еще раз!</p>
      <p class="win" v-if="isWin">Поздравляем! Продолжаем играть!</p>
    </div>

    <button class="btn" @click="start" :disabled="!canStartGame">Старт</button>
  </div>
</template>

<script>
import BoardItem from './BoardItem'

import useGameInit from '@/components/composables/useGameInit.js'
import useGameStart from '@/components/composables/useGameStart.js'
import useGameProcess from '@/components/composables/useGameProcess.js'
import { GAME_STATUS } from '@/constants'
import { ref } from 'vue'

export default {
  name: 'Board',
  props: {},
  components: {
    BoardItem,
  },
  setup() {
    const number = 25
    const gameStatus = ref(GAME_STATUS.NONE)

    const { difficult, fields, init } = useGameInit(number)
    const { start, canStartGame } = useGameStart(
      init,
      fields,
      difficult,
      number,
      gameStatus
    )
    const { selectField, isWin, isFail } = useGameProcess(
      fields,
      gameStatus,
      difficult,
      start
    )

    return {
      difficult,
      fields,
      number,
      init,
      start,
      gameStatus,
      canStartGame,
      selectField,
      isWin,
      isFail,
    }
  },
}
</script>

<style scoped>
.board {
  width: 300px;
  margin: 0 auto;
}
.btn {
  background: #01b14a;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 2px;
  padding: 10px 30px;
  margin: 10px 0;
  cursor: pointer;
  outline: none;
}
button:hover {
  box-shadow: 0 0 10px #01b14a, 0 0 20px #01b14a;
}
button:disabled {
  opacity: 0.5;
}
.win {
  color: #01b14a;
  font-weight: bold;
}
.fail {
  color: #c90101;
  font-weight: bold;
}
.result {
  height: 25px;
}
</style>
