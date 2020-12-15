<template>
      <div>
          
              <div >    
              <div class="table-responsive">
                 <table class="table">
                    <tr class="bg-success text-white">
                         <th>Pregunta</th>
                         <th>Respuesta</th>
                            
                   </tr>
                        <tr class="bg-info text-white" v-for="(pregunta,index) in preguntas" :key="index">
                            <td>{{pregunta.numeroPreg}}</td>
                            <td>{{pregunta.rta}}</td>
                            
                        </tr>
                    </table>
                </div>
              </div>
            
       
       </div>
        

</template>

<script>

  export default  {
    name: 'src-components-multiple-choice',
    props: [],
    mounted () {

    },
    data () {
      return {
      preguntas : [
      { numeroPreg: 1, rta: ['b']},
      { numeroPreg: 2, rta: ['b']},
      { numeroPreg: 3, rta: ['c']},
      { numeroPreg: 4, rta: ['b']},
      { numeroPreg: 5, rta: ['b']},

]
      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-multiple-choice {

  }
</style>
