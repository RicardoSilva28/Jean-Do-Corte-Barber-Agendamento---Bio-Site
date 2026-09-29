
        function abrirModal() {
            const hoje = new Date().toISOString().split('T')[0];
            const inputData = document.getElementById('dataDesejada');
            inputData.min = hoje;
            
            if (!inputData.value) {
                inputData.value = hoje;
            }

            document.getElementById('modalAgendamento').style.display = 'flex';
        }

        function fecharModal() {
            document.getElementById('modalAgendamento').style.display = 'none';
        }

        function enviarAgendamento() {
            const nome = document.getElementById('nomeCliente').value.trim();
            const servico = document.getElementById('servicoEscolhido').value;
            const data = document.getElementById('dataDesejada').value;
            const hora = document.getElementById('horaDesejada').value;

            if (nome === "") {
                alert("Por favor, digite o seu nome!");
                return;
            }

            if (data === "") {
                alert("Por favor, escolha uma data para o agendamento!");
                return;
            }

            const hoje = new Date().toISOString().split('T')[0];
            if (data < hoje) {
                alert("Você não pode agendar para uma data que já passou!");
                return;
            }

            const dataFormatada = data.split('-').reverse().join('/');
            const meuWhatsApp = "5581989449171";
            
            const textoMensagem = `*NOVO AGENDAMENTO* 💈\n\n` +
                                  `👤 *Cliente:* ${nome}\n` +
                                  `✂️ *Serviço:* ${servico}\n` +
                                  `📅 *Data:* ${dataFormatada}\n` +
                                  `⏰ *Horário:* ${hora}\n\n` +
                                  `*Jean Do Corte Barbe*`;
            
            const urlWhatsApp = `https://wa.me/${meuWhatsApp}?text=${encodeURIComponent(textoMensagem)}`;

            window.open(urlWhatsApp, '_blank');
            fecharModal();
        }

        window.onclick = function(event) {
            const modal = document.getElementById('modalAgendamento');
            if (event.target == modal) {
                fecharModal();
            }
        }
