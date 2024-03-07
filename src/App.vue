<script setup lang="ts">
import AnotacoesTitle from './components/AnotacoesTitle.vue';
import AnotacoesForm from './components/AnotacoesForm.vue';
import AnotacoesCard from './components/AnotacoesCard.vue';
import { useAnotacoesStore } from './stores/AnotacoesStore';

const anotacoesStore = useAnotacoesStore();
anotacoesStore.getAnotacoes();
const excluirAnotacao = () => {
  console.log('Anotação Excluida')
}
// cons titulo = ref('')
// const titulo = '';
// const descricao = '';
let anotacaoObj = {};
const addAnotacao = () => {
  anotacoesStore.addAnotacao(anotacaoObj)
  anotacaoObj = {};

}
</script>

<template>
  <div>
    <AnotacoesTitle />
    <AnotacoesForm :anotacao="anotacaoObj" @add-anotacao="addAnotacao" />
    <div v-if="anotacoesStore.loading">
      <h3>Carregando Anotações</h3>
    </div>
    <div v-else>
      <div class="container overflow-hidden text-center mt-4">
        <div class="row gy-5">
          <div v-for="(item, index) in anotacoesStore.anotacoes" :key="index" class="col-3">
            <AnotacoesCard :titulo="item.titulo" :descricao="item.descricao" @excluir-anotacao="excluirAnotacao" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h3 {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1em;
}
</style>
