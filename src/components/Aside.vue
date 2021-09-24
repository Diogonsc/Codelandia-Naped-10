<template>
  <aside class="main-aside">
    <div class="aside-container">
      <section class="aside-intro">
        <h2>Notícias mais recentes</h2>
        <hr />
        <div class="aside-image">
          <div class="img-geral">
            <div class="naoko-img">
              <button id="btn">Lorem</button>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                eros tellus, malesuada et velit in, blandit molestie dolor.
              </p>
            </div>
            <div class="gta-img">
              <button id="btn">Lorem</button>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                eros tellus, malesuada et velit in, blandit molestie dolor.
              </p>
            </div>
            <div class="vikings-img">
              <button id="btn">Lorem</button>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                eros tellus, malesuada et velit in, blandit molestie dolor.
              </p>
            </div>
            <div class="soul-img">
              <button id="btn">Lorem</button>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                eros tellus, malesuada et velit in, blandit molestie dolor.
              </p>
            </div>
            <div class="your-img">
              <button id="btn">Lorem</button>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                eros tellus, malesuada et velit in, blandit molestie dolor.
              </p>
            </div>
            <div class="key-img">
              <button id="btn">Lorem</button>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                eros tellus, malesuada et velit in, blandit molestie dolor.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </aside>
</template>

<script>
export default {};
</script>

<style scoped>
.main-aside {
  width: 100%;
}

.aside-container {
  max-width: 1440px;
  padding: 6rem 4rem 0rem 4rem;
}

.aside-intro > h2 {
  color: #fefbfb;
  margin-bottom: 0,63rem;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "lexend deca", sans-serif;
}

.aside-intro > hr {
  width: 18.75rem;
  border-color: #8257e6;
}

.aside-image {
  display: grid;
  grid-template-areas: "naoko  gta  vikings  soul  your  key";
}

.img-geral {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.img-geral p {
  height: 2vh;
  width: 20vw;
  position: relative;
  color: #fefbfb;
  font-size: 0.8rem;
  font-weight: 400;
  font-family: "lexend deca", sans-serif;
  top: 150px;
  left: 1vw;
}

.img-geral #btn {
  position: relative;
  width: 4vw;
  height: 2.5vh;
  font-size: 0.6rem;
  font-family: "lexend deca", sans-serif;
  background-color: #8257e6;
  border-radius: 3px;
  border: none;
  color: #fefbfb;
  top: 8px;
  left: 1.5vh;
}

.naoko-img {
  grid-area: naoko;
  width: 21.12rem;
  height: 15.62rem;
  margin-bottom: 1.25rem;
  margin-top: 2.5rem;
  background: linear-gradient(360deg, #13131f 0%, rgba(19, 19, 31, 0) 100%),
    url(../assets/img/Vidas-ao-Vento-Naoko.png);
}

.gta-img {
 width: 21.12rem;
  height: 15.62rem;
  margin-bottom: 1.25rem;
  margin-top: 2.5rem;
  background: linear-gradient(360deg, #13131f 0%, rgba(19, 19, 31, 0) 100%),
    url(../assets/img/GTA-5-PlayStation-5-Rockstar-Games-Sony-2020.png);
}

.vikings-img {
  grid-area: vikings;
  width: 21.12rem;
  height: 15.62rem;
  margin-bottom: 1.25rem;
  margin-top: 2.5rem;
  background: linear-gradient(360deg, #13131f 0%, rgba(19, 19, 31, 0) 100%),
    url(../assets/img/Vikings-Série-Derivada.png);
}

.soul-img {
  grid-area: soul;
  width: 21.12rem;
  height: 15.62rem;
  margin-bottom: 1.25rem;
  margin-top: 1.25rem;
  background: linear-gradient(360deg, #13131f 0%, rgba(19, 19, 31, 0) 100%),
    url(../assets/img/soul-disney-pixar-1220-1400x800-5.png);
}

.your-img {
  grid-area: your;
   width: 21.12rem;
  height: 15.62rem;
  margin-bottom: 1.25rem;
  margin-top: 1.25rem;
  background: linear-gradient(360deg, #13131f 0%, rgba(19, 19, 31, 0) 100%),
    url(../assets/img/your-name-2\ 1.png);
}

.key-img {
  grid-area: key;
   width: 21.12rem;
  height: 15.62rem;
  margin-bottom: 1.25rem;
  margin-top: 1.25rem;
  background: linear-gradient(360deg, #13131f 0%, rgba(19, 19, 31, 0) 100%),
    url(../assets/img/key-visual\ 1.png);
}

@media screen and (min-width: 1440px) {
  .aside-container {
    padding: 0rem 11rem;
     padding: 6rem 11rem 0rem 11rem;
  }
}
</style>
