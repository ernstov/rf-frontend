<template>
  <div class="add-new-asset">
    <div class="px-60 py-32 bg-transparent h-full">
      <form @submit.prevent="onSubmit">
        <div class="bg-white p-14 rounded-md">
          <h2 class="text-6xl mb-12">Add New Asset</h2>
          <p class="text-3xl mb-5">Title</p>
          <input
            class="
              placeholder-gray-500 placeholder-opacity-50
              w-full
              h-16
              text-2xl
              px-5
              border border-gray-300
              rounded-md
              outline-none
              focus:outline-none
            "
            v-model="form.title"
            type="text"
            name="title"
          />

          <div class="grid grid-cols-2 gap-14 mt-14">
            <div>
              <p class="text-3xl mb-5">Owners</p>
              <v-select
                searchable
                name="owners"
                clearable
                class="search-select"
                close-on-select
                :options="ownerOptions"
                @search="onOwnerSearch"
                v-model="form.owners"
                multiple
                :reduce="(o) => o.id"
                label="name"
              />
            </div>
            <div>
              <p class="text-3xl mb-5">Inventors</p>
              <v-select
                searchable
                clearable
                name="inventors"
                multiple
                label="name"
                class="search-select"
                close-on-select
                :reduce="(i) => i.id"
                v-model="form.inventors"
                :options="inventorOptions"
                @search="onInventorSearch"
              />
            </div>
            <div>
              <p class="text-3xl mb-5">Technology Types</p>
              <v-select
                searchable
                clearable
                multiple
                label="name"
                name="technology_types"
                class="search-select"
                close-on-select
                :reduce="(i) => i.id"
                v-model="form.technology_types"
                :options="technologyOptions"
                @search="onTechSearch"
              />
            </div>
            <div>
              <p class="text-3xl mb-5">Status</p>
              <v-select
                searchable
                clearable
                name="status"
                label="name"
                class="search-select"
                close-on-select
                :reduce="(i) => i.id"
                v-model="form.status"
                :options="statusOptions"
                @search="onStatusSearch"
              />
            </div>
            <div>
              <p class="text-3xl mb-5">Workflow</p>
              <v-select
                searchable
                clearable
                multiple
                label="name"
                class="search-select"
                close-on-select
                :reduce="(i) => i.id"
                v-model="form.workflow"
                :options="workflowOptions"
                @search="onWorkflowSearch"
              />
            </div>
          </div>

          <div class="grid grid-cols-2 gap-14 mt-14">
            <div>
              <p class="text-3xl mb-5">Patent Numbers</p>
              <input
                class="
                  placeholder-gray-500 placeholder-opacity-50
                  w-full
                  h-16
                  text-2xl
                  px-5
                  border border-gray-300
                  rounded-md
                  outline-none
                  focus:outline-none
                "
                name="patent_numbers"
                type="text"
                v-model="form.patent_numbers"
                placeholder="(comma separated)"
              />
            </div>
            <div>
              <p class="text-3xl mb-5">Cipher family ID</p>
              <input
                class="
                  placeholder-gray-500 placeholder-opacity-50
                  w-full
                  h-16
                  text-2xl
                  px-5
                  border border-gray-300
                  rounded-md
                  outline-none
                  focus:outline-none
                "
                type="text"
                name="cipher"
                v-model="form.family_id"
              />
            </div>
            <div>
              <p class="text-3xl mb-5">Publication Date</p>
              <input
                class="
                  placeholder-gray-500 placeholder-opacity-50
                  w-full
                  h-16
                  text-2xl
                  px-5
                  border border-gray-300
                  rounded-md
                  outline-none
                  focus:outline-none
                "
                type="date"
                name="publication_date"
                v-model="form.publication_date"
              />
            </div>
            <div>
              <p class="text-3xl mb-5">Priority Date</p>
              <input
                class="
                  placeholder-gray-500 placeholder-opacity-50
                  w-full
                  h-16
                  text-2xl
                  px-5
                  border border-gray-300
                  rounded-md
                  outline-none
                  focus:outline-none
                "
                type="date"
                name="priority_date"
                v-model="form.priority_date"
              />
            </div>
            <div>
              <p class="text-3xl mb-5">Expiry Date</p>
              <input
                class="
                  placeholder-gray-500 placeholder-opacity-50
                  w-full
                  h-16
                  text-2xl
                  px-5
                  border border-gray-300
                  rounded-md
                  outline-none
                  focus:outline-none
                "
                type="date"
                name="expiry_date"
                v-model="form.expiry_date"
              />
            </div>
          </div>
          <p class="text-3xl mb-5 mt-14">Abstract</p>
          <textarea
            name="abstract"
            cols="30"
            rows="10"
            class="
              placeholder-gray-500 placeholder-opacity-50
              w-full
              h-60
              text-2xl
              px-5
              py-5
              border border-gray-300
              rounded-md
              outline-none
              focus:outline-none
            "
            as="textarea"
            v-model="form.abstract"
          ></textarea>
          <p class="text-3xl mb-5 mt-14">Description</p>
          <textarea
            name="description"
            cols="30"
            rows="10"
            v-model="form.description"
            class="
              placeholder-gray-500 placeholder-opacity-50
              w-full
              h-60
              text-2xl
              px-5
              py-5
              border border-gray-300
              rounded-md
              outline-none
              focus:outline-none
            "
            as="textarea"
          ></textarea>
          <p class="text-3xl mb-5 mt-14">Claims</p>
          <textarea
            name="claims"
            cols="30"
            rows="10"
            class="
              placeholder-gray-500 placeholder-opacity-50
              w-full
              h-60
              text-2xl
              px-5
              py-5
              border border-gray-300
              rounded-md
              outline-none
              focus:outline-none
            "
            as="textarea"
            v-model="form.claims"
          ></textarea>
          <div class="flex mt-14">
            <BaseButton class="bg-green-600 mr-12 w-80" :loading="loading">
              Submit</BaseButton
            >
            <div />
            <button
              class="
                bg-gray-600
                text-white
                py-4
                rounded-md
                text-3xl
                font-medium
                hover:bg-gray-700
                transition
                duration-300
                w-80
              "
              @click.prevent="$router.push(`/assets-explorer`)"
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import BaseButton from "@/components/BaseComponents/BaseButton.vue";
import { useToast } from "vue-toastification";
import {
  InventorRepository,
  OwnerRepository,
  StatusRepository,
  TechnologyRepository,
  WorkflowRepository,
} from "../repositories";
import { AssetRepository } from "../repositories/asset";
import { assetSchema } from "../utils";
export default {
  components: {
    BaseButton,
    // Modal,
  },
  setup() {
    const toast = useToast();

    return {
      toast,
    };
  },
  data() {
    return {
      ownerOptions: [],
      inventorOptions: [],
      technologyOptions: [],
      statusOptions: [],
      workflowOptions: [],
      form: {
        title: "",
        owners: [],
        inventors: [],
        patent_numbers: "",
        family_id: "",
        publication_date: "",
        priority_date: "",
        expiry_date: "",
        technology_types: [],
        status: [],
        workflow: [],
        abstract: "",
        description: "",
        claims: "",
      },
      loading: false,
    };
  },
  mounted() {},
  methods: {
    async onOwnerSearch(q, loading) {
      try {
        this.ownerOptions = [];
        loading(true);
        const { data: result } = await OwnerRepository.search(q);
        loading(false);
        if (result && result.length) {
          this.ownerOptions = result;
        }
      } catch (error) {
        console.log(error);
        loading(false);
      }
    },
    async onInventorSearch(q, loading) {
      try {
        this.inventorOptions = [];
        loading(true);
        const { data: result } = await InventorRepository.search(q);
        loading(false);
        if (result && result.length) {
          this.inventorOptions = result;
        }
      } catch (error) {
        loading(false);
        console.log(error);
      }
    },

    async onTechSearch(q, loading) {
      try {
        this.technologyOptions = [];
        loading(true);
        const { data: result } = await TechnologyRepository.search(q);
        loading(false);
        if (result && result.length) {
          this.technologyOptions = result;
        }
      } catch (error) {
        loading(false);
        console.log(error);
      }
    },

    async onStatusSearch(q, loading) {
      try {
        this.statusOptions = [];
        loading(true);
        const { data: result } = await StatusRepository.search(q);
        loading(false);
        if (result && result.length) {
          this.statusOptions = result;
        }
      } catch (error) {
        loading(false);
        console.log(error);
      }
    },

    async onWorkflowSearch(q, loading) {
      try {
        this.workflowOptions = [];
        loading(true);
        const { data: result } = await WorkflowRepository.search(q);
        loading(false);
        if (result && result.length) {
          this.workflowOptions = result;
        }
      } catch (error) {
        loading(false);
        console.log(error);
      }
    },

    async onSubmit() {
      const payload = this.form;
      payload.patent_numbers = this.form?.patent_numbers?.split(",") || [];
      try {
        await assetSchema.validate(payload);
      } catch (error) {
        this.loading = false;
        console.log(error);
        this.toast.error(error.message);
        return;
      }

      // save asset
      try {
        this.loading = true;
        await AssetRepository.create(payload);
        this.toast.success("Asset Created");
        this.loading = false;

        this.$router.push("/assets-explorer");
      } catch (error) {
        this.loading = false;

        this.toast.error(error.message);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
</style>