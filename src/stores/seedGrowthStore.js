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
                img: '@/assets/images/radish.gif'
        
            },
            {
                id: 1,
                name: 'Corn',
                list: 1,
                defaultGrowthLevel: 1,
                img: '@/assets/images/corn.gif'
            },
            {
                id: 3,
                name: 'Carrot',
                list: 1,
                defaultGrowthLevel: 1,
                img: '@/assets/images/carrot.gif'
            },
            {
                id: 4,
                name: 'Pumpkin',
                list: 1,
                defaultGrowthLevel: 1,
                img: '../../assets/images/pumpkin.gif'
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
    }

})
