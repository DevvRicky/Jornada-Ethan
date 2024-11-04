const app = Vue.createApp({
    data() {
        return {
            currentDialogueIndex: 0,
            currentHarrisonIndex: 0,
            narratorDialogues: [
                "Depois de corrigir o titulo, você foi na caferia, descansar um pouco antes de voltar ao trabalho.",
                "Mas após abrir o projeto novamente, você percebe que o conteúdo da página está todo desalinhado.",
                "Então você foi avisar o seu chefe, sr. Harrison, que respondeu: "
            ],
            harrisonDialogues: [
                "Ethan, isso está feio! A página precisa ser centralizada para parecer profissional."
            ],
            ethanDialogues: [
                "Parece que tenho que alinhar essa div para que fique no centro da tela."
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
            const correctAnswer = ".div-container { width: 80%; background-color: #f0f0f0; margin: 0 auto; }";
            if (selectedAnswer.trim() === correctAnswer) {
                this.isCorrect = true;
                this.showError = false;
            } else {
                this.showError = true;
                this.isCorrect = false; // Reset isCorrect to false if the answer is wrong
            }
        },
        nextChapter() {
            window.location.href = "capitulo3.html";
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
