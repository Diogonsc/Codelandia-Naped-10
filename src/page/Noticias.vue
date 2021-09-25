<template>
  <main class="noticias">
    <div class="noticias-container">
      <section class="title-news">
        <h1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis
          neque sed odio.
        </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <span>00 de Julho de 2021</span>
      </section>
      <section class="news-1">
        <div>
          <img src="../assets/img/Vidas.png" alt="Imagem" />
        </div>
        <p id="title-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in
          mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu
          odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec
          ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus
          pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus
          dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet
          gravida sagittis. Ut eleifend ornare leo et auctor.
        </p>
        <p id="title-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in
          mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu
          odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec
          ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus
          pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus
          dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet
          gravida sagittis. Ut eleifend ornare leo et auctor.
        </p>
      </section>
      <section class="news-2">
        <div>
          <img src="../assets/img/Vidas-1.png" alt="" />
        </div>
        <p id="title">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in
          mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu
          odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec
          ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus
          pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus
          dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet
          gravida sagittis. Ut eleifend ornare leo et auctor.
        </p>
      </section>
    </div>
    <Aside />
    <Footer />
  </main>
</template>

<script>
import Aside from "@/components/Aside.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Noticias",
  components: {
    Aside,
    Footer,
  },
};
</script>

<style scoped>
.noticias {
  width: 100%;
}

.noticias-container {
  max-width: 1440px;
  padding: 4rem 4rem 0rem 4rem;
  box-sizing: border-box;
}

.title-news {
  width: 65rem;
}

#title {
  color: #c4c4c4;
  font-family: "inter", sans-serif;
  font-size: 1.4rem;
  font-weight: 400;
  padding-top: 1.88rem;
}

#title-1 {
  color: #c4c4c4;
  font-family: "inter", sans-serif;
  font-size: 1.4rem;
  font-weight: 400;
  padding-top: 1.88rem;
}

#title-2 {
  color: #c4c4c4;
  font-family: "inter", sans-serif;
  font-size: 1.3rem;
  font-weight: 400;
  padding-top: 1.25rem;
}

.news-1 img {
  width: 61.93rem;
  height: 27.68rem;
  padding-top: 1.25rem;
}

.news-2 img {
  width: 61.93rem;
  height: 27.68rem;
  padding-top: 1.25rem;
}

.news-2 p {
  padding-top: 1.25rem;
}

h1 {
  color: #fff;
  font-family: "lexend deca", sans-serif;
  font-size: 2.25rem;
  font-weight: 500;
  padding-bottom: 2.5rem;
}

p {
  color: #c4c4c4;
  font-family: "inter", sans-serif;
  font-size: 1.5rem;
  font-weight: 400;
  padding-bottom: 1.25rem;
}

span {
  color: #c4c4c4;
  font-family: "inter", sans-serif;
  font-size: 1.12rem;
  font-weight: 400;
}

@media screen and (min-width: 1440px) {
  .noticias-container {
    padding: 6rem 11rem 0rem 11rem;
  }
  
#title {
  font-size: 1.3rem;
}

#title-1 {
  font-size: 1.3rem;
}

#title-2 {
  font-size: 1.3rem;
}
}
</style>
