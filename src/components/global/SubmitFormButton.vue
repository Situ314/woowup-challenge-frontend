<template>
    <button
        class="
        float-right
            bg-transparent
            font-semibold
            py-2
            px-4
            border
            rounded
            text-white
            bg-teal-700
            no-underline
        "
        :class="[color ? 'hover:bg-teal-600 hover:border-teal-600' : '']"
        @click="$emit('submit', true)"
    >
        <i class=""></i>{{ btnText }}
    </button>              
</template>

<script setup>
    import { defineProps, toRefs } from 'vue'

    const props = defineProps({
        btnText: String,
        color: String
    })
    const { btnText, color } = toRefs(props)

</script>