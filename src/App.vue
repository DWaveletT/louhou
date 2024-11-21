<template>
    <header>
        <h2 class="title">Louhou Project</h2>

        <div class="description">
            <p></p>
        </div>
    </header>

    <div class="main-container">
        <canvas class="game" ref="canvas" width="600" height="480" />

        <div class="guide">

        </div>
    </div>

</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

import { start } from './louhou/main';

const canvas = ref<HTMLCanvasElement | null>(null);

onMounted(() => {
    if(canvas.value)
        start(canvas.value);
})

</script>

<style lang="scss" scoped>

header {
    background-color: #f5f5f5;
    height: 4em;
    padding: 1em 2em;
}

.game {
    display: block;
    width: 800px;
    height: 600px;
    margin: 1em auto;

    border: 1px solid black;
}

</style>