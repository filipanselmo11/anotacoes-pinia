import { defineStore } from "pinia";
import { api } from "@/services/api";
export const useAnotacoesStore = defineStore('anotacoesStore', {
    state: () => ({
        anotacoes: [],
        loading: true,
    }),
    actions: {
        async getAnotacoes() {
            this.loading = true;
            await api.get('/anotacoes').then(res => {
                this.anotacoes = res.data;
            }).catch(error => {
                console.log('ERROR ', error);
            })
        }
    }
});