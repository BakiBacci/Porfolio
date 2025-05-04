<template>
  <header>
    <NuxtLink to="/" class="header-link">
    <h1>Isaac BATCHI</h1>
    </NuxtLink>
    <nav>
      <NuxtLink to="/contact" class="header-btn">contact</NuxtLink>
    </nav>
  </header>
</template>

<script>
import { NuxtLink } from '#components';


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header{
  height: 20vh;
  padding: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: white;
  align-items: center;
  padding-left: 30px;
  padding-right: 40px;
  border-bottom: 1px black solid;
}
nav{
  display:flex;
  flex-direction: wrap ;
  gap: 20px

}
.header-btn{
  color: black;
  text-decoration: none;
  font-size: 40px;
  transition: 0.7s ;
  font-family: 'Bebas Neue';
  font-weight:100


}


h1{color:black}

header .header-link{
  text-decoration:none;
  color:blueviolet;
  font-size: 35px;
  transition: 0.7s ;
  font-family: 'Compare';
  


}
header:hover .header-link h1,
header:hover .header-btn{
  
  color: white
}

header:hover{
  background-color: black;
}
</style>
