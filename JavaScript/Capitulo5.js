const app = Vue.createApp({
    data() {
        return {
            currentDialogueIndex: 0,
            currentHarrisonIndex: 0,
            narratorDialogues: [
                "Depois de corrigir os problemas visuais, você percebe que a logo da empresa está sumida."
            ],
            harrisonDialogues: [
                "Nossa logo não aparece em lugar nenhum! A imagem deve estar quebrada ou mal referenciada."
            ],
            ethanDialogues: [
                "Deixa eu verificar o código."
            ],
            answerOptions: [
                '<img src="images/logo.png">',
                '<img src="images/logo.jpg">',
                '<img src="images/logo.gif">'
            ],
            isCorrect: false,
            showError: false,
            isChallengeActive: false,
            isCharacterDialogueEnd: false,
        };
    },
    computed: {
        currentNarratorDialogue() {
            return this.narratorDialogues[this.currentDialogueIndex] || "";
        },
        currentHarrisonDialogue() {
            return this.harrisonDialogues[this.currentHarrisonIndex] || "";
        },
        currentEthanDialogue() {
            return this.ethanDialogues[0] || "";
        }
    },
    methods: {
        nextDialogue() {
            if (!this.isChallengeActive) {
                if (this.currentDialogueIndex < this.narratorDialogues.length - 1) {
                    this.currentDialogueIndex++;
                } else if (!this.isCharacterDialogueEnd) {
                    this.isCharacterDialogueEnd = true;
                } else {
                    this.isChallengeActive = true;
                }
            }
        },
        checkAnswer(selectedOption) {
            const correctAnswer = '<img src="images/logo.png">';
            if (selectedOption.trim() === correctAnswer) {
                this.isCorrect = true;
            } else {
                this.showError = true;
            }
        },
        nextChapter() {
            window.location.href = "Creditos.html";
        }
    },
    mounted() {
        window.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                this.nextDialogue();
            }
        });
    }
});

app.mount("#app");