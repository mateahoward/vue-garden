import { defineStore } from "pinia";

export const useSeedStore = defineStore ({

    id: 'seedGrowth',

    state: () => ({

        seeds: [
            {   
                id: 0,
                name: 'Radish',
                list: 1,
                defaultGrowthLevel: 1,
                img: '@/assets/images/radish.gif',
                harvested: false,
        
            },
            {
                id: 1,
                name: 'Corn',
                list: 1,
                defaultGrowthLevel: 1,
                img: '@/assets/images/corn.gif',
                harvested: false,
            },
            {
                id: 3,
                name: 'Carrot',
                list: 1,
                defaultGrowthLevel: 1,
                img: '@/assets/images/carrot.gif',
                harvested: false,
            },
            {
                id: 4,
                name: 'Pumpkin',
                list: 1,
                defaultGrowthLevel: 1,
                img: '../../assets/images/pumpkin.gif',
                harvested: false,
            }
        ]
    }),

    actions: {

        incrementDefaultGrowthLevel(passedSeed) {
            this.seeds.forEach(seed => {

                if(passedSeed.id === seed.id) {
                    seed.defaultGrowthLevel++;
                }
                
                return seed.defaultGrowthLevel;
            });   
        },
        markSeedAsHarvested(passedSeed) {
            this.seeds.forEach(seed => {

                if(passedSeed.defaultGrowthLevel > 2) {
                    seed.harvested = true;

                    setTimeout(() => {
                        seed.defaultGrowthLevel++;
                    }, 2000);
                    
                }
                
                return seed.harvested;
            }); 
        }
    }

})
