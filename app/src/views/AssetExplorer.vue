<template>
  <div>
    <div class="px-60 py-32">
      <div class="flex items-center">
        <div class="w-1/3 mr-8">
          <p>Select By Workflow</p>
          <WorkflowSelect class="" single v-model="workflow" />
        </div>
        <div class="w-1/3">
          <p>Select By Status</p>
          <StatusSelect v-model="status" />
        </div>
        <BaseButton
          class="bg-green-600 w-80 py-7 self-end ml-16"
          @click="paginateNext(1)"
          :loading="loading"
          >Apply</BaseButton
        >
      </div>
      <AssetTable :assets="assets" />
      <p
        v-if="!assets.length && !loading"
        class="bg-white text-center text-2xl pt-4 text-gray-500"
      >
        No assets found on the server
      </p>
      <div
        class="
          flex
          items-end
          justify-end
          py-10
          bg-white
          rounded-b-2xl
          px-10
          mb-12
        "
      >
        <Paginator
          v-if="assets.length"
          :current-page="query.page"
          :total-pages="totalPages"
          :total="count"
          :per-page="query.page_size"
          @paginateTo="paginateNext"
        />
      </div>
      <div class="flex">
        <a class="link cursor-pointer" @click="showBulkUploadModal = true"
          >Import from file</a
        >
        <router-link class="link cursor-pointer" to="/assets-explorer/new"
          >Add New Asset</router-link
        >
      </div>
    </div>
    <bulk-upload-modal
      v-if="showBulkUploadModal"
      @close-modal="showBulkUploadModal = false"
    ></bulk-upload-modal>
    <edit-asset-modal
      v-if="shoeEditAssetModal"
      @cancel="shoeEditAssetModal = false"
    ></edit-asset-modal>
  </div>
</template>
<script>
import BulkUploadModal from "@/components/Modals/BulkUploadModal.vue";
import EditAssetModal from "@/components/Modals/EditAssetModal.vue";
import AssetTable from "@/components/AssetTable.vue";
import Paginator from "@/components/Paginator.vue";
import { useRoute, useRouter } from "vue-router";
import { ref } from "@vue/runtime-core";
import { AssetRepository } from "../repositories/asset";
import { useToast } from "vue-toastification";
import WorkflowSelect from "../components/WorkflowSelect.vue";
import StatusSelect from "../components/StatusSelect.vue";
import BaseButton from "../components/BaseComponents/BaseButton.vue";
const PAGE_SIZE = 10;

export default {
  components: {
    BulkUploadModal,
    EditAssetModal,
    AssetTable,
    Paginator,
    WorkflowSelect,
    StatusSelect,
    BaseButton,
  },
  beforeRouteUpdate(to, from, next) {
    if (to.query.page) {
      for (const key in to.query) {
        if (Object.hasOwnProperty.call(to.query, key)) {
          this.query[key] = parseInt(to.query[key]);
        }
      }
    }
    this.refreshAssets();
    next();
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const assets = ref([]);
    const totalPages = ref(1);
    const count = ref(1);
    const query = ref({
      page: 1,
      page_size: PAGE_SIZE,
    });

    for (const key in route.query) {
      if (Object.hasOwnProperty.call(route.query, key)) {
        query.value[key] = route.query[key];
      }
    }

    const toast = useToast();

    return {
      assets,
      query,
      totalPages,
      router,
      toast,
      count,
    };
  },
  mounted() {
    this.refreshAssets();
  },
  data() {
    return {
      shoeEditAssetModal: false,
      showBulkUploadModal: false,
      loading: true,
      workflow: null,
      status: null,
    };
  },
  methods: {
    paginateNext(val) {
      this.workflow
        ? (this.query.workflow = this.workflow)
        : delete this.query.workflow;
      this.status
        ? (this.query.status = this.status)
        : delete this.query.status;

      this.$router.push({
        path: "/assets-explorer",
        query: { ...this.query, page: val },
      });
    },

    async refreshAssets() {
      try {
        this.loading = true;
        const { data } = await AssetRepository.find(this.query);
        this.assets = data?.results || [];
        this.totalPages = Math.ceil(
          data.count / parseInt(this.query.page_size)
        );
        this.count = data.count;
        this.loading = false;
      } catch (error) {
        this.loading = false;
        console.log(error);
        this.toast.error("Unable to fetch assets");
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.link {
  background-color: #00a06e;
  color: hsl(0, 0%, 100%);
  padding: 0.8rem 5rem;
  font-weight: bold;
  font-size: 1.5rem;
  border-radius: 0.7rem;
  margin-right: 3rem;
}
.link:hover {
  background-color: #00a06daf;
}
</style>