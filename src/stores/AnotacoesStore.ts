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
            });
            this.loading = false;
        },
        async addAnotacao(anotacao) {
            this.loading = true;
            this.anotacoes.push(anotacao);
            const body = {
                titulo: anotacao.titulo,
                descricao: anotacao.descricao
            }
            await api.post('/anotacoes', body).then(res => {
                console.log('RES ', res.data);
            }).catch(error => {
                console.log('ERROR ', error)
            });
            this.loading = false;
        }
    }
});