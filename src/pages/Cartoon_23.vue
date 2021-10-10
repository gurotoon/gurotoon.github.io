<template>
  <div>
    <div id="wpac-rating"></div>
    <a href="https://widgetpack.com" class="wpac-cr">Star Rating WIDGET PACK</a>
    <h2>본 컨텐츠가<br>직장 내 괴롭힘을 이해하는 데<br>도움이 되었나요?</h2>
    <div id="buttons">
      <button>네,도움이 되었어요:)</button>
      <button>아뇨,별로 안됐어요:(</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cartoon_23",
  methods: {
    //todo
  },
  head: {
    script: [
      {
        type: 'text/javascript',
        src: 'wpac_init = window.wpac_init || [];\n' +
            '          wpac_init.push({widget: \'Rating\', id: 32504});\n' +
            '          (function() {\n' +
            '              if (\'WIDGETPACK_LOADED\' in window) return;\n' +
            '              WIDGETPACK_LOADED = true;\n' +
            '              var mc = document.createElement(\'script\');\n' +
            '              mc.type = \'text/javascript\';\n' +
            '              mc.async = true;\n' +
            '              mc.src = \'https://embed.widgetpack.com/widget.js\';\n' +
            '              var s = document.getElementsByTagName(\'script\')[0]; s.parentNode.insertBefore(mc, s.nextSibling);\n' +
            '          })();',
        async: true,
      }
    ]
  }
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
  .rw-ui-container{
    position: absolute;
    top: 0;
    left: 0;
    width: 50vw;
    height: 10vh;
  }
</style>