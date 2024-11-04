const app = Vue.createApp({
    data() {
        return {
            currentDialogueIndex: 0,
            narratorDialogues: [
                "Você é Ethan, um jovem programador que acabou de ser contratado pela MegaCorp, uma empresa gigante de tecnologia.",
                "No seu primeiro dia de trabalho, seu chefe, Sr. Harrison, te liga com uma cara preocupada."
            ],
            harrisonDialogue: "Ethan, nosso site está com problemas graves e precisamos que você conserte algumas coisas agora! Você consegue?",
            ethanDialogue: "Claro, vou ajudar a resolver isso.",
            currentCharacterDialogue: 'harrison',
            isNarratorDialogueEnd: false,
            isCharacterDialogueEnd: false,
            isEndOfStory: false
        };
    },
    computed: {
        currentNarratorDialogue() {
            return this.narratorDialogues[this.currentDialogueIndex];
        }
    },
    methods: {
        nextDialogue() {
            if (this.currentDialogueIndex < this.narratorDialogues.length - 1) {
                this.currentDialogueIndex++;
            } else {
                this.isNarratorDialogueEnd = true;
            }
        },
        nextCharacterDialogue() {
            if (this.currentCharacterDialogue === 'harrison') {
                this.currentCharacterDialogue = 'ethan';
            } else {
                this.isCharacterDialogueEnd = true;
                this.isEndOfStory = true;
            }
        },
        goToNextChapter() {
            window.location.href = "capitulo1.html";
        }
    },
    mounted() {
        window.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                if (!this.isNarratorDialogueEnd) {
                    this.nextDialogue();
                } else if (this.isNarratorDialogueEnd && !this.isCharacterDialogueEnd) {
                    this.nextCharacterDialogue();
                }
            }
        });
    }
});

app.mount("#app");
