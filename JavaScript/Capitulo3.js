const app = Vue.createApp({
    data() {
        return {
            currentDialogueIndex: 0,
            currentHarrisonIndex: 0,
            narratorDialogues: [
                "Ainda na cafeteria, você resolave descer um pouco para ver se tem mais algum problema",
                "Então enquanto, você está descendo a página de códigos, o Sr. Harrison te pede para parar e reclama das cores:"
            ],
            harrisonDialogues: [
                "Esses botões não estão certos. Eles precisam ser #ff5733, mas parece que alguém usou o código hexadecimal errado."
            ],
            ethanDialogues: [
                "Eu acho que consigo ajustar isso."
            ],
            userInput: '',
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
            return this.ethanDialogues[0] || ""; // Apenas um diálogo do Ethan
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
        checkAnswer(selectedAnswer) {
            const correctAnswer = "button { background-color: #ff5733; }";
            if (selectedAnswer.trim() === correctAnswer) {
                this.isCorrect = true;
                this.showError = false;
            } else {
                this.showError = true;
                this.isCorrect = false; // Reset isCorrect to false if the answer is wrong
            }
        },
        nextChapter() {
            window.location.href = "capitulo4.html";
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
