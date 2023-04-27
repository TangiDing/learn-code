<template>
  <div>
    <span class="wordLabel">字数:123</span>
    <editor-content :editor="editor" />
    <div class="menu">
      <div class="menu_item menu_function">
        <span class="iconfont">&#xe618;</span>
        <span class="iconfont">&#xe617;</span>
        <span class="iconfont">&#xe615;</span>
        <span class="iconfont">&#xe616;</span>
      </div>
      <div class="menu_item menu_charPicker">
        <span>,</span>
        <span>。</span>
        <span>“”</span>
        <span>()</span>
        <span>!</span>
        <span>?</span>
        <span>,</span>
        <span>。</span>
        <span>“”</span>
        <span>()</span>
        <span>!</span>
        <span>?</span>
        <span>,</span>
        <span>。</span>
        <span>“”</span>
        <span>()</span>
        <span>!</span>
        <span>?</span>
      </div>
    </div>
  </div>
</template>

<script>
import { Editor, EditorContent } from '@tiptap/vue-3'
import Placeholder from '@tiptap/extension-placeholder'
import StarterKit from '@tiptap/starter-kit'
import Document from '@tiptap/extension-document'

const CustomDocument = Document.extend({
  content: 'heading block*',
})


export default {
  components: {
    EditorContent,
  },

  data() {
    return {
      editor: null,
    }
  },

  mounted() {
    this.editor = new Editor({
      extensions: [
        StarterKit.configure({
          history: false,
        }),
        CustomDocument,
        Placeholder.configure({
          placeholder: ({ node }) => {
            if (node.type.name === 'heading') {
              return '请输入标题'
            }
          },
        }),
      ],
      content: `
        <h1></h1>
        <p></p>
      `,
    })
  },

  beforeUnmount() {
    this.editor.destroy()
  },
}
</script>

<style>
.wordLabel {
  position: fixed;
  z-index: 10;
  right: 10px;
  top: 10px;
  color: #fff;
  font-size: 14px;
}

.menu {
  position: fixed;
  height: 40px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background-color: #000;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.menu_function {
  width: 150px;
  position: relative;
}

.menu_function::after {
  content: '|';
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  color: #ced4db;
}

.menu_charPicker {
  flex: 1;
  overflow-x: scroll;
  text-align: left;
  white-space: nowrap;
}

.menu_charPicker span {
  display: inline-block;
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 30px;
}

.menu_item .iconfont {
  margin: 0 10px;
}

.ProseMirror {
  color: #fff;
  height: 100%;
  text-align: left;
  padding: 20px 10px;
}

.ProseMirror-focused {
  outline: none;
}

.ProseMirror h1 {
  text-align: center;
}

.ProseMirror .is-empty::before {
  content: attr(data-placeholder);
  color: #ced4da;
  pointer-events: none;
  height: 0;
}
</style>