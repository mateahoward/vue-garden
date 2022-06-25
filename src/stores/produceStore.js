import { defineStore } from "pinia";

export const useProduceStore = defineStore ({

    id: 'produceStore',

    state: () => ({

        apples: [
            {   
                id: 0,
                harvested: false,
                collected: false,
            },
            {   
                id: 1,
                harvested: false,
                collected: false,
            },
            {   
                id: 2,
                harvested: false,
                collected: false,
            },

        ]
    }),

    actions: {
        harvestApple(appleID){
            this.apples.forEach(apple => {
                if(appleID == apple.id) {
                    apple.harvested = true; 
                    setTimeout(() => {
                        apple.collected = true;
                    }, 2000);
                } else {
                    return apple.harvested
                }
            });
        }
    }

})
