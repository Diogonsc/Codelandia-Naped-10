<template>
  <div class="cards">
    <div class="card-container">
      <ul class="pagination"></ul>
      <li class="card card-0">
        <a href="">
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros
          tellus, malesuada et velit in, blandit molestie dolor.
        </p>
        </a>
      </li>
      <li class="card card-1">
        <a href="">
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros
          tellus, malesuada et velit in, blandit molestie dolor.
        </p>
        </a>
      </li>
      <li class="card card-2">
        <a href="">
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros
          tellus, malesuada et velit in, blandit molestie dolor.
        </p>
        </a>
      </li>
      <li class="card card-3">
        <a href="">
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros
          tellus, malesuada et velit in, blandit molestie dolor.
        </p>
        </a>
      </li>
      <li class="card card-4">
        <a href="">
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros
          tellus, malesuada et velit in, blandit molestie dolor.
        </p>
        </a>
      </li>
      <li class="card card-5">
        <a href="">
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros
          tellus, malesuada et velit in, blandit molestie dolor.
        </p>
        </a>
      </li>
      <li class="card card-6">
        <a href="">
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros
          tellus, malesuada et velit in, blandit molestie dolor.
        </p>
        </a>
      </li>
      <li class="card card-7">
        <a href="">
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros
          tellus, malesuada et velit in, blandit molestie dolor.
        </p>
        </a>
      </li>
      <li class="card card-8">
         <a href="">
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros
          tellus, malesuada et velit in, blandit molestie dolor.
        </p>
        </a>
      </li>
    </div>
    <div class="pagination-ul">
      <ul class="pagination">
      <li><a href="#">«</a></li>
      <li><a href="#">1</a></li>
      <li><a class="active" href="#">2</a></li>
      <li><a href="#">3</a></li>
      <li><a href="#">4</a></li>
      <li><a href="#">5</a></li>
      <li><a href="#">6</a></li>
      <li><a href="#">7</a></li>
      <li><a href="#">»</a></li>
    </ul>
    </div>
  </div>
</template>

<script>
export default {}
  
</script>

<style>
.card-container {
display: flex;
    justify-content:center;
    width: 100%;
  flex-wrap: wrap;
}

.card {
  background: #fff;
  border-radius: 2px;
  display: inline-block;
  height: 250px;
  margin: 1.2rem;
  position: relative;
  width: 300px;
}

.card p {
  height: 2vh;
  width: 20vw;
  position: relative;
  color: #fefbfb;
  font-size: 0.75rem;
  font-weight: 400;
  font-family: "lexend deca", sans-serif;
  top: 200px;
  left: 1vw;
}

.card:hover {
  box-shadow: 0 14px 28px rgba(133, 130, 130, 0.25),
    0 10px 10px rgba(133, 130, 130, 0.22);
}

.card-0 {
  background: linear-gradient(360deg, #13131f 0%, rgba(19, 19, 31, 0) 100%),
    url(../assets/img/Vidas-ao-Vento-Naoko.png);
}

.card-1 {
  background: linear-gradient(360deg, #13131f 0%, rgba(19, 19, 31, 0) 100%),
    url(../assets/img/kid-goku-dragon-ball-thumb.png);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.card-2 {
  background: linear-gradient(360deg, #13131f 0%, rgba(19, 19, 31, 0) 100%),
    url(../assets/img/wp7947007.png);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

.card-3 {
  background: linear-gradient(360deg, #13131f 0%, rgba(19, 19, 31, 0) 100%),
    url(../assets/img/Vidas-ao-Vento-Naoko.png);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}

.card-4 {
  background: linear-gradient(360deg, #13131f 0%, rgba(19, 19, 31, 0) 100%),
    url(../assets/img/kid-goku-dragon-ball-thumb.png);
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}

.card-5 {
  background: linear-gradient(360deg, #13131f 0%, rgba(19, 19, 31, 0) 100%),
    url(../assets/img/wp7947007.png);
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
}

.card-6 {
  background: linear-gradient(360deg, #13131f 0%, rgba(19, 19, 31, 0) 100%),
    url(../assets/img/Vidas-ao-Vento-Naoko.png);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.card-7 {
  background: linear-gradient(360deg, #13131f 0%, rgba(19, 19, 31, 0) 100%),
    url(../assets/img/kid-goku-dragon-ball-thumb.png);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

.card-8 {
  background: linear-gradient(360deg, #13131f 0%, rgba(19, 19, 31, 0) 100%),
    url(../assets/img/wp7947007.png);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}

.pagination-ul{
  display: flex;
  justify-content:center;
  padding: 4rem 0rem 0rem 0rem;
}
ul.pagination {
    display: inline-block;
    padding: 0;
    margin: 0;
}

ul.pagination li {display: inline;}

ul.pagination li a {
    color:#ccc;
    float: left;
    padding: 8px 16px;
    text-decoration: none;
}

ul.pagination li a.active {
    border: 1px solid #8257e6;
    color: #8257e6;
}

ul.pagination li a:hover:not(.active) {color: #8257e6;}


@media screen and (min-width: 1440px) {

  .card-container {
    display: flex;
    justify-content:center;
    width: 100%;
    margin: 0 auto;
    padding: 0;
  }
  
.card {
  width: 338px;
  margin: 1.5rem;
}

.card p{
  width: 15.5rem;
}
}

</style>

