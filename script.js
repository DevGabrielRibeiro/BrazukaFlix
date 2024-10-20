     // Função para validar o formulário de login
    function validateLogin(event) {
        event.preventDefault(); // Evita o envio do formulário

        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        if (!email || !password) {
            alert("Por favor, preencha todos os campos.");
            return false;
        }

        // Aqui você pode adicionar mais validações, como verificar o formato do e-mail

        alert("Login realizado com sucesso!"); // Simula o login
        // Aqui você pode fazer a chamada para o backend
        return true;
    }

    // Função para validar o formulário de cadastro
    function validateRegister(event) {
        event.preventDefault(); // Evita o envio do formulário

        const name = document.getElementById('registerName').value;
        const email = document.getElementById('registerEmail').value;
        const password = document.getElementById('registerPassword').value;
        const confirmPassword = document.getElementById('registerConfirmPassword').value;

        if (!name || !email || !password || !confirmPassword) {
            alert("Por favor, preencha todos os campos.");
            return false;
        }

        if (password !== confirmPassword) {
            alert("As senhas não coincidem. Por favor, tente novamente.");
            return false;
        }

        // Aqui você pode adicionar mais validações, como verificar o formato do e-mail

        alert("Cadastro realizado com sucesso!"); // Simula o cadastro
        // Aqui você pode fazer a chamada para o backend
        return true;
    }

    // Adiciona os eventos de validação
    document.getElementById('loginForm').addEventListener('submit', validateLogin);
    document.getElementById('registerForm').addEventListener('submit', validateRegister);
    
