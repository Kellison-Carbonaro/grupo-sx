<template>
    <div class="row">
      <h1>
          Adicionar Empresas
      </h1>
    </div>
    <div class="row" style="margin-top: 4px">
      <div class="col-md-4">
        <div class="inputs">
          <label>* CNPJ:</label>
          <input
            type="text"
            class="form-control input-sm"
            v-model="data.cnpj"
            v-mask="'##.###.###/####-##'"
          />
        </div>
      </div>
      <div class="col-md-4">
        <div class="inputs">
          <label>* Telefone:</label>
          <input
            type="text"
            class="form-control input-sm"
            v-model="data.telefone"
            v-mask="'(##) #####-####'"
          />
        </div>
      </div>
      <div class="col-md-4">
        <div class="inputs">
          <label>* E-mail:</label>
          <input
            type="text"
            class="form-control input-sm"
            v-model="data.email"
          />
        </div>
      </div>  
    </div>
    <div class="row" style="margin-top: 4px">
      <div class="col-md-6">
        <div class="inputs">
          <label>* Nome:</label>
          <input
            type="text"
            class="form-control input-sm"
            v-model="data.nome"
          />
        </div>
      </div>
      <div class="col-md-6">
        <div class="inputs">
          <label>* Endereço:</label>
          <input
            type="text"
            class="form-control input-sm"
            v-model="data.endereco"
          />
        </div>
      </div>
    </div>
    <button type="button" class="btn btn-success" @click.prevent="salvar">Salvar</button>
</template>
<script>
import { ref } from 'vue'
import api from '../services/api.ts'

export default {

  data () {
    return {
      data:{
        cnpj: null,
        nome: null,
        email: null,
        telefone: null,
        endereco: null,
      }
    }
  },
  methods: {
    salvar() {
      api.post('nova-empresa', this.data).then((response => {
          console.log(response)
      }))
    }
  },
  
}

const count = ref(0)
</script>


<style scoped>
.read-the-docs {
  color: #888;
}

.inputs{
  margin-left: 15px; 
  margin-right: 15px;
  margin-bottom: 15px;
}
</style>
