<script lang="ts" setup>

defineProps<{anotacao: any}>();

const emits = defineEmits(['addAnotacao']);
const addAnotacao = () => {
    emits('addAnotacao');
}

</script>

<template>
    <form @submit.prevent="addAnotacao" class="card-form p-3">
        <div class="mb-3">
            <label for="titulo" class="form-label">
                Titulo
            </label>
            <input v-model="anotacao.titulo" type="text" class="form-control" id="titulo">
        </div>
        <div class="mb-3">
            <label for="descricao" class="form-label">
                Descrição
            </label>
            <input v-model="anotacao.descricao" type="text" class="form-control" id="descricao">
        </div>
        <button type="submit" class="btn btn-primary">
            Adicionar Anotação
        </button>
    </form>
</template>