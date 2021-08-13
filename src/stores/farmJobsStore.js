import { defineStore } from "pinia";

export const useJobsStore = defineStore ({

    id: 'jobs',

    state: () => ({

        jobs: [
            {
                description: 'Plant vegetables',
                isCompleted: false,
            },
            {
                description: 'Harvest all produce',
                isCompleted: false,
            },
            {
                description: 'Say hello to Piggy',
                isCompleted: false,
            },
            {
                description: 'Visit tree orchid',
                isCompleted: false,
            },
            {
                description: 'Give treats to Piggy',
                isCompleted: false,
            },
        ]
    }),

    actions: {
        markJobAsComplete(passedJob) {
            this.jobs.forEach(job => {
                if(job.description === passedJob){
                    return job.isCompleted = true;
                } else {
                    return job;
                }
            });
        }
    }

})
