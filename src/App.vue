<script setup lang="ts">
import AnotacoesTitle from './components/AnotacoesTitle.vue';
import AnotacoesCard from './components/AnotacoesCard.vue';
import { useAnotacoesStore } from './stores/AnotacoesStore';
import { ref } from 'vue';

const anotacoesStore = useAnotacoesStore();
anotacoesStore.getAnotacoes();
const excluirAnotacao = () => {
  console.log('Anotação Excluida')
}
</script>

<template>
  <div>
    <AnotacoesTitle />
    <div class="container overflow-hidden text-center mt-4">
      <div class="row gy-5">
        <div v-for="(item, index) in anotacoesStore.anotacoes" :key="index" class="col-3">
          <AnotacoesCard :titulo="item.titulo" :descricao="item.descricao" @excluir-anotacao="excluirAnotacao" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
