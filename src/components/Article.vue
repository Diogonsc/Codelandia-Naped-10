<template>
  <article class="main-article">
    <div class="article-container">
      <section class="article-section">
        <div class="article-geral">
          <div class="pain">
            <div class="pain-img"></div>
            <div class="description">
              <h4>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                eros tellus, malesuada et velit in, blandit molestie dolor.
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                eros tellus, malesuada et velit in, blandit molestie dolor...
              </p>
              <span>00/00/0000</span>
              <button class="btn-description" @click="lerMais()">Ler notícias</button>
            </div>
          </div>
          <div class="deed-pool">
            <div class="deedpool-img"></div>
            <div class="description">
              <h4>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                eros tellus, malesuada et velit in, blandit molestie dolor.
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                eros tellus, malesuada et velit in, blandit molestie dolor...
              </p>
              <span>00/00/0000</span>
              <button class="btn-description" @click="lerMais()">Ler notícias</button>
            </div>
          </div>
          <div class="minecraft">
            <div class="minecraft-img"></div>
            <div class="description">
              <h4>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                eros tellus, malesuada et velit in, blandit molestie dolor.
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                eros tellus, malesuada et velit in, blandit molestie dolor...
              </p>
              <span>00/00/0000</span>
              <button class="btn-description" @click="lerMais()">Ler notícias</button>
            </div>
          </div>
          <div class="harry-potter">
            <div class="harry-img"></div>
            <div class="description">
              <h4>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                eros tellus, malesuada et velit in, blandit molestie dolor.
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                eros tellus, malesuada et velit in, blandit molestie dolor...
              </p>
              <span>00/00/0000</span>
              <button class="btn-description" @click="lerMais()">Ler notícias</button>
            </div>
          </div>
          <div class="super-natural">
            <div class="supernatural-img"></div>
            <div class="description">
              <h4>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                eros tellus, malesuada et velit in, blandit molestie dolor.
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                eros tellus, malesuada et velit in, blandit molestie dolor...
              </p>
              <span>00/00/0000</span>
              <button class="btn-description" @click="lerMais()">Ler notícias</button>
            </div>
          </div>
          <div class="dragon-ball">
            <div class="dragon-ball-img"></div>
            <div class="description">
              <h4>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                eros tellus, malesuada et velit in, blandit molestie dolor.
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                eros tellus, malesuada et velit in, blandit molestie dolor...
              </p>
              <span>00/00/0000</span>
              <button class="btn-description" @click="lerMais()">Ler notícias</button>
            </div>
          </div>
          <div class="one-piece">
            <div class="one-piece-img"></div>
            <div class="description">
              <h4>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                eros tellus, malesuada et velit in, blandit molestie dolor.
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                eros tellus, malesuada et velit in, blandit molestie dolor...
              </p>
              <span>00/00/0000</span>
              <button class="btn-description" @click="lerMais()">Ler notícias</button>
            </div>
          </div>
          <div class="revisions">
            <div class="revisions-img"></div>
            <div class="description">
              <h4>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                eros tellus, malesuada et velit in, blandit molestie dolor.
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                eros tellus, malesuada et velit in, blandit molestie dolor...
              </p>
              <span>00/00/0000</span>
              <button class="btn-description" @click="lerMais()">Ler notícias</button>
            </div>
          </div>
        </div>
        <div class="article-geral-1">
          <h2>Lorem ipsum dolor</h2>
          <hr />
          <div class="chihiro-img">
            <button id="btn">Lorem</button>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              eros tellus, malesuada et velit in, blandit molestie dolor.
            </p>
          </div>
          <div class="rede-social-img">
            <button id="btn">Lorem</button>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              eros tellus, malesuada et velit in, blandit molestie dolor.
            </p>
          </div>
          <div class="kratos-img">
            <button id="btn">Lorem</button>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              eros tellus, malesuada et velit in, blandit molestie dolor.
            </p>
          </div>
        </div>
      </section>
    </div>
  </article>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    lerMais() {
      this.$router.push({ name: "Noticias" });
    }
  }
};
</script>

<style scoped>
.main-article {
  width: 100%;
}

.article-container {
  padding: 4rem 4rem 0rem 4rem;
  max-width: 1440px;
  max-height: 900px;
  display: grid;
  grid-template-areas: "pain  deed  mine  harry  super dragon onde, revisions";
}

.article-section {
  display: flex;
}

.article-geral {
  width: 39.5rem;
  height: 57rem;
  overflow-x: hidden;
  overflow-y: scroll;
}

.article-geral::-webkit-scrollbar {
  width: 0.5rem;
  border-radius: 4px;
  background-color: #282830;
}

.article-geral::-webkit-scrollbar-thumb {
  background-color: #8257e6;
  border-radius: 4px;
}

