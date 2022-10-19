const template = `<div>
        <h1>{{ title }}</h1>
    </div>`;

const data = function data() {
    return {
        title: "Vue3 Tutorial Updated"
    }
}

const App = { data, template };
Vue.createApp(App).mount("#vue-app");