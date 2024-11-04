const app = Vue.createApp({
    methods: {
        goToGame() {
            window.location.href = "prologo.html"; // Redireciona para o Prólogo
        },
        showCredits() {
            window.location.href = "creditos.html"; // Redireciona para a página de Créditos
        },
    }
});

app.mount("#app");
