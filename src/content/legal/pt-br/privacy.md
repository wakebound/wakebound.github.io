---
title: Política de Privacidade
updated: '2026-10-10'
---

O Wakebound é um bot de Discord: um jogo de texto e botões que você joga dentro do seu servidor. Esta página diz o que o bot guarda, por quê, por quanto tempo, quem mais encosta nos dados e como apagá-los. Vale para todo mundo que joga e segue a Lei Geral de Proteção de Dados (LGPD) para jogadores no Brasil.

## Quem é o responsável

TODO(owner): nome legal da pessoa ou empresa que opera o Wakebound (o "controlador" na LGPD).

Contato: o [servidor de suporte](https://discord.gg/FdBgeCAYnz) ou TODO(owner): e-mail de contato.

## O que o bot guarda

O bot lê só o que o Discord envia quando alguém usa um comando ou um botão. Ele não lê as mensagens dos seus canais (pede ao Discord apenas a intent Guilds) e nunca guarda nomes de usuário, avatares, e-mails, endereços IP nem mensagens diretas.

Tudo abaixo fica num banco SQLite, separado por servidor.

**Sobre o seu servidor**
- O id do servidor, o idioma e o fuso horário, os canais e o cargo de admin escolhidos no `/config`, os ids das mensagens do próprio bot (quadro, raid e contrato), as configurações do servidor e a data em que o bot foi removido (se foi).
- O histórico de portais e raids, o nível e as doações da Forja do Servidor e os Contratos semanais.

**Sobre cada jogador, por servidor**
- O seu id de usuário do Discord, a única coisa que liga os dados a você.
- O seu caçador: classe, nível, XP, ouro, poções, energia, HP, talentos, título, lesões e outros temporizadores, quais dicas você já viu, se o tutorial foi concluído e se o seu perfil é privado.
- A sua atividade no jogo: itens, materiais, expedições, títulos conquistados, runs e o estado delas, ações em raids, doações à Forja e entregas de Contratos, e quando cada coisa aconteceu (horários de início, fim e doação).
- Feedback: uma avaliação (divertido, mais ou menos ou injusto) com a run a que ela se refere e, se você usar o botão Feedback, o texto que escreveu.

**Por quê:** para o jogo funcionar. Sem esses dados não existe caçador, progresso nem raid.

## Logs e relatórios de erro

- **Log de eventos do jogo.** O bot escreve uma linha por evento (uma run começou, subiu de nível, mudou o ouro) no seu log, para equilibrar o jogo. A linha traz o id do servidor e um código do caçador: um hash curto, sem volta, do seu id de usuário com o id do servidor, feito com um sal secreto que só o operador conhece. É pseudônimo, não anônimo. Sem o sal, esse log fica desligado. O texto de feedback nunca vai para ele. O bot também registra quanto tempo leva a resposta de cada comando e botão, com o mesmo código do caçador, para manter o bot rápido.
- **Relatórios de erro.** Quando o bot encontra um erro, ele pode enviar o erro e uma mensagem curta de contexto para um serviço de rastreio de erros. Os dados da requisição são removidos, os segredos do próprio bot são apagados e os caçadores aparecem só como o código hash. Um relatório ainda pode conter o id de um servidor ou canal.
- **Monitor de disponibilidade.** O bot dá um ping por minuto num monitor de disponibilidade. O ping não leva dados de jogadores.

TODO(owner): por quanto tempo os logs do contêiner e o serviço de rastreio de erros guardam os dados.

## Por quanto tempo fica guardado

| Dado | Fica guardado |
| --- | --- |
| Texto de feedback | Apagado 30 dias depois de escrito |
| Todo o resto de um servidor | Até o servidor zerar ou apagar, ou remover o bot e passarem 30 dias |
| Backup do banco | Um único snapshot, reescrito a cada 6 horas, então uma exclusão sai dele no snapshot seguinte |
| Logs e relatórios de erro | TODO(owner): veja acima |

TODO(owner): qualquer cópia do servidor ou de backups guardada fora do snapshot do próprio bot (backups da hospedagem ou externos) e por quanto tempo.

Avaliações não são texto de feedback: elas ficam com o resto dos dados do seu servidor até ele ser apagado.

## Como apagar seus dados

- **Um admin do servidor** abre `/config` e depois Dados. **Zerar progresso** remove todos os caçadores, itens, runs, portais, a raid, a Forja e os Contratos, e mantém as configurações. **Apagar todos os dados** remove tudo isso e também as configurações. Os dois pedem que você digite o nome do servidor antes.
- **Remover o bot** de um servidor inicia uma contagem de 30 dias; depois dela, todos os dados daquele servidor são apagados. Adicionar o bot de volta dentro dos 30 dias cancela a exclusão.
- **Um jogador sozinho** pode pedir no servidor de suporte para ter seus dados removidos, em qualquer servidor, e isso é feito à mão. TODO(owner): confirmar essa promessa e o prazo, e que a exclusão manual cobre toda tabela ligada ao id de usuário (caçadores, itens, runs, ações em raids, materiais, expedições, títulos, feedback, doações à Forja, entregas de Contratos e a coluna do dono da alavanca, que não tem chave estrangeira); o id de usuário em doações e entregas pode estar vazio; os backups guardam o dado por até 6 horas.
- **Perfil privado** só esconde a sua build no `/inspect` e a vitrine de itens. Seu nome, nível e rank continuam aparecendo, e subidas de nível e resultados de raid ainda mencionam você em canais públicos. Mensagens que o bot já publicou ficam nos canais do servidor até um admin do servidor apagá-las.

## Quem mais lida com os dados

- **A hospedagem.** O bot e o banco rodam num servidor virtual privado (VPS). TODO(owner): nome do provedor e país do servidor.
- **Rastreio de erros.** Um serviço que recebe os relatórios de erro descritos acima. TODO(owner): nome e onde está hospedado.
- **Discord.** O bot funciona pelo Discord, que tem a própria política de privacidade.

Nenhum dado de jogador vai para um modelo de IA ou qualquer serviço de modelo de linguagem. O bot nunca chama um enquanto você joga. Os portais e itens do jogo são escritos antes, offline, e revisados por uma pessoa.

Não vendemos dados, não mostramos anúncios e não compartilhamos para marketing.

## Seus direitos

Pela LGPD você pode pedir a confirmação de que temos seus dados, o acesso a eles, a correção, a exclusão ou informações sobre o uso. Você também pode pedir seus dados em formato portável, informações sobre com quem eles são compartilhados (os serviços listados acima, e ninguém mais) ou a anonimização, o bloqueio ou a eliminação de dados desnecessários (LGPD, art. 18). Peça no servidor de suporte. TODO(owner): base legal a citar aqui (o jogo que você quis jogar ou legítimo interesse) e em quanto tempo os pedidos são respondidos.

Se você está no Brasil e não ficou satisfeito, também pode reclamar à ANPD (Autoridade Nacional de Proteção de Dados).

## Crianças

O Discord exige que o usuário tenha pelo menos 13 anos (mais, em alguns países). O Wakebound não é feito para quem tem menos do que o Discord permite.

## Mudanças

Se esta política mudar, a data no topo muda também. Uma mudança no que é guardado será citada nas notas de versão do bot.
