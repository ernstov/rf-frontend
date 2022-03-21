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
        items-center
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
          sm:my-8 sm:align-middle sm:max-w-6xl sm:w-full
          p-12
        "
      >
        <h2 class="text-5xl mb-8">Bulk Upload</h2>
        <div class="bg-white">
          <form action="">
            <div class="grid grid-cols-2 gap-14 mt-14">
              <div>
                <p class="text-3xl mb-5">CSV File</p>
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
                <base-dropdown class="w-full"></base-dropdown>
              </div>
            </div>
          </form>
        </div>
        <div class="py-3 flex justify-end items-end mt-8">
          <button
            type="button"
            class="
              w-30
              inline-flex
              justify-center
              rounded-md
              border border-transparent
              shadow-sm
              px-16
              py-4
              bg-red-600
              font-medium
              text-white
              hover:bg-red-700
              focus:outline-none
              sm:w-auto
              text-3xl
              bg-green-600
              hover:bg-green-700
            "
          >
            Save
          </button>
          <button
            type="button"
            class="
              w-30
              inline-flex
              justify-center
              rounded-md
              border border-transparent
              shadow-sm
              px-16
              py-4
              bg-gray-600
              font-medium
              text-white
              hover:bg-gray-700
              focus:outline-none
              sm:w-auto
              text-3xl
              ml-10
            "
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BaseDropdown from "@/components/BaseComponents/BaseDropdown.vue";

export default {
  components: {
    BaseDropdown,
  },
};
</script>