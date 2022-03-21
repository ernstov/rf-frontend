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
        <h2 class="text-5xl mb-8">Add New Program</h2>
        <div class="bg-white">
          <form action="">
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
            />
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
          </form>
        </div>
        <div class="py-3 sm:flex sm:flex-row-reverse mt-5">
          <button
            type="button"
            class="
              w-full
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
              sm:ml-3 sm:w-auto
              text-3xl
              bg-green-600
              hover:bg-green-700
            "
          >
            Add
          </button>
        </div>
      </div>
    </div>
  </div>
</template>