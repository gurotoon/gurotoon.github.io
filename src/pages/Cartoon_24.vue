<template>
  <div>
    <h2>끝까지 읽어주셔서<br>감사합니다</h2>
    <div id="buttons">
      <button @click="kakao_share">지인들에게 링크 공유하기</button>
      <button>나의 직장 내 괴롭힘 피해경험 공유하기</button>
    </div>
    <div class="fb-share-button" data-href="https://jykim99.github.io/gurotoon_production/" data-layout="button" data-size="large"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fjykim99.github.io%2Fgurotoon_production%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">공유</a></div>
  </div>
</template>

<script>

export default {
  name: "Cartoon_24",
  methods: {
    kakao_share() {
      this.$kakao.Link.sendDefault({
        objectType: 'text',
        text:
            '구로툰 공유 테스트',
        link: {
          mobileWebUrl:
              'https://jykim99.github.io/gurotoon_production/',
          webUrl:
              'https://jykim99.github.io/gurotoon_production/',
        },
      })
    }
  },
  head: {
    script: [
      {
        type: 'text/javascript',
        src: 'https://connect.facebook.net/ko_KR/sdk.js#xfbml=1&version=v12.0',
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
</style>