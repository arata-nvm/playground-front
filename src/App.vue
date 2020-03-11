<template>
  <div id="app">
    <Header />
    <ExampleList :selected="program" @input="program = $event"/>
    <Editor :program="program" @input="program = $event"/>
    <RunButton name="Run" :program="program" :stdin="stdin" @received="output = $event"/>
    <TextArea label="Stdin" :content="stdin" @input="stdin = $event" />
    <TextArea label="Output" :content="output" @input="output = $event" :read-only="true" />
    <Footer />
  </div>
</template>
<script>
import Header from "./components/Header";
import Editor from "./components/Editor";
import TextArea from "./components/TextArea";
import RunButton from "./components/RunButton";
import ExampleList from "./components/ExampleList";
import Footer from "./components/Footer";

export default {
  name: 'visket-playground',
  components: {
    Footer,
    ExampleList,
    RunButton,
    Header,
    Editor,
    TextArea,
  },
  data() {
    return {
      program: "import \"std\"\nfun main() {\n  println(\"Hello World!\")\n}",
      stdin: "",
      output: "",
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>
