<template>
  <div id="edit-asset">
    <div class="px-60 py-32 bg-transparent h-full">
      <form @submit.prevent="onSubmit" v-if="asset">
        <div class="bg-white p-14 rounded-md">
          <h2 class="text-6xl mb-12">Update Asset</h2>
          <p class="text-xl mb-2">Family ID</p>
          <h4 class="text-3xl mb-5">{{ asset.family_id }}</h4>

          <div class="grid grid-cols-2 gap-14 mt-14">
            <div>
              <p class="text-3xl mb-5">Technology Types</p>
              <TechTypeSelect v-model="asset.technology_types" />
            </div>
            <div>
              <p class="text-3xl mb-5">Status</p>
              <StatusSelect v-model="asset.status" />
            </div>
            <div>
              <p class="text-3xl mb-5">Workflow</p>
              <WorkflowSelect v-model="asset.workflow" />
            </div>
          </div>

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
import { ref } from "@vue/reactivity";
import { useRoute } from "vue-router";
import TechTypeSelect from "../components/TechTypeSelect.vue";
import WorkflowSelect from "../components/WorkflowSelect.vue";
import { AssetRepository } from "../repositories/asset";
import { onMounted } from "@vue/runtime-core";
import BaseButton from "../components/BaseComponents/BaseButton.vue";
import StatusSelect from "../components/StatusSelect.vue";
import { assetEditSchema } from "../utils";
import { useToast } from "vue-toastification";
export default {
  setup() {
    const route = useRoute();
    const assetId = route.params.id;
    const asset = ref(null);
    const toast = useToast();
    const loading = ref(false);
    const fetchAsset = async () => {
      try {
        const { data } = await AssetRepository.findById(assetId);
        asset.value = data;
      } catch (error) {
        console.log(error);
      }
    };

    onMounted(fetchAsset);
    return {
      assetId,
      asset,
      toast,
      loading,
    };
  },
  components: { TechTypeSelect, WorkflowSelect, BaseButton, StatusSelect },
  methods: {
    async onSubmit() {
      const { technology_types, workflow, status } = this.asset;
      const payload = {
        technology_types: technology_types?.map((i) => i.id || i) || [],
        workflow: workflow?.map((i) => i.id || i) || [],
        status: status.id || status,
      };
      try {
        await assetEditSchema.validate(payload);
      } catch (error) {
        this.loading = false;
        console.log(error);
        this.toast.error(error.message);
        return;
      }
      this.loading = true;

      try {
        await AssetRepository.update(this.assetId, payload);
        this.toast.success("Asset Updated");
        this.$router.push("/assets-explorer");
      } catch (error) {
        this.loading = false;
        console.log(error);
        this.tost.error("unable to update asset");
      }
    },
  },

  watch: {},
};
</script>

<style lang="scss" scoped >
</style>