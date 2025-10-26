// leitor de qr code
const qrcode = require('qrcode');
const { Client, Buttons, List, MessageMedia } = require('whatsapp-web.js'); // Mudança Buttons
const client = new Client();
// serviço de leitura do qr code
client.on('qr', qr => {
    // Gera o QR Code em formato Data URL (string que representa a imagem PNG)
    qrcode.toDataURL(qr, (err, url) => {
        if (err) {
            console.error('Erro ao gerar QR Code como URL:', err);
            return;
        }

        // Imprime a URL Base64 no log. Esta URL é o QR Code!
        console.log('--- COPIE E COLE ESTA URL NO SEU NAVEGADOR PARA VER O QR CODE ---');
        console.log(url); 
        console.log('-----------------------------------------------------------------');
    });
});
// apos isso ele diz que foi tudo certo
client.on('ready', () => {
    console.log('Tudo certo! WhatsApp conectado.');
});
// E inicializa tudo 
client.initialize();

const delay = ms => new Promise(res => setTimeout(res, ms)); // Função que usamos para criar o delay entre uma ação e outra

// Funil

client.on('message', async msg => {

    if (msg.body.match(/(menu|Menu|dia|tarde|noite|oi|Oi|Olá|olá|ola|Ola)/i) && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        const contact = await msg.getContact(); //Pegando o contato
        const name = contact.pushname; //Pegando o nome do contato
        await client.sendMessage(msg.from,'Olá! '+ name.split(" ")[0] + ' Sou o assistente virtual da *Now Telemedicina*.\n\nSeja sincero: você já cansou de esperar horas em filas ou pagar caro por consultas que demoram meses para acontecer?\nCom a Now, isso acabou.\n\nEscolha por onde quer começar:\n\n1 - Como funciona\n2 - Valores dos planos\n3 - Benefícios\n4 - Como aderir\n5 - Outras perguntas\n6 - Para empresas'); //Primeira mensagem de texto
        await delay(3000); //delay de 3 segundos
    
        
    }




    if (msg.body !== null && msg.body === '1' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();


        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Na *Now Telemedicina*, você fala com médicos em qualquer hora do dia ou da noite.\n\n*Sem filas, sem carência, sem burocracia*.\n\n*São consultas ilimitadas*, com clínicos gerais e especialistas, direto do celular ou computador.\n\nAlém disso, temos uma ampla gama de benefícios, incluindo descontos em farmácias, laboratórios e exames. Confira no menu "Benefícios".');

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, '📌 Funciona assim:\n1º - Escolha seu plano.\n2º - Faça a adesão em minutos.\n3º - Comece a usar *na mesma hora*.');

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, '👉 Inicie sua adesão agora: www.nowtelemed.com.br\n\nPara ver valores dos planos, digite "2"\n\nOu digite *“Falar com um consultor”* e finalize com suporte humano ou digite *"Menu"*.');


    }

    if (msg.body !== null && msg.body === '2' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();


        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Saúde premium, com preços que cabem no seu bolso:\n\n✨ *Individual Essence* - R$49,90/mês\nConsultas ilimitadas com clínico geral + especialistas\n\n✨ *Individual Gold* - R$79,90/mês\nInclui 2 sessões de terapia/mês\n\n✨ *Família Essence* - R$39,90/mês por pessoa _(mínimo 4 pessoas)_\nProteção completa para toda a família\n\n✨ *Família Gold* - R$59,90/mês por pessoa _(mínimo 4 pessoas)_\nEspecialistas + terapia para quem você ama');

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, '⚡ Aderindo hoje, você já usa hoje.\nClique aqui: www.nowtelemed.com.br\n\nPara conhecer os benefícios, digite "3"\n\nOu digite *“Falar com um consultor”* e finalize com suporte humano ou digite *"Menu"*.');
    }

    if (msg.body !== null && msg.body === '3' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();


        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Com a Now, você tem muito mais que consultas:\n\n✔ Atendimento médico ilimitado 24h/dia\n\n✔ Receitas digitais aceitas em todo o Brasil\n\n✔ Clube de Vantagens: descontos em farmácias, laboratórios, exames e até em cinemas\n\n✔ Terapia incluída nos planos Gold\n\n✔ Acesso imediato após adesão');
        
        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, '🔒 Mais de *1 milhão de atendimentos já realizados*.\n🔒 Mais de *400 especialistas disponíveis*.\nA próxima pessoa cuidada pode ser você.');

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, '👉 Comece agora: www.nowtelemed.com.br\n\nPara saber como fazer a adesão, digite "4"\n\nOu digite *“Falar com um consultor”* e finalize com suporte humano ou digite *"Menu"*.');

    }

    if (msg.body !== null && msg.body === '4' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Você pode aderir em menos de 5 minutos:\n\n1. Pelo site: escolha seu plano e conclua online.\n2. Pelo WhatsApp: fale com um consultor e finalize na hora.\n\nAssim que aderir, seu acesso é *imediato*.');

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, '➡️ Adquira agora mesmo: www.nowtelemed.com.br\n\nOu digite *“Falar com um consultor”* e finalize com suporte humano ou digite *"Menu"*.');


    }

    if (msg.body !== null && msg.body === '5' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Fique à vontade para enviar sua dúvida por aqui e logo um consultor entrará em contato.\nOu acesse: www.nowtelemed.com.br');

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, '➡️ Caso queira voltar ao menu inicial, digite *"Menu"*.');


    }

    if (msg.body !== null && msg.body === '6' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Na *Now Telemedicina Corporativa*, sua empresa transforma saúde em vantagem competitiva.\n\n👉 Reduza custos com planos tradicionais;\n👉 Ofereça médicos e psicólogos 24h para sua equipe;\n👉 Diminua o absenteísmo da sua equipe;\n👉 Melhore produtividade e engajamento com colaboradores mais saudáveis.\n\nTudo isso com planos flexíveis e acessíveis, sob medida para o seu negócio.');

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, '📊 Quer descobrir o nível real de saúde da sua empresa?\n\nUse agora, gratuitamente, nossa ferramenta de *Diagnóstico 360 de Saúde Corporativa:*\n🔗https://forms.gle/AqGA2xzMKwgK8QZq9');

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, '➡️ Para falar diretamente com nossa equipe corporativa, digite *“Atendimento Empresas”*.\nOu, se quiser voltar ao menu inicial, digite *“Menu”*.');


    }
});