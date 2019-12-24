Vue.component('search-panel',{
    template:`
    <input v-model="text" @input="$emit('on-search', text)"
                          class="search-panel form-control" 
                          placeholder="Ввведите для поиска" />     
    `,
    data: function () {
        return{
            text:''
        }
    }
});