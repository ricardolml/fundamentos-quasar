import { store } from "quasar/wrappers";
import { createStore } from "vuex";

import ui from "./ui";

export default store(function (/* { ssrContext } */) {
    const Store = createStore({
        modules: {
            ui,
        },

        // enable strict mode (adds overhead!)
        // for dev mode and --debug builds only
        strict: process.env.DEBUGGING,
    });

    return Store;
});
