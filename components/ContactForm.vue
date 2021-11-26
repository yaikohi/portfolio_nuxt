<template>
    <div class="flex flex-col m-4">
        <form
            class="b-4 container flex flex-col justify-items-center align-middle bg-gray-200 transition-colors hover:bg-gray-100"
        >
            <contact-input variant="name">Name</contact-input>
            <contact-input variant="email">Email</contact-input>
            <contact-input-text-area rows="4" cols="40">Message</contact-input-text-area>
            <contact-form-button></contact-form-button>
        </form>
    </div>
</template>