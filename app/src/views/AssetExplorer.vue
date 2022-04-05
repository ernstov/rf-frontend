<template>
  <div>
    <div class="px-60 py-32">
      <div class="flex">
        <base-dropdown></base-dropdown>
        <base-dropdown></base-dropdown>
        <base-dropdown></base-dropdown>
      </div>
      <AssetTable :assets="assets" />
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
import BaseDropdown from "@/components/BaseComponents/BaseDropdown.vue";
import BulkUploadModal from "@/components/Modals/BulkUploadModal.vue";
import EditAssetModal from "@/components/Modals/EditAssetModal.vue";
import AssetTable from "@/components/AssetTable.vue";
import Paginator from "@/components/Paginator.vue";
import { useRoute, useRouter } from "vue-router";
import { ref } from "@vue/runtime-core";
import { AssetRepository } from "../repositories/asset";
import { useToast } from "vue-toastification";
const PAGE_SIZE = 20;

export default {
  components: {
    BaseDropdown,
    BulkUploadModal,
    EditAssetModal,
    AssetTable,
    Paginator,
  },
  beforeRouteUpdate(to, from, next) {
    if (to.query.page) {
      this.query = {
        page: parseInt(to.query.page),
        page_size: parseInt(to.query.page_size),
      };
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

    if (route.query.page) {
      query.value = {
        page: parseInt(route.query.page),
        page_size: parseInt(route.query.page_size),
      };
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
    };
  },
  methods: {
    paginateNext(val) {
      this.$router.push({
        path: "/assets-explorer",
        query: { ...this.query, page: val },
      });
    },

    async refreshAssets() {
      try {
        const { data } = await AssetRepository.find(this.query);
        this.assets = data?.results || [];
        this.totalPages = Math.ceil(
          data.count / parseInt(this.query.page_size)
        );
        this.count = data.count;
      } catch (error) {
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