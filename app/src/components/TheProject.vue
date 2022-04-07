<template>
  <div>
    <div class="px-60 py-32">
      <h4
        class="text-4xl w-full text-center text-gray-500"
        v-if="!projects.length && !loading"
      >
        No programs found on the server.
      </h4>

      <div class="flex flex-wrap">
        <base-card v-for="project in projects" :key="project.id" class="card">
          <p class="text-xl text-green-600">Name</p>
          <h4 class="font-semibold">{{ project.name }}</h4>
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
            {{ project.description }}
          </p>
          <div
            class="absolute right-3 top-3 hidden edit"
            @click="projectToEdit = project"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-12 w-12 p-2 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
          </div>
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
        <add-new-project-modal
          v-if="showAddNewProgramModal"
          @close-modal="
            () => {
              refreshProjects();
              showAddNewProgramModal = false;
            }
          "
        ></add-new-project-modal>
        <edit-project-modal
          v-if="projectToEdit"
          :value="projectToEdit"
          @close-modal="
            () => {
              refreshProjects();
              projectToEdit = false;
            }
          "
        />
      </div>
    </div>
  </div>
</template>
<script>
import BaseCard from "@/components/BaseComponents/BaseCard.vue";
import { WorkflowRepository } from "../repositories";
import AddNewProjectModal from "./Modals/AddNewProjectModal.vue";
import EditProjectModal from "./Modals/EditProjectModal.vue";

export default {
  components: {
    BaseCard,
    AddNewProjectModal,
    EditProjectModal,
  },
  data() {
    return {
      showAddNewProgramModal: false,
      projects: [],
      projectToEdit: false,
      loading: false,
    };
  },
  mounted() {
    this.refreshProjects();
  },
  methods: {
    async refreshProjects() {
      try {
        this.loading = true;
        const { data } = await WorkflowRepository.getProjects();
        this.projects = data;
        this.loading = false;
      } catch (error) {
        this.loading = false;
        this.toast.error("Unable to fetch programs");
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.card {
  &:hover {
    .edit {
      display: block;
      cursor: pointer;
    }
  }
}
</style>