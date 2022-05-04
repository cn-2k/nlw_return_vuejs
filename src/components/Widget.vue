<template>
  <Popover class="absolute bottom-5 right-5">
    <PopoverPanel>Hello World</PopoverPanel>

    <PopoverButton
      class="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group"
    >
      <PhChatTeardropDots class="w-6 h-6" />

      <span
        class="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear"
      >
        <span class="pl-2"></span>
        Feedback
      </span>
    </PopoverButton>
  </Popover>
</template>

<script setup lang="ts">
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
</script>

<style scoped></style>
