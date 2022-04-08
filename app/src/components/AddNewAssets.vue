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
              <OwnerSelect v-model="form.owners" />
            </div>
            <div>
              <p class="text-3xl mb-5">Inventors</p>
              <InventorSelect v-model="form.inventors" />
            </div>
            <div>
              <p class="text-3xl mb-5">Technology Types</p>
              <TechTypeSelect v-model="form.technology_types" />
            </div>
            <div>
              <p class="text-3xl mb-5">Status</p>
              <StatusSelect v-model="form.status" />
            </div>
            <div>
              <p class="text-3xl mb-5">Workflow</p>
              <WorkflowSelect v-model="form.workflow" />
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
import { AssetRepository } from "../repositories/asset";
import { assetSchema } from "../utils";
import OwnerSelect from "./OwnerSelect.vue";
import TechTypeSelect from "./TechTypeSelect.vue";
import StatusSelect from "./StatusSelect.vue";
import WorkflowSelect from "./WorkflowSelect.vue";
import InventorSelect from "./InventorSelect.vue";
export default {
  components: {
    BaseButton,
    OwnerSelect,
    TechTypeSelect,
    StatusSelect,
    WorkflowSelect,
    InventorSelect,
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