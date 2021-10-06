<template>
  <div>
    <h2>본 컨텐츠가<br>직장 내 괴롭힘을 이해하는 데<br>도움이 되었나요?</h2>
    <div id="buttons">
      <button>네,도움이 되었어요:)</button>
      <button>아뇨,별로 안됐어요:(</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cartoon_23"
}
</script>

<style scoped>
  h2 {
    text-align: center;
    position: absolute;
    top: 25vh;
    width: 100vw;
  }
  #buttons {
    position: absolute;
    bottom: 10vh;
    width: 100vw;
    height: 30vh;
  }
  button {
    width: 60%;
    height: 10vh;
    margin: 1vh;
    border-radius: 15px;
  }
</style>