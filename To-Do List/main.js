const tasks = []
const buton = document.getElementById('addTask')
let ids = 0

function showTasks(){
    const allButtons = []
    const allInputs = []
    const allSpans = []
    const allDivs = []
    const divTareasMain = document.getElementById('tareas')
    divTareasMain.replaceChildren()

    tasks.forEach((value, i) => {
        allDivs.push(divTareasMain.appendChild(document.createElement('div')));
        allDivs[i].dataset.id = value.id
        allDivs[i].className = 'container'

        allInputs.push(allDivs[i].appendChild(document.createElement('input')));
        allInputs[i].checked = tasks[i].completed
        allInputs[i].type = 'checkbox'
        allInputs[i].className = 'completeds'

        allSpans.push(allDivs[i].appendChild(document.createElement('span')));
        allSpans[i].textContent = ''
        allSpans[i].textContent = value.nombre

        allButtons.push(allDivs[i].appendChild(document.createElement('button')));
        allButtons[i].textContent = 'Eliminar'
        allButtons[i].className = 'remove'

        if(tasks[i].completed){
            allSpans[i].style.color = 'blue'
        }else{
            allSpans[i].style.color = 'white'
        }
    })
}

function isChecked(event){
    if(event.target.type !== 'checkbox') return
    const divPadre = event.target.closest('div')

    if(!divPadre) return

    const id = Number(divPadre.dataset.id)
    const findTask = tasks.find(task => task.id === id)
    if(!findTask) return

    const findIndex = tasks.findIndex(task => task === findTask)
    if(findIndex === -1) return

    tasks[findIndex].completed = event.target.checked

    guardarTareas()

    const span = divPadre.querySelector('span')
    span.style.color = event.target.checked ? 'blue' : 'white'
}

function addTask(){
    const input = document.querySelector('input')
    const id = ids++
    if(input.value.trim() !== ''){
        tasks.push({id, nombre: input.value, completed: false})
    }
    guardarTareas()
    showTasks()
    input.value = ''
}

function guardarTareas(){
    localStorage.setItem('lista', JSON.stringify(tasks))
}

function cargarTareas(){
    const data = localStorage.getItem('lista')
    if(data){
        tasks.splice(0, tasks.length, ...JSON.parse(data))
    }
}

function deletedTask(index){
    const verify = tasks.find(value => value.id === index)
    if(verify){
        const findIndex = tasks.findIndex(value => value.id === index)
        tasks.splice(findIndex, 1)
        guardarTareas()
        showTasks()
    }
}

//Eventos
buton.addEventListener('click', addTask)
document.addEventListener('change', event => isChecked(event))
document.addEventListener('click', event => {
    if(event.target.className === 'remove'){
        const divPather = event.target.closest('div')
        const index = divPather.dataset.id
        if(divPather){
            deletedTask(Number(index))
        }
    }
})

cargarTareas()
showTasks()

// Controlador de localhost
// localStorage.clear()