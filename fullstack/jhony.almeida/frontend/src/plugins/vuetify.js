import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        options: {
            customProperties: true
        },
        themes: {
            light: {
                background: "#B9FBAF",
                primary: "#ff8207",
                secondary: "#f7b500"
            }
        }
    }
});
