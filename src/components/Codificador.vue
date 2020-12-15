<template>

    <section class="src-components-formulario">
        <div class="jumbotron">
            <h2> Codificador de vocales</h2>
          <form novalidate autocomplete="off">

                <!-- ingreso de dato texto  -->
                <div class="form-group">
                    <label for="nombre"> Ingrese un Texto </label>
                    <input type="text" id="nombre" class="form-control" v-model="v.f.texto.$model">
                </div>

                <!-- cartel de validación nombre -->
                <div v-if="v.f.texto.$error && v.f.texto.$dirty" class="alert alert-danger mt-1">
                    <div v-if="v.f.texto.required.$invalid">Este campo es requerido</div>
                </div>
      </form>

      <h3>{{modificar(v.f.texto.$model)}}</h3>
    </div>
    </section>

</template>

<script>

import { required, } from '@vuelidate/validators'

import {useVuelidate} from '@vuelidate/core'

import filter from '../filter.js'


export default {
  name: 'src-components-formulario',
  mixins: [filter],
  props: [],
  
  mounted() {
  },

  created(){

  const rules= {
    f: {
  texto: {
        required,
   
      },
  
    }
  }
        const f = this.f
        this.v = useVuelidate(rules, {f})

  },
   components: {
  },
  data() {
    return {
      f: {
        texto: '',
      },
      v:null, 
    }
  },
  methods: {
  },
  computed: {
  }
}

</script>

<style scoped lang="css">

  .jumbotron {
    background-color: rgb(79, 17, 160);
    color: white;
  }

  hr {
    background-color: #ddd;
  }

  

</style>
