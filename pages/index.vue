<template>
    
    <div class="container">
      <div>
        <h1 >Mes projets web</h1>
      </div>
      <div class="swiper-container">
        <swiper-container
          :modules="modules"
          :slides-per-view="1"
          :space-between="30"
          :pagination="{ clickable: true }"
          :navigation="true"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
        >
          <swiper-slide v-for="project in projects" :key="project.id" class="swiper-slide">
            <div class="slide-content">
              <h3>{{ project.nom }}</h3>
              <p>{{ project.description }}</p>
              <p><strong>Technologies :</strong> {{ project.techno }}</p>
              <NuxtLink v-if="project.link" :to="project.link" target="_blank" class="project-link"> Voir le projet </NuxtLink>
            </div>
        </swiper-slide>
        </swiper-container>
      </div>
    </div>
  </template>
  
  <script setup>

  import { ref } from 'vue';
  import { Navigation, Pagination } from 'swiper/modules';

const modules = [Navigation, Pagination];
  
  const onSwiper = (swiper) => {
    console.log(swiper);
  };
  
  const onSlideChange = () => {
    console.log('slide change');
  };
  
  const projects = ref([
    {
      id: 1,
      nom: 'WeWantAll',
      description: "Création d'un site vitrine pour une marque de vetements",
      techno: "Symfony, CSS, HTML, Twig, SQL, UIkit",
      link: "https://github.com/BakiBacci/wewantall"
    },
    {
      id: 2,
      nom: 'Portfolio de Julio',
      description: "Création d'un portfolio pour un ami artiste",
      techno: "Framework Vue.js ",
      link: "https://github.com/BakiBacci"
    },
    {
      id: 3,
      nom: 'lumi-design',
      description: "Création d'un site vitrine pour un marque de luminaires",
      techno: "Framework Symfony",
      link: "https://github.com/BakiBacci/lumi_design"
    }
  ]);
  </script>
  
  

   <style>

@import 'swiper/swiper.min.css';
  @import 'swiper/modules/pagination/pagination.min.css';
  @import 'swiper/modules/navigation/navigation.min.css'; 


h1{
    font-family: 'Bebas Neue', sans-serif;
    font-weight:200;
    color: black 
    
}

.project-link {
    display: inline-block;
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #2c3e50;
    color: white;
    text-decoration: none;
    border-radius: 4px;
    transition: background-color 0.3s;
  }


  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px 20px;
  } 


  .swiper-container {
    width: 100%;
    height: 60vh;
    margin-top: 30px;
    
  }
  
  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    margin-bottom: 30px;
  }
  
  .slide-content {
    background-color: white;
    border-radius: 8px;
    padding: 40px;
    width: 90%;
    text-align: center;
    justify-content:center
  }
  
  .slide-content h3,
  .slide-content p,
  .slide-content a {
    font-family: 'adapta',sans-serif;
    font-weight:200;
  }
  
 

   :deep(.swiper-button-next),
  :deep(.swiper-button-prev) {
    color: black;
  }
  
  
  :deep(.swiper-pagination-bullet) {
    background: black; 
    opacity: 0.5;
    width: 12px;
    height: 12px;
    display: none;
  }
  
  .swiper-pagination-bullet-active {
    opacity: 1;
  }
  
  .project-link {
    display: inline-block;
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #2c3e50;
    color: white;
    text-decoration: none;
    border-radius: 4px;
    transition: background-color 0.3s;
  }
  
  .project-link:hover {
    background-color: black;
  } 
</style>