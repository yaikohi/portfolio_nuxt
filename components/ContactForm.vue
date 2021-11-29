<template>
    <form class="b-4 my-8 container flex flex-col items-start mx-auto">
        <contact-input variant="name">Name</contact-input>
        <contact-input variant="email">Email</contact-input>
        <contact-input-text-area rows="4" cols="30">Message</contact-input-text-area>
        <button
            class="p-4 mx-auto my-4 rounded-xl hover:border-blue-200 border border-gray-200"
        >Submit</button>
    </form>
</template>