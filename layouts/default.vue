<template>
  <div class="default">
    <Nuxt />
  </div>
</template>

<style lang="scss">
html {
  font-family: $generic-fonts-inter;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

.default {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
}

button {
  appearance: none;
  border: none;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
