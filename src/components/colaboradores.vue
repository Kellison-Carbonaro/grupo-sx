<template>
    <div class="row">
        <h1>
            Colaboradores
        </h1>
    </div>
    <div class="row" style="margin-top: 4px">
        <div class="col-sm-12">
            <div class="table-responsive" style="overflow:visible">
                <table class="table table-lista table-striped table-hover">
                    <thead>
                        <tr>
                            <th class="text-center">                              
                                <span>CPF</span>   
                            </th>
                            <th class="text-center">
                                <span>Nome</span>  
                            </th>
                            <th class="text-center">
                                <span>E-mail</span>  
                            </th>
                            <th class="text-center">
                                <span>Telefone</span>  
                            </th>
                            <th class="text-center">
                                <span>Endereço</span>  
                            </th>
                            <th class="text-center">
                                <span>Empresa</span>  
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in lista" :key="index">
                            <td class="text-center alinhamento-vertical">
                                <span>{{ item.cpf }}</span>
                            </td>
                            <td class="text-center alinhamento-vertical">
                                <span>{{ item.nome }}</span>
                            </td>
                            <td class="text-center alinhamento-vertical">
                                <span>{{ item.email }}</span>
                            </td>
                            <td class="text-center alinhamento-vertical">
                                <span>{{ item.telefone }}</span>
                            </td>
                            <td class="text-center alinhamento-vertical">
                                <span>{{ item.endereco }}</span>
                            </td>
                            <td class="text-center alinhamento-vertical">
                                <span>{{ item.nome_empresa }}</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
import api from '../services/api.ts'
export default {
    created(){
		this.pesquisar();
	},


    data() {
        return {
            lista:[],
        }
    },
    

methods: {
    pesquisar() {
        api.get('colaboradores').then((response => {
            this.lista = response.data.colaboradores
        }))
    },
}

};
</script>

<style>
#app{
width: 100%;
}
.container-fluid {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}


.tudo {
    grid-column-start: 1;
    margin-left: 0;
    margin-right: 0;
    width: 100%;
    height: 100%;
}
.alinhamento-vertical{
    vertical-align: middle !important;  
}
</style>
  