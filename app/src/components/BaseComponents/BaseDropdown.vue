<template>
  <div class="relative inline-block text-left w-80 mr-12">
    <div>
      <p class="text-gray-700 block text-2xl mb-5">Select by workflow type</p>
      <select
        type="button"
        @click="showOptions = !showOptions"
        class="
          inline-flex
          justify-end
          w-full
          rounded-md
          border border-gray-300
          shadow-sm
          px-4
          py-3
          bg-white
          text-gray-700
          hover:bg-gray-50
          outline-none
          focus:outline-none
          focus:ring-2
          focus:ring-offset-2
          focus:ring-offset-gray-100
          focus:ring-indigo-500
          text-2xl
          rounded-t-1xl
        "
        id="menu-button"
        aria-expanded="true"
        aria-haspopup="true"
      >
        <img src="@/assets/images/arrow_drop.svg" alt="Down Arrow" />

        <option value="" class="text-2xl">---Choose ---</option>
        <option
          href="#"
          class="text-gray-700 block px-4 py-2 text-2xl"
          role="menuitem"
          tabindex="-1"
          id="menu-item-0"
        >
          Dropdown 1
        </option>
        <option
          href="#"
          class="text-gray-700 block px-4 py-2 text-2xl"
          role="menuitem"
          tabindex="-1"
          id="menu-item-1"
        >
          Dropdown 2
        </option>
        <option
          href="#"
          class="text-gray-700 block px-4 py-2 text-2xl"
          role="menuitem"
          tabindex="-1"
          id="menu-item-2"
        >
          Dropdown 3
        </option>
        <option
          class="text-gray-700 block w-full text-left px-4 py-2 text-2xl"
          role="menuitem"
          tabindex="-1"
          id="menu-item-3"
        >
          Dropdown 4
        </option>
      </select>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showOptions: false,
    };
  },
};
</script>