// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";

// Plugins
import { registerPlugins } from "@/plugins";

//styles
import "../src/styles/layout.css";
import "../src/styles/styles.css";
import "../src/styles/typography.css";

const app = createApp(App);

registerPlugins(app);

app.mount("#app");
