<template>
  <editor-content :editor="editor" />
</template>
  
<script>
import { Editor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import Collaboration from "@tiptap/extension-collaboration"
import * as Y from 'yjs'
import { HocuspocusProvider } from "@hocuspocus/provider"

const yDoc = new Y.Doc();

new HocuspocusProvider({
  url: 'ws://172.30.95.65:1234',
  name: 'example-document',
})

export default {
  components: {
    EditorContent,
  },

  data() {
    return {
      editor: null,
      content: 'example text',
    }
  },

  mounted() {
    this.editor = new Editor({
      content: this.content,
      extensions: [
        StarterKit.configure({
          history: false,
        }),
        Collaboration.configure({
          document: yDoc
        })
      ],
      autofocus: true,
      editable: true,
      injectCSS: false,
      onUpdate: () => {
        const content = this.editor.getHTML();
        this.content = content
      }
    })
  },

  beforeUnmount() {
    this.editor.destroy()
  },
}
</script>