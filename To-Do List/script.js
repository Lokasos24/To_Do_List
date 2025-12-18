const tareas = []
const buton = document.getElementById('addTask')
let ids = 0

function crearTareas(){
    const allButtons = []
    const allInputs = []
    const allTareas = []
    const allDivs = []
    const divTareasMain = document.getElementById('tareas')
    divTareasMain.replaceChildren()

    tareas.forEach((value, i) => {
        allDivs.push(divTareasMain.appendChild(document.createElement('div')));
        allDivs[i].dataset.id = value.id

        allDivs[i].style.display = 'flex'
        allDivs[i].style.justifyContent = 'space-between'

        allDivs[i].replaceChildren()

        allInputs.push(allDivs[i].appendChild(document.createElement('input')));
        allTareas.push(allDivs[i].appendChild(document.createElement('span')));
        allButtons.push(allDivs[i].appendChild(document.createElement('button')));

        allButtons[i].textContent = 'Eliminar'
        allButtons[i].class = 'remove'

        allInputs[i].checked = tareas[i].completed
        allInputs[i].type = 'checkbox'
        allInputs[i].class = 'completeds'

        allTareas[i].textContent = ''
        
        allTareas[i].textContent = value.nombre

        if(tareas[i].completed){
            allTareas[i].style.color = 'blue'
        }else{
            allTareas[i].style.color = 'white'
        }
    })
}

function isChecked(event){
    if(event.target.type === 'checkbox'){
        const divPadre = event.target.closest('div')
        if(divPadre){
            const id = Number(divPadre.dataset.id)
            tareas[id].completed = event.target.checked

            guardarTareas()

            const span = divPadre.querySelector('span')
            span.style.color = event.target.checked ? 'blue' : 'white'
        }
    }
}

function agregar (){
    const input = document.querySelector('input')
    const id = ids++
    if(input.value.trim() !== ''){
        tareas.push({id, nombre: input.value, completed: false})
    }
    guardarTareas()
    crearTareas()
    input.value = ''
}

function guardarTareas(){
    localStorage.setItem('lista', JSON.stringify(tareas))
}

function cargarTareas(){
    const data = localStorage.getItem('lista')
    if(data){
        tareas.push(...JSON.parse(data))
        crearTareas()
    }
}

function eliminar(index){
    const verify = tareas.find(value => value.id === index)
    if(verify){
        const findIndex = tareas.findIndex(value => value.id === index)
        tareas.splice(findIndex, 1)
        crearTareas()
    }
}

//Eventos
buton.addEventListener('click', agregar)
document.addEventListener('change', event => isChecked(event))
document.addEventListener('click', event => {
    if(event.target.class === 'deleted'){
        const divPadre = event.target.closest('div')
        const index = divPadre.dataset.id
        if(divPadre){
            eliminar(Number(index))
        }
    }
})
cargarTareas()