
const testEvent1 = document.querySelector('#testEvent1') as HTMLElement
const testEvent2 = document.querySelector('#testEvent2')
const testEvent3 = document.querySelector('#testEvent3')

type EventFire = (this: HTMLElement, e: MouseEvent) => void

const eventFire: EventFire = function(evt: MouseEvent){
    console.log('event fired')
    console.log(evt)
    console.log(this)

    const currentTarget = evt.currentTarget as HTMLElement

    const quantity = this.querySelector('span') as HTMLSpanElement
    //const n = parseInt(quantity.textContent || "0")
}

testEvent1.addEventListener("click", eventFire)



//Disparando um evento
const _event = new Event('click')
testEvent2?.dispatchEvent(_event)
