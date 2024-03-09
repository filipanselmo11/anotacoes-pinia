<script setup lang="ts">
import AnotacoesTitle from './components/AnotacoesTitle.vue';
import AnotacoesForm from './components/AnotacoesForm.vue';
import AnotacoesCard from './components/AnotacoesCard.vue';
import { useAnotacoesStore } from './stores/AnotacoesStore';
import type { AnotacoesInterface } from './types/types';
import { ref } from 'vue';

const anotacoesStore = useAnotacoesStore();
anotacoesStore.getAnotacoes();
const excluirAnotacao = () => {
  console.log('Anotação Excluida')
}
const anotacaoObj = ref<AnotacoesInterface>({
  titulo: '',
  descricao: ''
});
const addAnotacao = () => {
  anotacoesStore.addAnotacao(anotacaoObj.value);
  anotacaoObj.value = {titulo: '', descricao: ''};

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
