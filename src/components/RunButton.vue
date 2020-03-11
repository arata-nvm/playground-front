<template>
    <div class="run-button-wrapper">
        <button class="run-button" v-text="name" v-on:click="run" />
        <vue-loading class="loading" type="bubbles" color="#333" v-if="isLoading" :size="{ width: '32px', height: '32px' }"></vue-loading>
    </div>
</template>

<script>
import axios from 'axios';
import { VueLoading } from 'vue-loading-template'

const apiUrl = "https://guarded-lowlands-75563.herokuapp.com"

export default {
    name: "RunButton",
    components: {
        VueLoading,
    },
    props: {
        name: String,
        program: String,
        stdin: String,
    },
    data() {
        return {
            isLoading: false,
        }
    },
    methods: {
        run() {
            this.isLoading = true;
            axios.post(apiUrl, {
                input: this.stdin,
                program: this.program,
            }).then((res) => {
                this.isLoading = false;
                if (res['data']['compiler_error'] === '') {
                    this.$emit('received', res['data']['output'])
                } else {
                    this.$emit('received', res['data']['compiler_error'])
                }
            }).catch((e) => {
                this.isLoading = false;
                alert(`Something went wrong. Message: ${e.message}`)
            })
        }
    }
}
</script>

<style scoped>
.run-button-wrapper {
    text-align: left;
    margin-top: 5px;
}
.run-button {
    width: 100px;
    height: 32px;
    border: none;
    border-radius: 2px;
    background-color: #E67745;
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    transition-duration: 0.3s;
}
.run-button:hover {
    background-color: #e69173;
}
.loading {
    display: inline-block;
    vertical-align: middle;
}
</style>