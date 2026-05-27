document.getElementById('btn-iniciar').addEventListener('click', () => {
    const telefone = "5564999999999"; 
    const mensagem = "Olá Dr. Alessandro, gostaria de iniciar meu atendimento via Tele-Medicina para cuidar da minha coluna.";
    window.open(`https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`, "_blank");
});