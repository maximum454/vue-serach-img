export default {
    state: {
        items: []
    },
    getters: {
        AllItems(state) {
            return state.items
        }
    },
    mutations: {
        updateItems(state, items){
            state.items = items
        }
    },
    actions: {
        async fetchItems(ctx) {
            const apiley = 'V2dimaiA8KXrAmFAZwL4Mxw8XynWpDYHpLvvXsE3TbE';
            const res = await fetch(`https://api.unsplash.com/photos?client_id=${apiley}&page=1`);
            const items = await res.json();
            ctx.commit('updateItems', items)
        }
    },
}