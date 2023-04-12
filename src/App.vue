<template>
  <div class="tudo container-fluid" style="display: block">
    <div class="topo" style="margin-bottom: 30px;">
      <div class="row">
        <div class="col-md-3">
          <router-link to="/empresas">empresas</router-link>
        </div>
        <div class="col-md-3">
          <router-link to="/cadastro-empresa" >Adicionar Empresa</router-link>
        </div>
        <div class="col-md-3">
          <router-link to="/colaboradores">colaboradores</router-link>
        </div>
        <div class="col-md-3">
          <router-link to="/cadastro-colaborador" >Adicionar colaborador</router-link>
        </div>   
      </div>
    </div>
  </div>
  <div>
    <router-view></router-view>
  </div>
</template>
<script>
import api from './services/api.ts'
export default {

  data() {
    return {

    }
  },

  methods: {
    pesquisar() {
      console.log("a")
      console.log(api)
      const teste = () => api.get('empresas').then((response => {
        console.log(response)
      }))
      console.log(teste())
    },

    salvar() {
      const data = {
        cnpj: 3456,
        nome: 'ababuble',
        email: 'alo@alo.com',
        telefone: 315555,
        endereco: 'rua taldo seu ze',
      }
      const teste = () => api.post('/nova-empresa', data).then((response => {
        console.log(response)
      }))
      console.log(teste())
      // const data = {
      //   cnpj: 12345,
      //   nome: 'ababuble',
      //   email: 'alo@alo.com',
      //   telefone: 315555,
      //   endereco: 'rua taldo seu ze',
      // }
      // const requestDetails = {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      //   body: new URLSearchParams(data).toString()
      // }
      // alert("A")
      // console.log(this.axios)
      // fetch('http://127.0.0.1:8000/api/nova-empresa', requestDetails).then(res=>res.json()).then((response) => {
      //   console.log({ response })
      // }).catch((error) => {
      //   console.log('Looks like there was a problem: \n', error);
      // });
      // this.axios.get('http://127.0.0.1:8000/api/empresas').then((response) => {
      //   console.log(response.data)
      // })
    }
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
</style>
