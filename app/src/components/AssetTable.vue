<template>
  <div id="asset-table">
    <div
      class="flex flex-col mt-8 bg-white sm:rounded-lg w-full overflow-hidden"
    >
      <div class="overflow-x-auto max-w-full">
        <div class="inline-block min-w-full">
          <div class="overflow-hidden">
            <table class="min-w-full table-fixed">
              <thead class="bg-gray-100 dark:bg-gray-700">
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
                      text-center text-gray-700
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
                    Publication Date
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
                  v-for="family in assets"
                  :key="family.uuid"
                  class="
                    bg-white
                    border-b
                    dark:bg-gray-800 dark:border-gray-700
                  "
                >
                  <td
                    class="py-5 px-10 text-2xl text-gray-500 dark:text-gray-400"
                  >
                    {{ family.family_id }}
                  </td>
                  <td
                    class="py-5 px-6 text-2xl text-gray-500 dark:text-gray-400"
                  >
                    {{ family?.patent_numbers?.toString() }}
                  </td>
                  <td
                    class="py-5 px-6 text-2xl text-gray-500 dark:text-gray-400"
                  >
                    {{ family?.inventors?.map((i) => i.name)?.toString() }}
                  </td>
                  <td
                    class="py-5 px-6 text-2xl text-gray-500 dark:text-gray-400"
                  >
                    {{ family?.workflow?.map((w) => w.name)?.toString() }}
                  </td>
                  <td class="py-5 px-6 text-2xl text-gray-500 h-2">
                    <p
                      class="p-3 w-40 rounded-lg text-center"
                      :class="family.status.name.toLowerCase()"
                    >
                      {{ family.status.name }}
                    </p>
                  </td>
                  <td
                    class="py-5 px-6 text-2xl text-gray-500 dark:text-gray-400"
                  >
                    {{ family.publication_date }}
                  </td>
                  <td class="py-5 px-6 text-2xl font-medium text-right">
                    <router-link
                      class="
                        text-blue-600
                        dark:text-black-500
                        hover:underline
                        dark:text-white-400
                        hover:no-underline
                        px-6
                        py-1
                        border border-blue-500
                        rounded-full
                      "
                      :to="`/assets-explorer/edit/${family.uuid}`"
                      >Edit</router-link
                    >
                  </td>
                  <td class="py-5 px-6 text-2xl font-medium text-right pr-10">
                    <router-link
                      class="
                        text-green-600
                        dark:text-black-500
                        hover:underline
                        dark:text-white-400
                        hover:no-underline
                        py-1
                        px-6
                        border border-green-500
                        rounded-full
                      "
                      :to="`/assets-view/${family.uuid}`"
                      >View</router-link
                    >
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    assets: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
#asset-table {
  table {
    tr {
      td {
        max-width: 300px;
        min-width: 100px;
        word-break: break-all;
        white-space: pre-line;
        padding: 8px 12px;
      }
    }
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