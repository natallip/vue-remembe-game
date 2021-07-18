<template>
  <span :class="getBoardItemClasses" @click="select(field.id)"></span>
</template>

<script>
import { GAME_STATUS, FIELD } from '@/constants'
import { computed } from 'vue'

export default {
  name: 'BoardItem',
  emits: ['selectField'],
  props: {
    field: {
      type: Object,
      required: true,
    },
    gameStatus: {
      type: Number,
      required: false,
      default: GAME_STATUS.NONE,
    },
  },
  setup(props) {
    let getBoardItemClasses = computed(() => {
      let classes = 'item '

      if (
        (props.field.value === FIELD.FILLED &&
          props.gameStatus === GAME_STATUS.PREVIEW) ||
        (props.field.clicked && props.field.value === FIELD.FILLED)
      ) {
        classes += ' active'
      }

      if (props.field.clicked && props.field.value === FIELD.EMPTY) {
        classes += ' error'
      }

      return classes
    })

    return {
      getBoardItemClasses,
    }
  },
  methods: {
    select(id) {
      if (this.gameStatus === GAME_STATUS.STARTED) {
        this.$emit('selectField', id)
      }
    },
  },
}
</script>

<style scoped>
.item {
  position: relative;
  width: 50px;
  height: 50px;
  background: #a5a5a5;
  margin: 5px;
  display: inline-block;
  cursor: pointer;
  transition: 0.4s;
  transform-style: preserve-3d;
}
.item.active {
  background: #01b14a;
  box-shadow: 0 0 10px #01b14a;
  transform: rotateX(180deg);
}
.item.error {
  background: #c90101;
  box-shadow: 0 0 10px #c90101;
  transform: rotateX(180deg);
}
</style>
