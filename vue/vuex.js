const store = new Vuex.Store({
    state: {
        conut: 0
    },
    getters: {
        showNum(state){
            return "当前最新的数量是" + state.count
        }
    },
    mutations:{
        add(state){
            state.count ++
        }
    },
    Actions: {
        addAsync(context){
            setTimeout(()=>{
                context.commit('add')
            })
        }
    }
})

this.$store.dispatch('addAsync')

import { mapActions } from 'Vuex';

new Vue({
    methods:{
        ...mapActions(['addAsync']),
        btnHandler(){
            this.addAsync()
        }
    }
})



