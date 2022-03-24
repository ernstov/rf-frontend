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
        <h2 class="text-5xl mb-8">Add New Program</h2>
        <span class="icon cursor-pointer" @click="$emit('close-modal')">
          <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            width="20px" height="20px" viewBox="0 0 94.926 94.926" style="enable-background:new 0 0 94.926 94.926;"
            xml:space="preserve">
            <path d="M55.931,47.463L94.306,9.09c0.826-0.827,0.826-2.167,0-2.994L88.833,0.62C88.436,0.224,87.896,0,87.335,0
              c-0.562,0-1.101,0.224-1.498,0.62L47.463,38.994L9.089,0.62c-0.795-0.795-2.202-0.794-2.995,0L0.622,6.096
              c-0.827,0.827-0.827,2.167,0,2.994l38.374,38.373L0.622,85.836c-0.827,0.827-0.827,2.167,0,2.994l5.473,5.476
              c0.397,0.396,0.936,0.62,1.498,0.62s1.1-0.224,1.497-0.62l38.374-38.374l38.374,38.374c0.397,0.396,0.937,0.62,1.498,0.62
              s1.101-0.224,1.498-0.62l5.473-5.476c0.826-0.827,0.826-2.167,0-2.994L55.931,47.463z"/>
          </svg>
        </span>
      </div>
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
          @click="$emit('close-modal')"
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