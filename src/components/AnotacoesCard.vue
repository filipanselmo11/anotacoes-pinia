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
    <div class="card mb-2" style="width: 300px;">
        <div class="card-body">
            <h5 class="card-title">{{ titulo }}</h5>
            <p class="card-text">{{ descricao }}</p>
            <button type="button" class="btn btn-danger" @click="excluirAnotacao">Excluir Anotação</button>
        </div>
    </div>
</template>

<style scoped></style>