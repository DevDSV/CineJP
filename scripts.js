// Função para exibir a etapa desejada e esconder as outras
function showStep(stepId) {
    const steps = document.querySelectorAll('.step');
    steps.forEach(step => step.classList.add('hidden'));
    document.getElementById(stepId).classList.remove('hidden');
}

// Função para selecionar o filme e avançar para a próxima etapa
function selectMovie(movie) {
    console.log('Filme selecionado:', movie);
    showStep('step2');
}

// Função para selecionar o horário e avançar para a próxima etapa
function selectTime(time) {
    console.log('Horário selecionado:', time);
    showStep('step3');
}

// Função para selecionar o assento e avançar para a próxima etapa
function selectSeat(seat) {
    console.log('Assento selecionado:', seat);
    showStep('step4');
}

// Função para selecionar o tipo de ingresso e avançar para a próxima etapa
function selectTicketType(type) {
    if (type === 'Promoção Dia Dos Namorados') {
        console.log('Tipo de ingresso selecionado:', type);
        showStep('step5');
    } else {
        alert('Não é esse!');
    }
}

// Função para selecionar a forma de pagamento e finalizar a compra
function selectPayment(payment) {
    if (payment === 'Beijo') {
        console.log('Forma de pagamento selecionada:', payment);
        showStep('step6');
    } else if (payment === 'Abraço') {
        alert('SÓ ISSO?');
    }
}

// Inicializa na primeira etapa
document.addEventListener('DOMContentLoaded', () => {
    showStep('step1');
});
