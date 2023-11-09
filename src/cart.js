import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate'
// import * as Cookies from 'js-cookie'

export const cart = new Vuex.Store({

    plugins: [createPersistedState({
        storage: window.localStorage,
    })],

    state: () => ({
        items: [],
        logged_in: false
    }),

    mutations: {

        set_log_in(state, login) {
            state.logged_in = login;
        },

        add_item(state, item) {
            if (state.items.length === 0) {
                state.items.push(item);
            }
            else {
                for (let i = 0; i < state.items.length; i++) {
                    if (state.items[i].id === item.id) {
                        item.qty = state.items[i].qty + 1;
                        state.items.splice(i, 1);
                        break;
                    }
                }
                state.items.push(item)
            }
        },

        remove_item(state, old_item) {
            for (let i = 0; i < state.items.length; i++) {
                if (state.items[i].id === old_item) {
                    state.items.splice(state.items[i], 1);
                }
            }
        }
    }
})