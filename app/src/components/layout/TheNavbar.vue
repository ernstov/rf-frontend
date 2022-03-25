<template>
  <nav class="bg-gray-800">
    <div
      class="
        w-4/5
        mx-auto
        px-2
        sm:px-8
        lg:px-10
        h-24
        flex
        items-center
        justify-between
      "
    >
      <div class="relative flex items-center justify-between h-16 w-full">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <button
            type="button"
            class="
              inline-flex
              items-center
              justify-center
              p-2
              rounded-md
              text-gray-400
              hover:text-white hover:bg-gray-700
              focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white
            "
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>

            <svg
              class="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>

            <svg
              class="hidden h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div
          class="
            flex-1 flex
            items-center
            justify-center
            sm:items-stretch sm:justify-start
          "
        >
          <div class="flex-shrink-0 flex items-center">
            <img
              class="block h-12 w-12"
              src="https://avatars.githubusercontent.com/u/6128107?s=280&v=4"
              alt="Workflow"
            />
          </div>
          <div class="hidden sm:block sm:ml-6 mr-16">
            <div class="flex space-x-4">
              <p
                class="text-white py-2 rounded-md text-4xl font-medium"
                aria-current="page"
              >
                Rainforest
              </p>
            </div>
          </div>
          <div class="hidden sm:block sm:ml-6 mr-16">
            <div class="flex">
              <div class="px-2 pt-2 pb-3 space-y-1">
                <router-link
                  to="/project-dashboard"
                  class="
                    text-white
                    block
                    px-3
                    py-2
                    rounded-md
                    text-base
                    font-medium
                    text-2xl
                  "
                  aria-current="page"
                  >Programs
                </router-link>
              </div>
              <div class="px-2 pt-2 pb-3 space-y-1">
                <router-link
                  to="/program-dashboard"
                  class="
                    text-white
                    block
                    px-3
                    py-2
                    rounded-md
                    text-base
                    font-medium
                    text-2xl
                  "
                  aria-current="page"
                >
                  Projects</router-link
                >
              </div>
              <div class="px-2 pt-2 pb-3 space-y-1">
                <router-link
                  to="/assets-explorer"
                  class="
                    text-white
                    block
                    px-3
                    py-2
                    rounded-md
                    text-base
                    font-medium
                    text-2xl
                  "
                  aria-current="page"
                  >Asset Explorer</router-link
                >
              </div>
            </div>
          </div>
        </div>
        <div
          class="
            absolute
            inset-y-0
            right-0
            flex
            items-center
            pr-2
            sm:static sm:inset-auto sm:ml-6 sm:pr-0
          "
        >
          <button
            type="button"
            class="
              bg-gray-800
              p-1
              rounded-full
              text-gray-400
              hover:text-white
              focus:outline-none
              focus:ring-2
              focus:ring-offset-2
              focus:ring-offset-gray-800
              focus:ring-white
            "
          >
            <span class="sr-only">View notifications</span>
            <svg
              class="h-10 w-10"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </button>

          <!-- Profile dropdown -->
          <div class="ml-3 relative">
            <div>
              <button
                type="button"
                class="
                  bg-gray-800
                  flex
                  text-2xl
                  rounded-full
                  focus:outline-none
                  focus:ring-2
                  focus:ring-offset-2
                  focus:ring-offset-gray-800
                  focus:ring-white
                "
                id="user-menu-button"
                aria-expanded="false"
                aria-haspopup="true"
              >
                <span class="sr-only">Open user menu</span>
                <img
                  @click="showOptions = !showOptions"
                  class="h-12 w-12 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </button>
            </div>

            <div
              v-if="showOptions"
              class="
                origin-top-right
                absolute
                right-0
                mt-2
                w-80
                rounded-md
                shadow-lg
                py-2
                bg-white
                ring-1 ring-black ring-opacity-5
                focus:outline-none
                outline-none
              "
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="user-menu-button"
              tabindex="-1"
            >
              <ul>
                <li
                  class="block px-4 py-2 text-2xl text-gray-700 cursor-pointer"
                  role="menuitem"
                  tabindex="-1"
                  id="user-menu-item-0"
                >
                  Your Profile
                </li>
                <li
                  class="block px-4 py-2 text-2xl text-gray-700 cursor-pointer"
                  role="menuitem"
                  tabindex="-1"
                  id="user-menu-item-1"
                >
                  Settings
                </li>
                <li
                  class="block px-4 py-2 text-2xl text-gray-700 cursor-pointer"
                  role="menuitem"
                  tabindex="-1"
                  id="user-menu-item-2"
                  @click="logout"
                >
                  Sign out
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="sm:hidden" id="mobile-menu">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <router-link
          to="/"
          class="
            text-center text-white
            block
            px-3
            py-2
            rounded-md
            text-base
            font-medium
            text-3xl
          "
          aria-current="page"
          >Programs
        </router-link>
      </div>
      <div class="px-2 pt-2 pb-3 space-y-1">
        <router-link
          to="/"
          class="
            text-center text-white
            block
            px-3
            py-2
            rounded-md
            text-base
            font-medium
            text-3xl
          "
          aria-current="page"
        >
          Projects</router-link
        >
      </div>
      <div class="px-2 pt-2 pb-3 space-y-1">
        <router-link
          to="/"
          class="
            text-center text-white
            block
            px-3
            py-2
            rounded-md
            text-base
            font-medium
            text-3xl
          "
          aria-current="page"
          >Asset Explorer</router-link
        >
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      showOptions: false,
    };
  },
  methods: {
    logout() {
      try {
        this.$store.dispatch("authModule/logout");
        this.$router.push("/login");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.router-link-active {
  background-color: rgba(17, 24, 39);
}
</style>