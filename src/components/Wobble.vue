<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Wobble',
    props: {
        size: {
            type: Number,
            default: 40,
        },
        color: {
            type: String,
            default: 'black',
        },
        speed: {
            type: Number,
            default: 2,
        },
    },
});
</script>

<template>
    <div class="container" :style="{
        '--loader-size': $props.size + 'px',
        '--loader-color': $props.color,
        '--loader-speed': $props.speed + 's',
    }" />
</template>
<style lang="scss" scoped>
.container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: var(--loader-size);
    width: var(--loader-size);
}

.container::before {
    content: '';
    height: 25%;
    width: 25%;
    border-radius: 50%;
    animation: wobble var(--loader-speed) ease-in-out infinite;
    transform: translate(0, calc(var(--loader-size) * -0.4));
    background-color: var(--loader-color);
}

@keyframes wobble {

    0%,
    100% {
        transform: translateX(0);
    }

    50% {
        transform: translateX(calc(var(--loader-size) * 0.75));
    }
}
</style>
