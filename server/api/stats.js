export default defineEventHandler(async() => {
    const result = await $fetch("https://api.battlemetrics.com/servers/20316978");
    return result;
})