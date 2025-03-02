<template>
  <div
    class="flex flex-col gap-3 bg-primary text-light max-md:px-5 max-md:py-6 md:bg-light-100 md:text-dark"
  >
    <h1 class="container mx-auto block font-patuaOne text-2xl md:hidden">
      {{ hotel?.title }}
    </h1>
    <div>
      <p v-if="displayDescription !== 'nan'" class="font-robotoRegular text-sm">
        {{ displayDescription }}
      </p>
      <Button
        v-if="isLongDescription && !showFullDescription"
        class="mt-3 font-robotoRegular text-sm font-semibold underline"
        @click="toggleFullDescription"
        :label="$t('Content.readMore')"
      />
    </div>
    <div
      class="relative mb-5 flex w-full items-center justify-center rounded-[10px] border border-light px-3 py-4 md:border-dark"
    >
      <NuxtLink
        :to="{
          path: `/canton/${hotel?.canton?.id}`,
          query: { title: hotel?.canton?.name },
        }"
        class="relative flex h-14 w-1/3 cursor-pointer items-center justify-center border-r"
      >
        <img
          class="absolute inset-0 h-full w-full p-2 md:brightness-50"
          :src="backendUrl + hotel?.canton?.image?.url"
          alt="canton image"
        />
        <p class="font-robotoRegular text-lg text-light md:text-dark">
          {{ hotel?.canton.name }}
        </p>
      </NuxtLink>

      <div
        class="flex h-full w-1/3 cursor-pointer flex-col items-center justify-center px-2 font-patuaOne text-xl"
      >
        <p>
          {{ $t("Content.class") }}
        </p>
        <CommonStars class="[&_img]:invert" :stars="hotel?.stars" />
      </div>

      <NuxtLink
        :to="{
          path: `/category/${hotel?.categories[0]?.category?.id}`,
          query: { title: hotel?.categories[0]?.category?.name },
        }"
        class="flex h-14 w-1/3 cursor-pointer items-center justify-center border-l text-center font-robotoRegular text-lg font-normal text-light md:text-dark"
        v-if="hotel?.categories[0]"
      >
        {{ hotel?.categories[0]?.category?.name }}
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import type { Hotel } from "@/types/hotel";
const runtimeConfig = useRuntimeConfig();
const NUMBER_OF_CHARACTERS = 500;
const props = defineProps<{
  hotel: Hotel;
}>();

const backendUrl = runtimeConfig.public.backendUrl;
const showFullDescription = ref(false);

/**
 * Toggle full description
 */
const toggleFullDescription = () => {
  showFullDescription.value = !showFullDescription.value;
};

/**
 * Display description
 * If the description is longer than 200 characters, show only the first 200 characters
 * @returns {string} Description
 */
const displayDescription = computed(() => {
  const { description } = props.hotel;
  return showFullDescription.value || description.length <= NUMBER_OF_CHARACTERS
    ? description
    : `${description.substring(0, NUMBER_OF_CHARACTERS)}...`;
});

/**
 * Check if the description is longer than a set number of characters
 * @returns {boolean} Is long description
 */
const isLongDescription = computed(
  () => props.hotel.description.length > NUMBER_OF_CHARACTERS,
);
</script>
