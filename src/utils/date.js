
export const currentTime = () => {
    return (
        new Date(Date.now()).getHours() + ':' + new Date(Date.now()).getMinutes()
    )
}