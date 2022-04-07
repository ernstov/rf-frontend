<template>
  <div>
    <div class="px-60 py-32 h-screen">
      <!-- <the-dashboard></the-dashboard> -->
      <h4
        class="text-4xl w-full text-center text-gray-500"
        v-if="!programs.length && !loading"
      >
        No programs found on the server.
      </h4>

      <div class="flex flex-wrap">
        <base-card v-for="program in programs" :key="program.id">
          <p class="text-xl text-green-600">Name</p>
          <h4 class="font-semibold">{{ program.name }}</h4>
          <p class="text-xl text-green-600 mt-6">Description</p>
          <p
            class="
              text-2xl
              overflow-hidden
              text-ellipsis
              max-h-40 max-w-full
              text-gray-700
            "
          >
            {{ program.description }}
          </p>
        </base-card>
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
        <add-new-program-modal
          v-if="showAddNewProgramModal"
          @close-modal="
            refreshPrograms();
            showAddNewProgramModal = false;
          "
        ></add-new-program-modal>
      </div>
    </div>
  </div>
</template>
<script>
import BaseCard from "@/components/BaseComponents/BaseCard.vue";
import AddNewProgramModal from "@/components/Modals/AddNewProgramModal.vue";
import { WorkflowRepository } from "../repositories";
import { useToast } from "vue-toastification";

export default {
  components: {
    BaseCard,
    AddNewProgramModal,
  },
  setup() {
    const toast = useToast();
    return {
      toast,
    };
  },
  data() {
    return {
      showAddNewProgramModal: false,
      programs: [],
      loading: true,
    };
  },
  mounted() {
    this.refreshPrograms();
  },
  methods: {
    async refreshPrograms() {
      try {
        this.loading = true;
        const { data } = await WorkflowRepository.getPrograms();
        this.programs = data;
      } catch (error) {
        this.toast.error("Unable to fetch programs");
      }
    },
  },
};
</script>
<style lang="scss" scoped>
</style>