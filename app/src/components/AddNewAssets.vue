<template>
  <div class="add-new-asset">
    <the-navbar></the-navbar>
    <div class="px-60 py-32 bg-transparent h-full">
      <form action="" class="bg-white p-14 rounded-md">
        <h2 class="text-6xl mb-12">Add New Assets</h2>
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
        />
        <div class="grid grid-cols-2 gap-14 mt-14">
          <div>
            <p class="text-3xl mb-5">Owners</p>
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
            />
          </div>
          <div>
            <p class="text-3xl mb-5">Inventors</p>
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
            />
          </div>
        </div>
        <div class="grid grid-cols-3 gap-0 mt-14">
          <base-dropdown></base-dropdown>
          <base-dropdown></base-dropdown>
          <base-dropdown></base-dropdown>
        </div>
        <div class="grid grid-cols-3 gap-0 mt-14">
          <base-dropdown></base-dropdown>
          <base-dropdown></base-dropdown>
          <base-dropdown></base-dropdown>
        </div>
        <p class="text-3xl mb-5 mt-14">Abstract</p>
        <textarea
          name=""
          id=""
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
        ></textarea>
        <p class="text-3xl mb-5 mt-14">Description</p>
        <textarea
          name=""
          id=""
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
        ></textarea>
        <p class="text-3xl mb-5 mt-14">Claims</p>
        <textarea
          name=""
          id=""
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
        ></textarea>
        <div class="flex mt-14">
          <button
            class="
              bg-green-600
              text-white
              py-4
              rounded-md
              text-3xl
              font-medium
              hover:bg-green-700
              transition
              duration-300
              mr-20
              w-80
            "
          >
            Add
          </button>
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
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import TheNavbar from "@/components/layout/TheNavbar.vue";
import BaseDropdown from "@/components/BaseComponents/BaseDropdown.vue";

export default {
  components: {
    TheNavbar,
    BaseDropdown,
    // Modal,
  },
};
</script>
<style lang="scss" scoped>
</style>