.pain-img {
  width: 12.5rem;
  height: 9.44rem;
  background: linear-gradient(360deg, #13131f 0%, rgba(19, 19, 31, 0) 100%),
    url(../assets/img/pain.png);
}

.pain {
  display: flex;
  grid-area: pain;
  width: 45.62rem;
  height: 9.44rem;
  box-sizing: border-box;
  margin-bottom: 2.5rem;
}

.deedpool-img {
  width: 12.5rem;
  height: 9.44rem;
  background: linear-gradient(360deg, #13131f 0%, rgba(19, 19, 31, 0) 100%),
    url(../assets/img/deed-pool.png);
}

.deed-pool {
  grid-area: deed;
  width: 45.62rem;
  display: flex;
  margin-bottom: 2.5rem;
}

.minecraft-img {
  width: 12.5rem;
  height: 9.44rem;
  background: linear-gradient(360deg, #13131f 0%, rgba(19, 19, 31, 0) 100%),
    url(../assets/img/minecraft-vendas\ 1.png);
}

.minecraft {
  grid-area: mine;
  width: 45.62rem;
  display: flex;
  margin-bottom: 2.5rem;
}

.harry-img {
  width: 12.5rem;
  height: 9.44rem;
  background: linear-gradient(360deg, #13131f 0%, rgba(19, 19, 31, 0) 100%),
    url(../assets/img/harry-potter-wallpapers-desktop-86788224\ 1.png);
}

.harry-potter {
  grid-area: harry;
  width: 45.62rem;
  display: flex;
  margin-bottom: 2.5rem;
}

.supernatural-img {
  width: 12.5rem;
  height: 9.44rem;
  background: linear-gradient(360deg, #13131f 0%, rgba(19, 19, 31, 0) 100%),
    url(../assets/img/supernatural\ 1.png);
}

.super-natural {
  grid-area: super;
  width: 45.62rem;
  display: flex;
}

.dragon-ball-img {
  width: 12.5rem;
  height: 9.44rem;
  background: linear-gradient(360deg, #13131f 0%, rgba(19, 19, 31, 0) 100%),
    url(../assets/img/dragon-ball.png);
}

.dragon-ball {
  grid-area: dragon;
  width: 45.62rem;
  display: flex;
}

.one-piece-img {
  width: 12.5rem;
  height: 9.44rem;
  background: linear-gradient(360deg, #13131f 0%, rgba(19, 19, 31, 0) 100%),
    url(../assets/img/one-piece-luffy.png);
}

.one-piece {
  grid-area: one;
  width: 45.62rem;
  display: flex;
}

.revisions-img {
  width: 12.5rem;
  height: 9.44rem;
  background: linear-gradient(360deg, #13131f 0%, rgba(19, 19, 31, 0) 100%),
    url(../assets/img/revisions.png);
}

.revisions {
  grid-area: revisions;
  width: 45.62rem;
  display: flex;
}

.description {
  display: flex;
  flex-direction: column;
  padding: 0.65rem 1.25rem 0rem 1.25rem;
}

.description > h4 {
  width: 22rem;
  color: #fefbfb;
  font-family: "lexend deca", sans-serif;
  font-weight: 400;
  font-size: 0.8rem;
  margin-bottom: 0.90rem;
}

.description > p {
  width: 17rem;
  color: #c4c4c4;
  font-family: "inter", sans-serif;
  font-weight: 400;
  font-size: 0.6rem;
  margin-bottom: 0.90rem;
}

.description > span {
  color: #c4c4c4;
  font-family: "inter", sans-serif;
  font-weight: 600;
  font-size: 0.6rem;
}

.btn-description {
  width: 6.25rem;
  height: 1.56rem;
  font-family: "inter", sans-serif;
  font-weight: 600;
  font-size: 0.8rem;
  border-radius: 3px;
  color: #fefbfb;
  opacity: 0.7;
  background-color: #8257e6;
  border: none;
  margin-top: 0.90rem;
}

.btn-description:hover {
  opacity: 1;
}

.article-geral-1 {
  margin-left: 1.2rem;
}

.article-geral-1 > h2 {
  color: #fefbfb;
  margin-bottom: 0.62rem;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "lexend deca", sans-serif;
}

.article-geral-1 p{
  width: 16.5rem;
  position: relative;
  color: #fefbfb;
  font-size: 0.8rem;
  font-weight: 400;
  font-family: "lexend deca", sans-serif;
  top: 9.37rem;
  left: 1vw;
}

.article-geral-1 > hr {
  width: 15.62rem;
  border-color: #8257e6;
}

.article-geral-1 #btn {
   position: relative;
  width: 4vw;
  height: 2.5vh;
  font-size: 0.6rem;
  font-family: "lexend deca", sans-serif;
  background-color: #8257e6;
  border-radius: 3px;
  border: none;
  color: #fefbfb;
  top: 0.50rem;
  left: 0.50rem;
}

.chihiro-img {
  width: 21.12rem;
  height: 15.62rem;
  margin-top: 1.25rem;
  background: linear-gradient(360deg, #13131f 0%, rgba(19, 19, 31, 0) 100%),
    url(../assets/img/A-Viagem-de-Chihiro-chihiro-e-haku\ 1.png);
}

.rede-social-img {
   width: 21.12rem;
  height: 15.62rem;
  margin-top: 2.5rem;
  background: linear-gradient(360deg, #13131f 0%, rgba(19, 19, 31, 0) 100%),
    url(../assets/img/cena-do-filme-a-rede-social-2010-1547503577708_v2_1920x1204\ 1.png);
}

.kratos-img {
  width: 21.12rem;
  height: 15.62rem;
  margin-top: 2.5rem;
  background: linear-gradient(360deg, #13131f 0%, rgba(19, 19, 31, 0) 100%),
    url(../assets/img/NarTrailer_Print09.max-1920x1200\ 1.png);
}

@media screen and (min-width: 1440px) {
  .article-container {
    padding: 4rem 7rem 0rem 7rem;
  }

  .article-geral {
    width: 45.5rem;
  }
}

@media screen and (max-width: 1024px) {
   .article-geral{
     width: 27.5rem;
   }
}

</style>
