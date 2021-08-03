import { defineStore } from "pinia";

export const useFarmDetailsStore = defineStore ({
     id: 'farmDetails',

     state: () => ({
          farm: {
               name: '',
          }
     }),

     actions: {
          addFarmName(passedName) {
               if(passedName != '') {
                    this.farm.name = passedName;
               }
          }
     }

})