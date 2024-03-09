import { defineStore } from "pinia";
import { api } from "@/services/api";
import type { AnotacoesInterface } from "@/types/types";
export const useAnotacoesStore = defineStore('anotacoesStore', {
    state: () => ({
        anotacoes: [] as AnotacoesInterface[],
        loading: true,
    }),
    actions: {
        async getAnotacoes(): Promise<void> {
            this.loading = true;
            await api.get('/anotacoes').then(res => {
                this.anotacoes = res.data;
            }).catch(error => {
                console.log('ERROR ', error);
            });
            this.loading = false;
        },
        async addAnotacao(anotacao: AnotacoesInterface): Promise<void> {
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