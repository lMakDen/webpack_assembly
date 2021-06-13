function createAnalytics() {
    let counter = 0

    const listener = () => counter++

    document.addEventListener('click', listener)
    let isDestroyed
    return {
        destroy() {
            document.removeEventListener('click', listener)
            isDestroyed = true
        },

        getClicks() {
            if(isDestroyed){
                return `Analytics is destroyed. Total clicks = ${counter}`
            }
            return counter
        }
    }
}

window.analytics = createAnalytics()
