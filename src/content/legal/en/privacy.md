---
title: Privacy Policy
updated: '2026-10-10'
---

Wakebound is a Discord bot: a text-and-buttons game you play inside your server. This page says what the bot stores, why, for how long, who else touches it, and how to delete it. It applies to everyone who plays, and it follows Brazil's data protection law (LGPD) for players in Brazil.

## Who is responsible

Wakebound is run by Otavio Augusto Soares, an individual, who is the controller of this data under the LGPD.

Contact: the [support server](https://discord.gg/FdBgeCAYnz) or by email at tavinq@hotmail.com.

## What the bot stores

The bot reads only what Discord sends when someone uses a command or a button. It does not read messages in your channels (it asks Discord for the Guilds intent only), and it never stores usernames, avatars, emails, IP addresses or direct messages.

Everything below is stored per server, on a rented server in Brazil.

**About your server**
- The server id, its language and timezone, the channels and admin role chosen in `/config`, the ids of the bot's own board, raid and contract messages, the server's settings, and the date the bot was removed (if it was).
- The portal and raid history, the Server Forge level and donations, and the weekly Contracts.

**About each player, per server**
- Your Discord user id, which is the only thing that ties the data to you.
- Your hunter: class, level, XP, gold, potions, energy, HP, talents, title, injuries and other timers, which tips you have seen, whether the tutorial is done, and whether your profile is private.
- Your game activity: items, materials, expeditions, titles earned, runs and the state they are in, raid actions, Forge donations and Contract deliveries, and when each happened (for example start, end, earn and donation times).
- Feedback: a rating (fun, meh or unfair) with the run it was about, and, if you use the Feedback button, the text you wrote.

**Why:** to run the game. Without this data there is no hunter, no progress and no raid.

## Logs and error reports

To keep the game balanced, working and secure, the bot keeps technical logs and error reports.

- **Game events.** One line per event (a run started, a level up, a gold change) and how long each command or button took to answer. They carry the server id and a pseudonymous code instead of your Discord id. Feedback text is never in them.
- **Error reports.** When something breaks, the error and a short note are recorded. Request data and the bot's secrets are removed. A report can still contain a server or channel id.

Logs and error reports stay on servers run by the operator in Brazil. Logs are kept 30 days and error reports 90 days.

## How long it is kept

| Data | Kept |
| --- | --- |
| Feedback text | Deleted 30 days after it was written |
| Everything else about a server | Until the server resets or deletes it, or removes the bot and 30 days pass |
| Technical logs | 30 days |
| Error reports | 90 days |
| Backups | Each backup up to about 6 months |

Ratings are not feedback text: they stay with the rest of your server's data until it is deleted.

**Backups.** Encrypted backups of the game are kept on a server run by the operator in Brazil and with a cloud storage provider in the United States. They are used only to restore the service after a failure. Data you delete from the game can remain in backups for up to about 6 months, until they expire.

## Deleting your data

- **A server admin** can open `/config`, then Data. **Reset progress** removes every hunter, item, run, portal, raid, the Forge and the Contracts, and keeps the settings. **Delete all data** removes all of that and the settings. Both ask you to type the server's name first.
- **Removing the bot** from a server starts a 30-day countdown, after which all of that server's data is deleted. Adding the bot back within 30 days cancels it.
- **A single player** can ask on the support server or by email at tavinq@hotmail.com to have their data removed, in any server. The operator deletes it by hand within 15 days. Backups expire as described above. A built-in option is planned.
- **Private profile** only hides your build in `/inspect` and your item showcase. Your name, level and rank still show, and level-ups and raid results still mention you in public channels. Messages the bot already posted stay in the server's channels until a server admin deletes them.

## Who else handles the data

- **Hosting.** The bot runs on a rented server in Brazil.
- **Cloud backup.** A cloud storage provider in the United States holds the encrypted backup copies described above. This is an international transfer under LGPD Art. 33: the copy is encrypted before it leaves and the provider cannot read it; it is stored only for backup.
- **Discord.** The bot works through Discord, which has its own privacy policy.

No player data goes to an AI model or any language-model service. The bot never calls one while you play. The game's portals and items are written offline, ahead of time, and checked by a person.

We do not sell data, show ads or share it for marketing.

## Your rights

Under the LGPD you can ask to confirm that we hold your data, see it, fix it, delete it, or ask about how it is used. You can also ask for your data in a portable format, for information about who it is shared with (only the services listed above), or for unnecessary data to be anonymized, blocked or deleted (LGPD Art. 18). Ask on the support server or by email. We answer within 15 days (LGPD Art. 19, II).

**Legal basis.** For your game data it is Art. 7, V: carrying out the service you chose to use. For logs and error reports it is Art. 7, IX: legitimate interest in keeping the bot running and secure.

If you are in Brazil and not satisfied, you can also complain to the ANPD (Autoridade Nacional de Proteção de Dados).

## Children

Discord requires users to be at least 13 (higher in some countries). Wakebound is not meant for anyone younger than Discord allows.

## Changes

If this policy changes, the date at the top changes too. A change that affects what is stored will be mentioned in the bot's release notes.
