<template>
  <div id="asset-view">
    <div class="px-60 py-32 h-full">
      <p class="text-2xl mb-2">Showing asset details for family id</p>
      <div class="flex items-center mb-3 bg-white p-6 rounded-lg">
        <div class="mr-8 cursor-pointer bg-gray-100 rounded-full w-16 h-16 p-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-full w-full text-gray-500"
            @click="$router.go(-1)"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <h2 class="text-4xl text-gray-500">
          <span class="text-green-600 font-medium">{{ asset?.family_id }}</span>
        </h2>
      </div>
      <div class="grid grid-cols-3 gap-3" v-if="asset">
        <div class="col-span-2 bg-white py-12 px-10 rounded-md">
          <h2 class="text-2xl mb-2 text-gray-500">Title</h2>
          <p class="text-gray-500 text-3xl font-light leading-10 mb-14">
            {{ asset.title }}
          </p>

          <h2 class="text-2xl mb-2 text-gray-500">Description</h2>
          <p class="text-gray-500 text-3xl font-light leading-10 mb-14">
            {{ asset.description || "-" }}
          </p>
          <h2 class="text-2xl mb-2 text-gray-500">Claims</h2>
          <p class="text-gray-500 text-3xl font-light leading-10 mb-14">
            {{ asset.claims || "-" }}
          </p>
          <h2 class="text-2xl mb-2 text-gray-500">Abstract</h2>
          <p class="text-gray-500 text-3xl font-light leading-10 mb-14">
            {{ asset.abstract || "-" }}
          </p>
          <h2 class="text-2xl mb-2 text-gray-500">Status</h2>
          <p
            class="
              text-gray-500 text-2xl
              font-light
              leading-10
              mb-14
              inline-block
              px-6
              font-medium
              py-2
              rounded-lg
            "
            :class="asset.status.name.toLowerCase()"
          >
            {{ asset.status.name || "-" }}
          </p>
          <h2 class="text-2xl mb-3 text-gray-500">Inventors</h2>
          <div
            v-if="asset.inventors.length"
            class="w-full flex flex-wrap text-3xl font-light leading-10 mb-14"
          >
            <span
              v-for="i in asset.inventors"
              :key="i.id"
              class="
                border border-blue-500
                mr-2
                mb-2
                px-4
                py-1
                rounded-lg
                text-blue-500
              "
            >
              {{ i.name }}
            </span>
          </div>
          <p v-else>-</p>

          <h2 class="text-2xl mb-2 text-gray-500">Owners</h2>
          <div
            v-if="asset.owners.length"
            class="w-full flex flex-wrap text-3xl font-light leading-10 mb-14"
          >
            <span
              v-for="i in asset.owners"
              :key="i.id"
              class="
                border border-blue-500
                mr-2
                mb-2
                px-4
                py-1
                rounded-lg
                text-blue-500
              "
            >
              {{ i.name }}
            </span>
          </div>
          <p v-else>-</p>
          <h2 class="text-2xl mb-2 text-gray-500">Patent Numbers</h2>
          <div
            v-if="asset.patent_numbers.length"
            class="w-full flex flex-wrap text-3xl font-light leading-10 mb-14"
          >
            <span
              v-for="i in asset.patent_numbers"
              :key="i"
              class="
                border border-blue-500
                mr-2
                mb-2
                px-4
                py-1
                rounded-lg
                text-blue-500
              "
            >
              {{ i }}
            </span>
          </div>
          <p v-else>-</p>
          <h2 class="text-2xl mb-2 text-gray-500">Workflows</h2>
          <div
            v-if="asset.workflow.length"
            class="w-full flex flex-wrap text-3xl font-light leading-10 mb-14"
          >
            <span
              v-for="i in asset.workflow"
              :key="i.id"
              class="
                border border-blue-500
                mr-2
                mb-2
                px-4
                py-1
                rounded-lg
                text-blue-500
              "
            >
              {{ i.name }}
            </span>
          </div>
          <p v-else>-</p>
          <h2 class="text-2xl mb-2 text-gray-500">Technology Types</h2>
          <div
            v-if="asset.technology_types.length"
            class="w-full flex flex-wrap text-3xl font-light leading-10 mb-14"
          >
            <span
              v-for="i in asset.technology_types"
              :key="i.id"
              class="
                border border-blue-500
                mr-2
                mb-2
                px-4
                py-1
                rounded-lg
                text-blue-500
              "
            >
              {{ i.name }}
            </span>
          </div>
          <p v-else>-</p>
          <div class="flex items-center flex-wrap">
            <div class="mr-16 mb-8">
              <h2 class="text-2xl mb-2 text-gray-500">Publication Date</h2>
              <p class="text-3xl font-light leading-10 mb-16">
                {{ asset?.publication_date }}
              </p>
            </div>
            <div class="mr-16 mb-8">
              <h2 class="text-2xl mb-2 text-gray-500">Priority Date</h2>
              <p class="text-3xl font-light leading-10 mb-16">
                {{ asset?.priority_date }}
              </p>
            </div>
            <div class="mr-16 mb-8">
              <h2 class="text-2xl mb-2 text-gray-500">Expiry Date</h2>
              <p class="text-3xl font-light leading-10 mb-16">
                {{ asset?.expiry_date }}
              </p>
            </div>
          </div>
        </div>
        <div class="col-span-1 bg-white py-12 px-10 rounded-md">
          <h2 class="text-5xl mb-12">Future Functionality Menu</h2>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "@vue/reactivity";
import { useRoute } from "vue-router";
import { onMounted } from "@vue/runtime-core";
import { AssetRepository } from "../repositories/asset";
import { useToast } from "vue-toastification";

export default {
  setup() {
    const route = useRoute();
    const asset = ref(null);
    const toast = useToast();
    const fetchAsset = async () => {
      try {
        const { data } = await AssetRepository.findById(route.params.id);
        asset.value = data;
      } catch (error) {
        toast.error("Unable to fetch asset");
      }
    };
    onMounted(fetchAsset);

    return {
      asset,
    };
  },
};
</script>
<style lang="scss" scoped>
#asset-view {
  position: relative;

  h2 {
    font-weight: normal;
  }

  .granted {
    background: rgb(177, 255, 177);
  }
  .pending {
    background: rgb(255, 255, 216);
  }
  .expired {
    background: rgb(255, 237, 202);
  }

  .inactive {
    background: rgb(225, 225, 225);
    color: rgb(31, 31, 31);
  }

  .rejected {
    background: rgb(250, 138, 138);
    color: white;
  }
}
</style>