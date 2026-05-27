let respostaDor = '';

function responder(dor) {
    respostaDor = dor;
    document.getElementById('quiz-screen').style.display = 'none';
    document.getElementById('final-screen').style.display = 'block';
}

document.getElementById('btn-whatsapp').addEventListener('click', () => {
    const telefone = "5564999999999"; // Atualize para o número real
    const mensagem = `Olá Dr. Alessandro, realizei a triagem online. Minha dor é: ${respostaDor}. Gostaria de agendar uma consulta.`;
    window.open(`https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`, "_blank");
});