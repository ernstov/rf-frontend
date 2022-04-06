<template>
  <div id="asset-table">
    <div
      class="flex flex-col mt-8 bg-white sm:rounded-lg w-full overflow-hidden"
    >
      <div class="overflow-x-auto px-4 max-w-full">
        <div class="inline-block min-w-full sm:px-6 lg:px-8">
          <div class="overflow-hidden rounded-t-2xl">
            <table class="min-w-full px-2 table-fixed">
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
                      class="dark:text-gray-400 p-3 w-40"
                      :class="{
                        'bg-yellow-300': family?.status?.name == 'On Hold',
                        'bg-green-400': family?.status?.name == 'In Progress',
                      }"
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
                        text-black-600
                        dark:text-black-500
                        hover:underline
                        dark:text-white-400
                        hover:no-underline
                        bg-gray-300
                        p-3
                      "
                      :to="`/assets-explorer/edit/${family.uuid}`"
                      >Edit</router-link
                    >
                  </td>
                  <td class="py-5 px-6 text-2xl font-medium text-right pr-10">
                    <router-link
                      class="
                        text-black-600
                        dark:text-black-500
                        hover:underline
                        dark:text-white-400
                        hover:no-underline
                        bg-gray-300
                        p-3
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
        padding: 8px;
      }
      th {
        padding-left: 8px;
      }
    }
  }
}
</style>