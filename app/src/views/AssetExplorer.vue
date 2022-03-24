<template>
  <div>
    <the-navbar></the-navbar>
    <div class="px-60 py-32 h-screen">
      <div class="flex">
        <base-dropdown></base-dropdown>
        <base-dropdown></base-dropdown>
        <base-dropdown></base-dropdown>
      </div>
      <div class="flex flex-col mt-8 mb-14">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div
            class="
              inline-block
              py-2
              min-w-full
              sm:px-6
              lg:px-8
              shadow-md
              sm:rounded-lg
            "
          >
            <div class="overflow-hidden rounded-t-2xl">
              <table class="min-w-full px-2">
                <thead class="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th
                      scope="col"
                      class="
                        py-5
                        px-10
                        text-2xl
                        font-medium
                        tracking-wider
                        text-left text-gray-700
                        uppercase
                        dark:text-gray-400
                      "
                    >
                      Family ID
                    </th>
                    <th
                      scope="col"
                      class="
                        py-5
                        px-6
                        text-2xl
                        font-medium
                        tracking-wider
                        text-left text-gray-700
                        uppercase
                        dark:text-gray-400
                      "
                    >
                      Patent IDs
                    </th>
                    <th
                      scope="col"
                      class="
                        py-7
                        px-6
                        text-2xl
                        font-medium
                        tracking-wider
                        text-left text-gray-700
                        uppercase
                        dark:text-gray-400
                      "
                    >
                      Inventors
                    </th>
                    <th
                      scope="col"
                      class="
                        py-7
                        px-0
                        text-2xl
                        font-medium
                        tracking-wider
                        text-left text-gray-700
                        uppercase
                        dark:text-gray-400
                      "
                    >
                      Workflow
                    </th>
                    <th
                      scope="col"
                      class="
                        py-7
                        px-6
                        text-2xl
                        font-medium
                        tracking-wider
                        text-left text-gray-700
                        uppercase
                        dark:text-gray-400
                      "
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      class="
                        py-7
                        px-6
                        text-2xl
                        font-medium
                        tracking-wider
                        text-left text-gray-700
                        uppercase
                        dark:text-gray-400
                      "
                    >
                      Last updated
                    </th>
                    <th scope="col" class="relative py-3 px-6">
                      <span class="sr-only">Edit</span>
                    </th>
                    <th scope="col" class="relative py-3 px-10">
                      <span class="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                  v-for="family in families" :key="family.familyId"
                    class="
                      bg-white
                      border-b
                      dark:bg-gray-800 dark:border-gray-700
                    "
                  >
                    <td
                      class="
                        py-5
                        px-10
                        text-2xl text-gray-500
                        whitespace-nowrap
                        dark:text-gray-400
                      "
                    >
                      {{family.familyId}}
                    </td>
                    <td
                      class="
                        py-5
                        px-6
                        text-2xl text-gray-500
                        whitespace-nowrap
                        dark:text-gray-400
                      "
                    >
                    <span v-for="patient in family.patients" :key="patient">
                      {{patient}} 
                    </span>
                    </td>
                    <td
                      class="
                        py-5
                        px-6
                        text-2xl text-gray-500
                        whitespace-nowrap
                        dark:text-gray-400
                      "
                    >
                    <span v-for="inventor in family.inventors" :key="inventor">
                      {{inventor}}
                    </span>
                    </td>
                    <td
                      class="
                        py-5
                        px-6
                        text-2xl text-gray-500
                        whitespace-nowrap
                        dark:text-gray-400
                      "
                    >
                      {{family.workflow}}
                    </td>
                    <td
                      class="
                        py-5
                        px-6
                        text-2xl text-gray-500
                        whitespace-nowrap
                        h-2
                      "
                    >
                      <p class="dark:text-gray-400 p-3 w-40" :class="{'bg-yellow-300': family.status=='On Hold', 'bg-green-400': family.status=='In Progress'}">
                        {{family.status}}
                      </p>
                    </td>
                    <td
                      class="
                        py-5
                        px-6
                        text-2xl text-gray-500
                        whitespace-nowrap
                        dark:text-gray-400
                      "
                    >
                    {{family.lastUpdated}}
                    </td>
                    <td
                      class="
                        py-5
                        px-6
                        text-2xl
                        font-medium
                        text-right
                        whitespace-nowrap
                      "
                    >
                      <a
                        href="#"
                        class="
                          text-black-600
                          dark:text-black-500
                          hover:underline
                          dark:text-white-400
                          hover:no-underline
                          bg-gray-300
                          p-3
                        "
                        @click="shoeEditAssetModal = true"
                        >Edit</a
                      >
                    </td>
                    <td
                      class="
                        py-5
                        px-6
                        text-2xl
                        font-medium
                        text-right
                        whitespace-nowrap
                        pr-10
                      "
                    >
                      <a
                        href="#"
                        class="
                          text-black-600
                          dark:text-black-500
                          hover:underline
                          dark:text-white-400
                          hover:no-underline
                          bg-gray-300
                          p-3
                        "
                        @click="$router.push('/assets-view')"
                        >View</a
                      >
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div
              class="
                flex
                items-end
                justify-end
                py-10
                bg-white
                rounded-b-2xl
                px-10
              "
            >
              <div class="flex items-center justify-between">
                <div
                  class="
                    flex
                    items-center
                    pb-3
                    text-gray-600
                    dark:text-gray-200
                    hover:text-indigo-700
                    cursor-pointer
                    mr-1
                  "
                >
                  <svg
                    width="18"
                    height="10"
                    viewBox="0 0 14 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.1665 4H12.8332"
                      stroke="currentColor"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M1.1665 4L4.49984 7.33333"
                      stroke="currentColor"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M1.1665 4.00002L4.49984 0.666687"
                      stroke="currentColor"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p class="text-2xl ml-3 font-medium leading-none">Previous</p>
                </div>
                <div class="sm:flex hidden">
                  <p
                    class="
                      text-2xl
                      font-medium
                      leading-none
                      cursor-pointer
                      text-gray-600
                      dark:text-gray-200
                      hover:text-indigo-700
                      dark:hover:text-indigo-400
                      border-b border-transparent
                      hover:border-indigo-400
                      pb-3
                      mr-4
                      px-2
                    "
                  >
                    1
                  </p>
                  <p
                    class="
                      text-2xl
                      font-medium
                      leading-none
                      cursor-pointer
                      text-indigo-700
                      dark:text-indigo-400
                      border-b border-indigo-400
                      pb-3
                      mr-4
                      px-2
                    "
                  >
                    2
                  </p>
                  <p
                    class="
                      text-2xl
                      font-medium
                      leading-none
                      cursor-pointer
                      text-gray-600
                      dark:text-gray-200
                      hover:text-indigo-700
                      dark:hover:text-indigo-400
                      border-b border-transparent
                      hover:border-indigo-400
                      pb-3
                      mr-4
                      px-2
                    "
                  >
                    3
                  </p>
                </div>
                <div
                  class="
                    flex
                    items-center
                    pb-3
                    text-gray-600
                    dark:text-gray-200
                    hover:text-indigo-700
                    cursor-pointer
                  "
                >
                  <p class="text-2xl font-medium leading-none mr-3">Next</p>
                  <svg
                    width="18"
                    height="10"
                    viewBox="0 0 14 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.1665 4H12.8332"
                      stroke="currentColor"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.5 7.33333L12.8333 4"
                      stroke="currentColor"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.5 0.666687L12.8333 4.00002"
                      stroke="currentColor"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex">
        <a class="link" @click="showBulkUploadModal=true">Import from file</a>
        <router-link class="link" to="/assets-explorer/new"
          >Add New Asset</router-link
        >
      </div>
    </div>
    <bulk-upload-modal v-if="showBulkUploadModal" @close-modal="showBulkUploadModal=false"></bulk-upload-modal>
    <edit-asset-modal v-if="shoeEditAssetModal" @cancel="shoeEditAssetModal = false"></edit-asset-modal>
  </div>
