<template>
  <div>
    <h1>Rick and Morty</h1>
    <FilterByStatus />
    <FilterByName />
    <ListCharacters />
    
  </div>
</template>

<script>
import ListCharacters from '@/components/ListCharacters'
import FilterByStatus from '@/components/FilterByStatus'
import FilterByName from '@/components/FilterByName'
export default {
  name: 'App',
  components: {
    ListCharacters,
    FilterByStatus,
    FilterByName
  }
}
</script>

<style lang="scss">
:root{
  --background-body:#24282F;
  --background-card: #3c3e44;
  --text-white: #ffffff;
  --text-gray:#c0c0c0;
  --text-orange:#ff9800;
}
*{
  box-sizing:border-box;
  margin: 0;
  padding:0;
}
body{
  background-color:var(--background-body);
  color: var(--text--white);
  font-family: 'Segoe Ui', tahoma, geneva, verdana, sans-serif;
}
h1{
  margin-bottom:3rem;
  text-align:center;
}
.container{
  width:980px;
  max-width: 90%;
  margin: 5rem auto
}
img{
  width:100%;
}
</style>
