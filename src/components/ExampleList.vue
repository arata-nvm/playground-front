<template>
    <div class="example-list-wrapper">
        <label>Examples: </label>
        <select v-model="selection">
            <option v-for="option in options" :key="option.name" :value="option.program">
                {{ option.name }}
            </option>
        </select>
        {{ selection }}
    </div>
</template>

<script>
import * as examples from './examples'

export default {
    name: "ExampleList",
    params: {
        selected: String,
    },
    data() {
        return {
            options: examples,
        }
    },
    computed: {
        selection: {
            get() {
                return this.selected;
            },
            set(value) {
                this.$emit('input', value)
            }
        }
    }
}
</script>

<style scoped>
.example-list-wrapper {
    text-align: left;
    margin: 5px;
}
</style>