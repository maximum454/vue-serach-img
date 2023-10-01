import { createStore } from 'vuex'
import items from './modules/items'
import favorites from './modules/favorites'

export default createStore({

  modules: {
    items,
    favorites
  }
})
