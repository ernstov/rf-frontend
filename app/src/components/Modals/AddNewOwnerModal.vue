<template>
  <div
    class="fixed z-10 inset-0 overflow-y-auto"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <div
      class="
        flex
        items-end
        justify-center
        min-h-screen
        pt-4
        px-4
        pb-20
        text-center
        sm:block sm:p-0
      "
    >
      <div
        class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        aria-hidden="true"
      ></div>

      <span
        class="hidden sm:inline-block sm:align-middle sm:h-screen"
        aria-hidden="true"
        >&#8203;</span
      >
      <div
        class="
          relative
          inline-block
          align-bottom
          bg-white
          rounded-lg
          text-left
          overflow-hidden
          shadow-xl
          transform
          transition-all
          sm:my-8 sm:align-middle sm:max-w-5xl sm:w-full
          p-12
        "
      >
        <div class="header flex justify-between">
          <h2 class="text-5xl mb-8">Add New Owner</h2>
          <span class="icon cursor-pointer" @click="$emit('close-modal')">
            <svg
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width="20px"
              height="20px"
              viewBox="0 0 94.926 94.926"
              style="enable-background: new 0 0 94.926 94.926"
              xml:space="preserve"
            >
              <path
                d="M55.931,47.463L94.306,9.09c0.826-0.827,0.826-2.167,0-2.994L88.833,0.62C88.436,0.224,87.896,0,87.335,0
              c-0.562,0-1.101,0.224-1.498,0.62L47.463,38.994L9.089,0.62c-0.795-0.795-2.202-0.794-2.995,0L0.622,6.096
              c-0.827,0.827-0.827,2.167,0,2.994l38.374,38.373L0.622,85.836c-0.827,0.827-0.827,2.167,0,2.994l5.473,5.476
              c0.397,0.396,0.936,0.62,1.498,0.62s1.1-0.224,1.497-0.62l38.374-38.374l38.374,38.374c0.397,0.396,0.937,0.62,1.498,0.62
              s1.101-0.224,1.498-0.62l5.473-5.476c0.826-0.827,0.826-2.167,0-2.994L55.931,47.463z"
              />
            </svg>
          </span>
        </div>
        <div class="bg-white">
          <form @submit.prevent="onSubmit">
            <p class="text-3xl mb-5">Name</p>
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
              required
              v-model="form.name"
            />
            <p class="text-3xl mb-5 mt-8">Description</p>
            <textarea
              name=""
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
              required
              v-model="form.description"
            ></textarea>
            <select
              class="w-full p-3 mt-4 bg-white border text-2xl rounded-lg mb-4"
              v-model="form.owner_type"
            >
              <option value="" disabled>Select Owner Type</option>
              <option :value="o" v-for="o in ownerTypes" :key="o">
                {{ o }}
              </option>
            </select>
            <BaseButton
              :loading="loading"
              class="bg-green-600 w-80 py-8 mt-8 float-right"
            >
              Submit
            </BaseButton>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { useToast } from "vue-toastification";
import { OwnerRepository } from "../../repositories";
import { ownerCreateSchema } from "../../utils";
import BaseButton from "../BaseComponents/BaseButton.vue";

export default {
  props: {
    query: {
      type: String,
      required: false,
    },
  },
  setup() {
    const toast = useToast();
    return {
      toast,
    };
  },
  data() {
    return {
      form: {
        name: "",
        description: "",
        owner_type: "",
      },
      ownerTypes: [
        "fmcg",
        "compititor",
        "sme",
        "pvt",
        "individual",
        "univeristy",
        "other",
      ],
      loading: false,
    };
  },
  mounted() {
    if (this.query) {
      this.form.name = this.query;
    }
  },
  methods: {
    async onSubmit() {
      try {
        await ownerCreateSchema.validate(this.form);
      } catch (error) {
        this.toast.error(error.message);
        return;
      }
      try {
        this.loading = true;
        const { data } = await OwnerRepository.create(this.form);
        this.loading = false;
        this.toast.success("Owner Created");
        this.$emit("close-modal", data);
      } catch (error) {
        this.loading = false;
        console.log(error);
      }
    },
  },
  components: { BaseButton },
};
</script>