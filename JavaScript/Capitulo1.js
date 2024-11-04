const app = Vue.createApp({
    data() {
        //Sistema de armazenamento de Diálogos
        return {
            currentNarrativeIndex: 0,
            currentCharacterIndex: 0,
            narratorDialogues: [
                "Você se senta na sua mesa, abre o editor de código e descobre que o título da página inicial da MegaCorp sumiu.",
                "Hmm, por que o título não está aparecendo? Vamos investigar...",
                "Você percebe que o problema é um erro de sintaxe no HTML.",
                "O h1 está escrito errado."
            ],
            characterDialogues: [
                "O título não deveria estar sumindo! Eu vou revisar o código. Vamos corrigir isso!"                
            ],
            userInput: '',
            isCorrect: false,
            showError: false,
            isChallengeActive: false,
            isEndOfDialogue: false,
            isEndOfEthan: false,
        };
    },
    //Sistema de Exibição de Diálogos
    computed: {
        currentNarratorDialogue() {
            return this.narratorDialogues[this.currentNarrativeIndex] || "";
        },
        currentCharacterDialogue() {
            if (this.isEndOfDialogue) {
                return this.characterDialogues[this.currentCharacterIndex] || "";
            };
        }

    },
    //Sistema de Exibição de Próximo Diálogo
    methods: {
        nextDialogue() {
            if (!this.isChallengeActive) {
                if (this.currentNarrativeIndex < this.narratorDialogues.length - 1) {
                    this.currentNarrativeIndex++;
                } else {
                    this.isEndOfDialogue = true;
                }
            } else {
                if (this.currentCharacterIndex < this.characterDialogues.length - 2) {
                    this.currentCharacterIndex++;
                } else {
                    this.isChallengeActive = true;
                }
            }
        },
        //Faz a correção do código
        checkAnswer(selectedAnswer) {
            const correctAnswer = "<h1> Welcome to MegaCorp </h1>";
            if (selectedAnswer.trim() === correctAnswer) {
                this.isCorrect = true;
                this.showError = false;
            } else {
                this.showError = true;
                this.isCorrect = false; // Reset isCorrect to false if the answer is wrong
            }
        },
        nextChapter() {
            window.location.href = "capitulo2.html";
        }
    },
    mounted() {
        window.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                if (this.isEndOfDialogue && !this.isChallengeActive) {
                    this.isChallengeActive = true;
                } else {
                    this.nextDialogue();
                }
            }
        });
    }
});

app.mount("#app");
