---
title: Política de Privacidade
updated: '2026-10-10'
---

O Wakebound é um bot de Discord: um jogo de texto e botões que você joga dentro do seu servidor. Esta página diz o que o bot guarda, por quê, por quanto tempo, quem mais encosta nos dados e como apagá-los. Vale para todo mundo que joga e segue a Lei Geral de Proteção de Dados (LGPD) para jogadores no Brasil.

## Quem é o responsável

O Wakebound é operado por Otavio Augusto Soares, pessoa física, que é o controlador destes dados nos termos da LGPD.

Contato: o [servidor de suporte](https://discord.gg/FdBgeCAYnz) ou por e-mail em tavinq@hotmail.com.

## O que o bot guarda

O bot lê só o que o Discord envia quando alguém usa um comando ou um botão. Ele não lê as mensagens dos seus canais (pede ao Discord apenas a intent Guilds) e nunca guarda nomes de usuário, avatares, e-mails, endereços IP nem mensagens diretas.

Tudo abaixo é guardado por servidor, num servidor alugado no Brasil.

**Sobre o seu servidor**
- O id do servidor, o idioma e o fuso horário, os canais e o cargo de admin escolhidos no `/config`, os ids das mensagens do próprio bot (quadro, raid e contrato), as configurações do servidor e a data em que o bot foi removido (se foi).
- O histórico de portais e raids, o nível e as doações da Forja do Servidor e os Contratos semanais.

**Sobre cada jogador, por servidor**
- O seu id de usuário do Discord, a única coisa que liga os dados a você.
- O seu caçador: classe, nível, XP, ouro, poções, energia, HP, talentos, título, lesões e outros temporizadores, quais dicas você já viu, se o tutorial foi concluído e se o seu perfil é privado.
- A sua atividade no jogo: itens, materiais, expedições, títulos conquistados, runs e o estado delas, ações em raids, doações à Forja e entregas de Contratos, e quando cada coisa aconteceu (por exemplo, horários de início, fim, conquista e doação).
- Feedback: uma avaliação (divertido, mais ou menos ou injusto) com a run a que ela se refere e, se você usar o botão Feedback, o texto que escreveu.

**Por quê:** para o jogo funcionar. Sem esses dados não existe caçador, progresso nem raid.

## Logs e relatórios de erro

Para manter o jogo equilibrado, funcionando e seguro, o bot guarda logs técnicos e relatórios de erro.

- **Eventos do jogo.** Uma linha por evento (uma run começou, subiu de nível, mudou o ouro) e quanto tempo cada comando ou botão levou para responder. Elas trazem o id do servidor e um código pseudônimo no lugar do seu id do Discord. O texto de feedback nunca entra nelas.
- **Relatórios de erro.** Quando algo quebra, o erro e uma nota curta são registrados. Dados da requisição e segredos do bot são removidos. Um relatório ainda pode conter o id de um servidor ou canal.

Logs e relatórios de erro ficam em servidores do próprio operador, no Brasil. Os logs ficam 30 dias e os relatórios de erro, 90 dias.

## Por quanto tempo fica guardado

| Dado | Fica guardado |
| --- | --- |
| Texto de feedback | Apagado 30 dias depois de escrito |
| Todo o resto de um servidor | Até o servidor zerar ou apagar, ou remover o bot e passarem 30 dias |
| Logs técnicos | 30 dias |
| Relatórios de erro | 90 dias |
| Backups | Cada backup por até cerca de 6 meses |

Avaliações não são texto de feedback: elas ficam com o resto dos dados do seu servidor até ele ser apagado.

**Backups.** Backups criptografados do jogo ficam num servidor do próprio operador, no Brasil, e com um provedor de armazenamento em nuvem nos Estados Unidos. Servem só para restaurar o serviço depois de uma falha. Dados que você apaga do jogo podem continuar nos backups por até cerca de 6 meses, até eles expirarem.

## Como apagar seus dados

- **Um admin do servidor** abre `/config` e depois Dados. **Zerar progresso** remove todos os caçadores, itens, runs, portais, a raid, a Forja e os Contratos, e mantém as configurações. **Apagar todos os dados** remove tudo isso e também as configurações. Os dois pedem que você digite o nome do servidor antes.
- **Remover o bot** de um servidor inicia uma contagem de 30 dias; depois dela, todos os dados daquele servidor são apagados. Adicionar o bot de volta dentro dos 30 dias cancela a exclusão.
- **Um jogador sozinho** pode pedir no servidor de suporte ou por e-mail em tavinq@hotmail.com para ter seus dados removidos, em qualquer servidor. O operador apaga à mão em até 15 dias. Os backups expiram como descrito acima. Uma opção própria dentro do jogo está planejada.
- **Perfil privado** só esconde a sua build no `/inspect` e a vitrine de itens. Seu nome, nível e rank continuam aparecendo, e subidas de nível e resultados de raid ainda mencionam você em canais públicos. Mensagens que o bot já publicou ficam nos canais do servidor até um admin do servidor apagá-las.

## Quem mais lida com os dados

- **Hospedagem.** O bot roda num servidor alugado no Brasil.
- **Backup na nuvem.** Um provedor de armazenamento em nuvem nos Estados Unidos guarda as cópias criptografadas de backup descritas acima. Isso é uma transferência internacional nos termos do art. 33 da LGPD: a cópia é criptografada antes de sair e o provedor não consegue lê-la; ela é guardada apenas como backup.
- **Discord.** O bot funciona pelo Discord, que tem a própria política de privacidade.

Nenhum dado de jogador vai para um modelo de IA ou qualquer serviço de modelo de linguagem. O bot nunca chama um enquanto você joga. Os portais e itens do jogo são escritos antes, offline, e revisados por uma pessoa.

Não vendemos dados, não mostramos anúncios e não compartilhamos para marketing.

## Seus direitos

Pela LGPD você pode pedir a confirmação de que temos seus dados, o acesso a eles, a correção, a exclusão ou informações sobre o uso. Você também pode pedir seus dados em formato portável, informações sobre com quem eles são compartilhados (apenas os serviços listados acima) ou a anonimização, o bloqueio ou a eliminação de dados desnecessários (LGPD, art. 18). Peça no servidor de suporte ou por e-mail. Respondemos em até 15 dias (LGPD, art. 19, II).

**Base legal.** Para os dados do jogo é o art. 7º, V: execução do serviço que você escolheu usar. Para logs e relatórios de erro é o art. 7º, IX: legítimo interesse em manter o bot funcionando e seguro.

Se você está no Brasil e não ficou satisfeito, também pode reclamar à ANPD (Autoridade Nacional de Proteção de Dados).

## Crianças

O Discord exige que o usuário tenha pelo menos 13 anos (mais, em alguns países). O Wakebound não é feito para quem tem menos do que o Discord permite.

## Mudanças

Se esta política mudar, a data no topo muda também. Uma mudança no que é guardado será citada nas notas de versão do bot.
