const schedule = require('node-schedule')

//Executando tarefa temporariamente
const tarefa1 = schedule.scheduleJob('*/1 * 4 * * 6', function () { //À cada 1 segundo, qualquer minuto, às 4 horas, semana, qualquer mes, todo sábado
    console.log("Executando tarefa 1", new Date().getSeconds())
})

//Temporizador do próprio node, cancelando tarefa depois de 20 segundos (20000 milissegundos)
setTimeout(function (){
    tarefa1.cancel()
    console.log('Cancelando tarefa 1')
}, 20000)
//setImmediate
//setInterval


//Criando regra do schedule de uma nova maneira
const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1,6)]
regra.hour = 4
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function () {
   console.log("Executando tarefa 2", new Date().getSeconds())
})