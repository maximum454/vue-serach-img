export default {
    state: {
        items: [],
        detail: []
    },
    getters: {
        getItems(state) {
            return state.items
        },
        getDetail(state) {
            return state.detail
        }
    },
    mutations: {
        updateItems(state, items){
            state.items = items
        },
        updateDetail(state, detail){
            state.detail = detail
        }
    },
    actions: {
        async fetchItems(ctx) {
            const apiKey = 'V2dimaiA8KXrAmFAZwL4Mxw8XynWpDYHpLvvXsE3TbE';
            const res = await fetch(`https://api.unsplash.com/collections?client_id=${apiKey}&page=1&per_page=9`)
            const items = await res.json();
            ctx.commit('updateItems', items)
        },
        async fetchSearch(ctx, name) {
            const apiKey = 'V2dimaiA8KXrAmFAZwL4Mxw8XynWpDYHpLvvXsE3TbE';
            const res = await fetch(`https://api.unsplash.com/search/collections?client_id=${apiKey}&page=1&per_page=9&query=${name}`)
            const items = await res.json();
            ctx.commit('updateItems', items.results)
        },
        async fetchId(ctx, id) {
            const apiKey = 'V2dimaiA8KXrAmFAZwL4Mxw8XynWpDYHpLvvXsE3TbE';
            const res = await fetch(`https://api.unsplash.com/photos/${id}?client_id=${apiKey}`)
            const items = await res.json();
            ctx.commit('updateDetail', items)
        }
    },
}