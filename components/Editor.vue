<template>
  <textarea ref="textarea" class="textarea w-100" draggable="false"></textarea>
</template>

<script lang="ts">
import Vue from 'vue';
import * as HyperMD from 'hypermd';

export default Vue.extend({
  data(): any {
    return {
      textarea: null,
      editor: null,
    };
  },
  async mounted() {
    await this.$nextTick();
    const textarea: HTMLTextAreaElement | null = this.$refs.textarea as HTMLTextAreaElement;
    this.textarea = textarea;
    if (!this.textarea) throw new Error('textarea not found');
    const editor: any = HyperMD.fromTextArea(this.textarea, {
      lineNumbers: false,
      mode: {
        name: 'hypermd',
        hashtag: true,
        highlightFormatting: true,
      }
    });
    this.editor = editor;
    const mdText: string | null = localStorage.getItem('mdText');
    if (!mdText) return;
    this.editor.setValue(mdText);
  },
  methods: {
    clear() {
      this.editor.setValue('');
    },
    getValue() {
      return this.editor.getValue();
    }
  }
});
</script>

<style lang="scss">
.textarea {
  padding: 10px;
  resize: none;
  height: 100%;
  font-size: 15px;
  &:focus {
    outline: none;
  }
}
.CodeMirror {
  font-family: $generic-fonts-inter;
  padding: 10px;
  resize: none;
  border-radius: 3px;
  border: 0.5px $gray solid;
  height: 100%;
  font-size: 15px;
}
.CodeMirror-gutters,
.CodeMirror-foldgutter-open {
  display: none;
}
</style>
