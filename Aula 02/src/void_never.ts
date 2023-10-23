const showFeedback = (msg: string, type: string): void =>{
    alert(type.toUpperCase() + ':' + msg)
}

const showError = (msg: string): never => {
    throw new Error ('função marcada com never')
}