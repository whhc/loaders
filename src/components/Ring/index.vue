<script setup>

const props = defineProps({
    size: number,
    color: String,
    lineWeight: number,
    speed: number
})
</script>
<template>
    <svg
        :height="props.size || 40"
        :width="props.size || 40"
        className="container"
        viewBox="25 25 50 50"
        :style="{'--loader-size': props.size + 'px', '--loader-color': props.color || 'black', '--loader-speed': props.speed || 2 }"
    >
    <circle cs="50" cy="50" r="20" :strokeWidth="props.lineWeight || 5"></circle>
    </svg>
</template>
<style lang="scss">
.container {
  height: var(--loader-size);
  width: var(--loader-size);
  vertical-align: middle;
  transform-origin: center;
  animation: rotate var(--loader-speed) linear infinite;
  will-change: transform;
}

.container circle {
  fill: none;
  stroke: var(--loader-color);
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  stroke-linecap: round;
  animation: stretch calc(var(--loader-speed) * 0.75) ease-in-out infinite;
  will-change: stroke-dasharray, stroke-dashoffset;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes stretch {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 200;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dashoffset: -124px;
  }
}
</style>