import { useStore } from "vuex";
import { computed } from "vue";

const useUI = () => {
    const store = useStore();

    return {
        // sideMenuOpen: computed(() => store.getters["ui/isSideMenuOpen"]),
        sideMenuOpen: computed({
            get: () => store.getters["ui/isSideMenuOpen"],
            set: (val) => store.commit("ui/toggleSideMenu"),
        }),
        toggleSideMenu() {
            store.commit("ui/toggleSideMenu");
        },
    };
};

export default useUI;