</template>
<script>
import TheNavbar from "@/components/layout/TheNavbar.vue";
import BaseDropdown from "@/components/BaseComponents/BaseDropdown.vue";
import BulkUploadModal from "@/components/Modals/BulkUploadModal.vue";
import EditAssetModal from "@/components/Modals/EditAssetModal.vue";

export default {
  components: {
    TheNavbar,
    BaseDropdown,
    BulkUploadModal,
    EditAssetModal,
  },
  data(){
    return {
      shoeEditAssetModal: false,
      showBulkUploadModal: false,
      families: [
        {
          familyId: 1,
          patients: ['W01234567, ', 'DE0234567891'],
          inventors: [' John Doe, ', 'Max Mustermann '],
          workflow: 'Program A',
          status: 'In Progress',
          lastUpdated: '20-01-2022 05:00;01 PM '
        },
        {
          familyId: 2,
          patients: ['W01234567, ', 'DE0234567891'],
          inventors: [' John Doe, ', 'Max Mustermann '],
          workflow: 'Program A',
          status: 'On Hold',
          lastUpdated: '20-01-2022 05:00;01 PM '
        },
        {
          familyId: 3,
          patients: ['W01234567, ', 'DE0234567891'],
          inventors: [' John Doe, ', 'Max Mustermann '],
          workflow: 'Program A',
          status: 'In Progress',
          lastUpdated: '20-01-2022 05:00;01 PM '
        },
        {
          familyId: 4,
          patients: ['W01234567, ', 'DE0234567891'],
          inventors: [' John Doe, ', 'Max Mustermann '],
          workflow: 'Program A',
          status: 'On Hold',
          lastUpdated: '20-01-2022 05:00;01 PM '
        }
      ]
    }
  }
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