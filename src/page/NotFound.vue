<template>
  <div class="not-found">
        <div class="notFound-container">
          <div class="not-1">
            <h1>
              Tenho más notícias para você!
            </h1>
            <p>
              A página que você está procurando pode ter sido removida ou está temporariamente indisponível.
            </p>
            <button >Voltar a home</button>
          </div>
          <div class="not-2">
           <div>
              <img src="../assets/img/nav-404.png" alt="">
           </div>
           <p id="ups">
             Ups! Você chegou no espaço... volte para o mundo nerd!
           </p>
          </div>
        </div>
      </div>
</template>

<script>
export default {};
</script>

<style scoped>
  h1{
    width: 40rem;
    color: #fefbfb;
    font-family: "lexend deca", sans-serif;
    font-weight: 400;
    font-size: 3.75rem;
    padding-bottom: 1rem;;
  }
  p{
    width:25rem;
    color: #c4c4c4;
    font-family: "inter", sans-serif;
    font-weight: 400;
    font-size: 1.25rem;
    padding-bottom: 1rem;
  }

  button {
    width: 9.37rem;
    padding: 0.62rem;
    border-radius: 3.12rem;
    border: none;
    color: #fefbfb;
    opacity: 0.6;
    background-color: #8257e6;
  }
  button:hover {
    opacity: 1;
  }
  .not-found{
    padding: 0rem 3rem 0rem 3rem;
  }
  #ups{
    width: 20rem;
    text-align: center;
    color: #c4c4c4;
    font-family: "inter", sans-serif;
    font-weight: 400;
    font-size: 1.25rem;
    padding-top: 2rem;
  }
  .not-1{
    padding-top: 5rem;
  }
  .not-2{
    padding-top: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .notFound-container{
    display: flex;
  }

  @media screen and (min-width: 1440px){
    .notFound-container{
      width:80%;
      margin-left: auto;
      margin-right: auto;
      padding-top: 5rem;
    }
    .not-1{
      width:37rem;
    }
  }
</style>
