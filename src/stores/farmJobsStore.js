import { defineStore } from "pinia";

export const useJobsStore = defineStore ({

    id: 'jobs',

    state: () => ({

        jobs: [
            {
                description: 'Planted a vegetable',
                isCompleted: true,
            },
            {
                description: 'Watered all plants',
                isCompleted: false,
            },
            {
                description: 'Harvested all produce',
                isCompleted: false,
            },
            {
                description: 'Said hello to Piggy',
                isCompleted: false,
            },
            {
                description: 'Visited tree orchid',
                isCompleted: false,
            },
            {
                description: 'Gave treats to Piggy',
                isCompleted: false,
            },
        ]
    }),

    actions: {

    }

})
