<template>
  <div class="row w-100 h-100">
    <div class="col-7 row index-left d-flex align-items-center m-0 p-0">
      <div class="col-12 index-left-logo d-flex align-items-center justify-content-between"><div><Logo /></div><div><button class="index-button">Export</button></div></div>
      <div class="col-12 index-left-textarea"><textarea ref="textarea" class="w-100 index-left-textarea-textarea" draggable="false" @keyup="parseMD"></textarea></div>
    </div>
    <div class="col-5 index-right d-flex justify-content-center align-items-center m-0 p-0">
      <button class="index-button" @click="importPDF">Import PDF</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import * as HyperMD from 'hypermd';

interface opts {
  mimeTypes: string[],
  multiple: boolean,
  description: string
}

interface data {
  textarea: HTMLTextAreaElement | null;
}

export default Vue.extend({
  data(): data {
    return { textarea: null };
  },
  mounted() {
    this.$nextTick(() => {
      const textarea: HTMLTextAreaElement | null = this.$refs.textarea as HTMLTextAreaElement;
      this.textarea = textarea;
    });
  },
  methods: {
    importPDF() {
      const opts: opts = {
        mimeTypes: ['application/pdf'],
        multiple: false,
        description: 'PDF Files'
      };
      console.log(opts);
    },
    parseMD() {
      if (!this.textarea) throw new Error('textarea not found');
      HyperMD.fromTextArea(this.textarea, {
        lineNumbers: false,
        mode: {
          name: 'hypermd',

          /* mode options goes here */
          hashtag: true, // example. enable hashtag
        }
      });
    }
  }
});
</script>

<style lang="scss">
.index-left {
  height: calc(100vh - 20px);
  &-logo {
    margin-left: 10px;
    height: 60px;
  }
  &-textarea {
    margin-left: 10px;
    padding-top: 5px;
    height: calc(100% - 60px - 5px);
    &-textarea {
      padding: 7px;
      resize: none;
      border-radius: 5px;
      border: 2px $purple solid;
      height: 100%;
      &:focus {
        outline: none;
      }
    }
  }
}
.index-button {
  background: $purple;
  border-radius: 5px;
  padding: 8px 20px;
  color: $completely-white;
  font-family: $generic-fonts-inter;
  font-weight: bold;
  font-size: 15px;
}

.CodeMirror {
  font-family: $generic-fonts-inter;
  padding: 7px;
  resize: none;
  border-radius: 5px;
  border: 2px $purple solid;
  height: 100%;
}
.CodeMirror-gutters,
.CodeMirror-foldgutter-open {
  display: none;
}
</style>
