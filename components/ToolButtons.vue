<template>
  <div>
    <button class="index-button" @click="$emit('createNewMemo')">New Memo</button>
    <button class="index-button" @click="$emit('importMD')">Import Memo</button>
    <button class="index-button" @click="$emit('exportMD')">Save Memo</button>
    <button class="index-button" @click="$emit('importPDF')">Import PDF</button>
  </div>
</template>

<style lang="scss">
.index-button {
  vertical-align: middle;
  background: $black;
  border: 2px $black solid;
  padding: 5px 15px;
  margin-left: 5px;
  border-radius: 3px;
  box-shadow: 0 0 10px 0 rgba($color: $black, $alpha: 0.25);
  color: $completely-white;
  font-family: $generic-fonts-inter;
  font-size: 15px;
  transition: 0.2s;
  &:hover {
    opacity: 0.8;
    transition: 0.2s;
  }
}
</style>
