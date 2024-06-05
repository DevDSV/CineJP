function showStep(stepId) {
    const steps = document.querySelectorAll('.step');
    steps.forEach(step => step.classList.add('hidden'));
    document.getElementById(stepId).classList.remove('hidden');
}

function selectMovie(movie) {
    console.log('Filme selecionado:', movie);
    showStep('step2');
}

function selectTime(time) {
    console.log('Horário selecionado:', time);
    showStep('step3');
}

function selectSeat(seat) {
    console.log('Assento selecionado:', seat);
    showStep('step4');
}

function selectTicketType(type) {
    if (type === 'Promoção Dia Dos Namorados') {
        console.log('Tipo de ingresso selecionado:', type);
        showStep('step5');
    } else {
        alert('Não é esse!');
    }
}

function selectPayment(payment) {
    if (payment === 'Beijo') {
        console.log('Forma de pagamento selecionada:', payment);
        showStep('step6');
    } else if (payment === 'Abraço') {
        alert('SÓ ISSO?');
    }
}
