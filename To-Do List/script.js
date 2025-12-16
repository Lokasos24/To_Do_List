const tareas = []
const buton = document.querySelector('button')

function crearTareas(){
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

        allTareas.push(allDivs[i].appendChild(document.createElement('span')));
        allInputs.push(allDivs[i].appendChild(document.createElement('input')));

        //Los inputs se agregan con el tipo checkbox
        allInputs[i].type = 'checkbox'
        allInputs[i].checked = tareas[i].check

        allTareas[i].textContent = ''
        
        allTareas[i].textContent = value.nombre

        if(tareas[i].check){
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
            tareas[id].check = event.target.checked

            guardarTareas()

            const span = divPadre.querySelector('span')
            span.style.color = event.target.checked ? 'blue' : 'white'
        }
    }
}

function agregar (){
    const input = document.querySelector('input')

    tareas.push({id: tareas.length, nombre: input.value, check: false})
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

//Eventos
buton.addEventListener('click', agregar)
document.addEventListener('change', event => isChecked(event))

cargarTareas()