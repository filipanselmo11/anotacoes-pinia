<script setup lang="ts">

defineProps<{
    titulo: string,
    descricao: string
}>();
const emits = defineEmits(['excluirAnotacao']);
const excluirAnotacao = () => {
    emits('excluirAnotacao');
}
</script>

<template>
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">{{ titulo }}</h5>
            <p class="card-text">{{ descricao }}</p>
            <a href="#" class="btn btn-danger" @click="excluirAnotacao">Excluir Anotação</a>
        </div>
    </div>
</template>

<style scoped></style>