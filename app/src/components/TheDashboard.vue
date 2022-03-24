<template>
  <div class="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-12">
      <base-card v-for="program in programs" :key="program.id" :name="program.name"></base-card>    
    <div class="h-60 rounded-2xl flex items-center justify-center">
      <button
        @click="showAddNewProgramModal = true"
        class="
          bg-green-500
          hover:bg-green-700
          text-black text-center
          py-2
          px-4
          rounded-full
          h-40
          w-40
          inline-flex
          items-center
          justify-center
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="4.5rem"
          viewBox="0 0 24 24"
          width="4.5rem"
          fill="#fff"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
        </svg>
      </button>
    </div>
    <add-new-program-modal v-if="showAddNewProgramModal" @close-modal="showAddNewProgramModal=false"></add-new-program-modal>
  </div>
</template>
<script>
import BaseCard from "@/components/BaseComponents/BaseCard.vue";
import AddNewProgramModal from "@/components/Modals/AddNewProgramModal.vue";

export default {
  components: {
    BaseCard,
    AddNewProgramModal,
  },
  data(){
    return {
      showAddNewProgramModal: false,
      programs: [
        {
          id: 1,
          name: 'Program A'
        },
        {
          id: 2,
          name: 'Program A'
        },
        {
          id: 3,
          name: 'Program A'
        },
        {
          id: 4,
          name: 'Program A'
        },
        {
          id: 5,
          name: 'Program A'
        },
        {
          id: 6,
          name: 'Program A'
        },
        {
          id: 7,
          name: 'Program A'
        },
        {
          id: 8,
          name: 'Program A'
        },
        {
          id: 9,
          name: 'Program A'
        },
        {
          id: 10,
          name: 'Program A'
        },
        {
          id: 11,
          name: 'Program A'
        }
      ]
    }
  }
};
</script>