<template>
    <div class="textarea-wrapper">
        <label class="textarea-label" :for="label">{{ label }}</label>
        <textarea class="textarea-box" v-model="content" :id="label" :readonly="readOnly" />
    </div>
</template>

<script>
export default {
    name: "TextArea",
    props: {
        label: String,
        content: String,
        readOnly: Boolean,
    },
    computed: {
        text: {
            get() {
                return this.content;
            },
            set(value) {
                this.$emit('input', value)
            }
        }
    }
}
</script>

<style scoped>
.textarea-wrapper {
    border: thin solid #bbbbbb;
    border-radius: 2px;
    padding: 10px;
    margin-top: 5px;
    text-align: left;
}
.textarea-label {
    margin-top: 0;
    margin-bottom: 5px;
}
.textarea-box {
    width: 100%;
    height: 100px;
    box-sizing: border-box;
}
</style>