import { createStore } from 'vuex'

export default createStore({
  state: {
    characters:[], // variable array para guardar todos los personajes
    charactersFilter:[] //variable array para hacer consultas y filtros que vamos a guardar en nuesto proyecto
  },
  mutations: { //para poder modificar las states tenemos que usar las mutations y para eso,
    setCharacters(state, payload){ //creamos la mutation setCharacters que recibe 2 parametros, uno el state que vamos a modificar y 
    state.characters = payload                              //el otro payload que es los datos que le vamos a mandar
    },
    setCharactersFilter(state, payload){ //hacemos lo mismo pero con charactersFilter
    state.charactersFilter = payload 
    }
  },
  actions: { //para poder usar las mutations tenemos que usar las actions
    async getCharacters({commit}) { //funcion asincrona para poder traernos los personajes y recibe el parámetro commit para poder acceder a las mutations
    try{
      const response = await fetch('https://rickandmortyapi.com/api/character')
      const data = await response.json()
      commit('setCharacters',data.results)
      commit('setCharactersFilter',data.results)
    }catch(error){
      console.error(error)
    }
  },
  filterByStatus({commit, state}, status){
    const results = state.characters.filter((character) => {
      return character.status.includes(status)
    })
    commit('setCharactersFilter', results)
  }
},
  modules: {
  }
})
