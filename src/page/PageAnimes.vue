<template>
  <main class="banner">
    <div class="banner-conteiner">
      <div id="banner-main">
        <section class="banner-principal">
          <div id="img-banner">
            <div class="descripiton">
              <h1>Animes</h1>
              <p>
                O Naped pode ser sua fonte de informações sobre 
              </p>
              <p>o mundo nerd e
                outros assuntos relacionados.</p>
            </div>
          </div>
        </section>
      </div>
      <div id="search-page">
        <section class="search">
          <form class="search-container">
            <input
              type="text"
              id="search-bar"
              placeholder="Quer ajuda na procura? Pesquise aqui"
            />
            <a href="#"> <i class="fas fa-search search-icon"></i></a>
          </form>
        </section>
      </div>
    </div>
    <CardAnimes />
    <Footer />
  </main>
</template>

<script>
import CardAnimes from "@/components/CardAnimes.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "PageAnimes",
  components: {
    CardAnimes,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
h1 {
  color: #fefbfb;
  font-family: "lexend deca", sans-serif;
  font-size: 3.2rem;
  font-weight: 400;
  line-height: 4rem;
}

p {
  color: #c4c4c4;
  font-family: "inter", sans-serif;
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 2rem;
}

.banner-conteiner {
  max-width: 1440px;
  padding: 4rem 4rem 0rem 4rem;
}

#img-banner {
  width: 100%;
  height: 18.75rem;
  background: linear-gradient(90deg, rgba(19,19,31,1) 10%, rgba(19,19,32,0) 81%),url(../assets/img/naruto-tobi.png);
  background-repeat: no-repeat;
}

.descripiton{
    padding: 4rem 4rem 0rem 4rem;
}

.search-container {
  width: 100%;
  display: block;
  margin: 0 auto;
}

input#search-bar {
  margin: 2rem auto;
  width: 97%;
  padding-left: 2rem;
  height: 45px;
  font-size: 1rem;
  background-color: #282830;
  border: none;
  outline: none;
  &:focus {
    border: 1px solid #008abf;
    transition: 0.35s ease;
    color: #008abf;
    &::-webkit-input-placeholder {
      transition: opacity 0.45s ease;
      opacity: 0;
    }
    &::-moz-placeholder {
      transition: opacity 0.45s ease;
      opacity: 0;
    }
    &:-ms-placeholder {
      transition: opacity 0.45s ease;
      opacity: 0;
    }
  }
}

.search-icon {
  position: relative;
  float: right;
  width: 75px;
  height: 75px;
  top: -60px;
  right: -40px;
  color: #989898;
}

.search-icon:hover {
   color: #008abf;
}

@media screen and (min-width: 1440px) {

  .banner{
    padding: 0rem 2rem;
  }

  input#search-bar{
      width: 97%;
  }
  .search-icon{
      right: -15px;
  }
}


</style>
