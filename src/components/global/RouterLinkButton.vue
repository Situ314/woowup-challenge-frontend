<template>
    <router-link 
        class="
            float-right
            bg-transparent
            font-semibold
            py-2
            px-4
            border
            rounded
            bg-teal-700
            text-white
        "
        :class="[color ? 'hover:bg-teal-600 border-' + color + '-600' : '']"
        :to="url"
    >
        {{ btnText}}
    </router-link>              
</template>

<script setup>
    import { defineProps, toRefs } from 'vue'

    const props = defineProps({
        btnText: String, 
        url: { type: String, default: '' }, 
        color: String,
        icon: String
    })
    const { btnText, url, color } = toRefs(props)

</script>