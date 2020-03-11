<template>
    <div class="editor-wrapper">
        <prism-editor class="editor" v-model="code" :line-numbers="true" />
    </div>
</template>

<script>
import PrismEditor from 'vue-prism-editor';

export default {
    name: "Editor",
    components: {
        PrismEditor,
    },
    props: {
        program: String,
    },
    computed: {
        code: {
            get() {
                return this.program;
            },
            set(value) {
                this.$emit('input', value)
            }
        }
    },
}
</script>

<style scoped>
.editor {
    /*height: 600px;*/
}
</style>