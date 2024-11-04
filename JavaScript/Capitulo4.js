const app = Vue.createApp({
    data() {
        return {
            currentDialogueIndex: 0,
            currentHarrisonIndex: 0,
            narratorDialogues: [
                "Hoje era dia de reunião, então você foi para a empresa, abiram o projeto em que você está trabalhando no momento",
                "Te elogiaram bastante, pelo fato de ser um novato na empresa mas ja ter arrumado alguns problemas que os antigos no seu cargo não conseguiam",
                "Mas nem tudo é flores, o Sr. Harrison aponta para uma seção do site onde o texto parece estar 'desaparecido'",
            ],
            harrisonDialogues: [
                "Ei, isso não era para estar assim, alguém deve ter colocado a cor do texto errada e ficou com a mesma cor do fundo!"
            ],
            ethanDialogues: [
                "Ah, entendi! O texto está com a mesma cor do fundo. Isso é fácil de corrigir."
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
        checkAnswer(selectedAnswer) {
            const correctAnswer = ".hidden-text { color: #000000; background-color: #ffffff; }";
            if (selectedAnswer.trim() === correctAnswer) {
                this.isCorrect = true;
                this.showError = false;
            } else {
                this.showError = true;
                this.isCorrect = false; // Reset isCorrect to false if the answer is wrong
            }
        },
        nextChapter() {
            window.location.href = "capitulo5.html";
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
