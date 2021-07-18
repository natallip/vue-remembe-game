<template>
  <div class="box-wrapper">
    <div class="box">
      <div class="lightbar"></div>
      <div class="topLayer"></div>
      <h2>Игра</h2>
    </div>
  </div>
</template>

<style>
.box-wrapper {
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000;
  overflow: hidden;
  animation: animateBox 6s linear;
  animation-fill-mode: forwards;
}
@keyframes animateBox {
  0%,
  90% {
    opacity: 1;
  }
  95% {
    opacity: 0;
  }
  100% {
    opacity: 0;
    visibility: hidden;
    z-index: -1;
  }
}
.box {
  width: 400px;
  height: 250px;
  padding: 20px 0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000;
}
.box h2 {
  color: #fff;
  font-size: 5em;
  font-weight: bold;
  letter-spacing: 0.1em;
  text-shadow: 0 0 10px #00b3ff, 0 0 20px #00b3ff, 0 0 40px #00b3ff,
    0 0 80px #00b3ff, 0 0 100px #00b3ff;
}
.lightbar {
  position: absolute;
  top: 0;
  left: 0;
  width: 10px;
  height: 100%;
  border-radius: 10px;
  background: #fff;
  z-index: 2;
  box-shadow: 0 0 10px #00b3ff, 0 0 20px #00b3ff, 0 0 40px #00b3ff,
    0 0 80px #00b3ff, 0 0 100px #00b3ff;
  animation: animatelightbar 5s linear;
  animation-fill-mode: forwards;
}
@keyframes animatelightbar {
  0%,
  5% {
    transform: scaleY(0) translateX(0);
  }
  10% {
    transform: scaleY(1) translateX(0);
  }
  90% {
    transform: scaleY(1) translateX(calc(400px - 10px));
  }
  95%,
  100% {
    transform: scaleY(0) translateX(calc(400px - 10px));
  }
}
.topLayer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000;
  animation: animatetopLayer 4.5s linear backwards;
}
@keyframes animatetopLayer {
  0%,
  10% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100%);
  }
}
</style>
