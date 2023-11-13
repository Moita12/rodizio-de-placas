function rodizio() {
    const placa = document.querySelector('#A').value;
    const dia = document.querySelector('#dia').value;
    const horas = document.querySelector('#hora').value;
    var resposta = document.querySelector('#resposta');

    if ((placa == 1  || placa == 2 )&& dia == 'segunda'){
        resposta.innerHTML = 'Você não pode trafegar na área de rodízio ❌'
    }
    else if ((placa == 3   || placa == 4 )&& dia == 'terça'){
        resposta.innerHTML = 'Você não pode trafegar na área de rodízio ❌'
    }
    else if ((placa == 5 || placa == 6) && dia == 'quarta'){
        resposta.innerHTML = 'Você não pode trafegar na área de rodízio ❌'
    }
    else if ((placa == 7 || placa == 8) && dia == 'quinta'){
        resposta.innerHTML = 'Você não pode trafegar na área de rodízio ❌'
    }
    else if ((placa == 9 || placa == 0) && dia == 'sexta'){
        resposta.innerHTML = 'Você não pode trafegar na área de rodízio ❌'
    }
    else if ((dia == 'sábado') || (dia == 'domingo')){
        resposta.innerHTML = 'Fim de semana tráfego Liberado ✔'
    }
    else { resposta.innerHTML = 'Trafego Liberado na área de Rodízio ✔' 
        alert('Trafego Liberado na área de Rodízio ✔')}

}
function teste(){
    alert('Eu sou gay!')
}
