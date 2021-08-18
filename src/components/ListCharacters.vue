<template>
  <section>
    <div class="characters">
        <div class="characters__item" v-for= "character in characters" :key= "character.id">
           <CardCharacter :character="character"/>
        </div>
    </div>
  </section>
</template>

<script>
import { computed, onMounted } from 'vue'
import{ useStore }from 'vuex'

import CardCharacter from '@/components/CardCharacter'
export default {
  components: { CardCharacter },
    setup(){
        const store = useStore()
        const characters = computed(() => { //propiedad computada, recibe una función flecha, pero para usar esta función computada hay que importarlo al igual que onMounted
            return store.state.charactersFilter
        })
        onMounted(()=>{
            store.dispatch('getCharacters') //esto es para acceder a las actions
        })
        return{
            characters
        }
    }
}
</script>

<style>
    .characters{
        display: grid;
        grid-template-columns: repeat(3,1fr);
        gap:3rem;
        margin:3rem 0;
    }
</style>