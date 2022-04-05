<template>
  <div class="assets-view">
    <div class="px-60 py-32 h-full">
      <h2 class="text-6xl mb-12">Family ID - {{ asset?.family_id }}</h2>

      <div class="grid grid-cols-3 gap-16" v-if="asset">
        <div class="col-span-2 bg-white py-12 px-10 rounded-md">
          <h2 class="text-4xl mb-6">Title</h2>
          <p class="text-3xl font-light leading-10 mb-16">
            {{ asset.title }}
          </p>
          <h2 class="text-4xl mb-6">Status</h2>
          <p class="text-3xl font-light leading-10 mb-16">
            {{ asset.status?.name }}
          </p>
          <h2 class="text-4xl mb-6">Description</h2>
          <p class="text-3xl font-light leading-10 mb-16">
            {{ asset.description }}
          </p>
          <h2 class="text-4xl mb-6">Claims</h2>
          <p class="text-3xl font-light leading-10 mb-16">
            {{ asset.claims }}
          </p>
          <h2 class="text-4xl mb-6">Abstract</h2>
          <p class="text-3xl font-light leading-10 mb-16">
            {{ asset.abstract }}
          </p>
          <h2 class="text-4xl mb-6">Claims</h2>
          <p class="text-3xl font-light leading-10 mb-16">
            {{ asset.claims }}
          </p>
          <h2 class="text-4xl mb-6">Inventors</h2>
          <p class="text-3xl font-light leading-10 mb-16">
            {{ asset?.inventors?.map((i) => i.name)?.toString() }}
          </p>

          <h2 class="text-4xl mb-6">Owners</h2>
          <p class="text-3xl font-light leading-10 mb-16">
            {{ asset?.owners?.map((i) => i.name)?.toString() }}
          </p>
          <h2 class="text-4xl mb-6">Patent Numbers</h2>
          <p class="text-3xl font-light leading-10 mb-16">
            {{ asset?.patent_numbers?.toString() }}
          </p>
          <h2 class="text-4xl mb-6">Workflows</h2>
          <p class="text-3xl font-light leading-10 mb-16">
            {{ asset?.workflow?.map((i) => i.name)?.toString() }}
          </p>
          <h2 class="text-4xl mb-6">Technology Types</h2>
          <p class="text-3xl font-light leading-10 mb-16">
            {{ asset?.technology_types?.map((i) => i.name)?.toString() }}
          </p>
          <div class="flex items-center flex-wrap">
            <div class="mr-8 mb-8">
              <h2 class="text-4xl mb-6">Publication Date</h2>
              <p class="text-3xl font-light leading-10 mb-16">
                {{ asset?.publication_date }}
              </p>
            </div>
            <div class="mr-8 mb-8">
              <h2 class="text-4xl mb-6">Priority Date</h2>
              <p class="text-3xl font-light leading-10 mb-16">
                {{ asset?.priority_date }}
              </p>
            </div>
            <div class="mr-8 mb-8">
              <h2 class="text-4xl mb-6">Expiry Date</h2>
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