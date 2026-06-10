function calcularResultado() {
    // Pegando as respostas selecionadas
    const q1 = document.querySelector('input[name="q1"]:checked');
    const q2 = document.querySelector('input[name="q2"]:checked');
    const q3 = document.querySelector('input[name="q3"]:checked');

    const resultadoDiv = document.getElementById('resultado');

    // Validando se o usuário respondeu todas as perguntas
    if (!q1 || !q2 || !q3) {
        resultadoDiv.innerHTML = "⚠️ Por favor, responda a todas as perguntas antes de enviar!";
        resultadoDiv.className = "resultado-box success"; 
        resultadoDiv.style.backgroundColor = "#fff3cd";
        resultadoDiv.style.color = "#856404";
        resultadoDiv.classList.remove('hidden');
        return;
    }

    let acertos = 0;

    // Verificando os acertos
    if (q1.value === "correto") acertos++;
    if (q2.value === "correto") acertos++;
    if (q3.value === "correto") acertos++;

    // Criando a mensagem de resultado
    resultadoDiv.style.backgroundColor = ""; 
    resultadoDiv.style.color = "";
    resultadoDiv.className = "resultado-box success";
    
    if (acertos === 3) {
        resultadoDiv.innerHTML = `🎉 Excelente! Você acertou ${acertos} de 3 perguntas. Você entende muito sobre agro sustentável!`;
    } else if (acertos === 2) {
        resultadoDiv.innerHTML = `👍 Muito bom! Você acertou ${acertos} de 3 perguntas. Quase lá!`;
    } else {
        resultadoDiv.innerHTML = `🌱 Você acertou ${acertos} de 3 perguntas. Dê uma lida no conteúdo acima para aprender mais sobre o tema!`;
    }

    resultadoDiv.classList.remove('hidden');
}
