---
title: Privacy Policy
updated: '2026-10-10'
---

Wakebound is a Discord bot: a text-and-buttons game you play inside your server. This page says what the bot stores, why, for how long, who else touches it, and how to delete it. It applies to everyone who plays, and it follows Brazil's data protection law (LGPD) for players in Brazil.

## Who is responsible

TODO(owner): legal name of the person or company that runs Wakebound (the "controller" under the LGPD).

Contact: the [support server](https://discord.gg/FdBgeCAYnz) or TODO(owner): contact email.

## What the bot stores

The bot reads only what Discord sends when someone uses a command or a button. It does not read messages in your channels (it asks Discord for the Guilds intent only), and it never stores usernames, avatars, emails, IP addresses or direct messages.

Everything below is stored in a SQLite database, per server.

**About your server**
- The server id, its language and timezone, the channels and admin role chosen in `/config`, the ids of the bot's own board, raid and contract messages, the server's settings, and the date the bot was removed (if it was).
- The portal and raid history, the Server Forge level and donations, and the weekly Contracts.

**About each player, per server**
- Your Discord user id, which is the only thing that ties the data to you.
- Your hunter: class, level, XP, gold, potions, energy, HP, talents, title, which tips you have seen, whether the tutorial is done, and whether your profile is private.
- Your game activity: items, materials, expeditions, titles earned, runs and the state they are in, raid actions, Forge donations and Contract deliveries.
- Feedback: a rating (fun, meh or unfair) with the run it was about, and, if you use the Feedback button, the text you wrote.

**Why:** to run the game. Without this data there is no hunter, no progress and no raid.

## Logs and error reports

- **Game event log.** The bot writes one line per game event (a run started, a level up, a gold change) to its log, for balancing the game. It carries the server id and a hunter code: a short one-way hash of your user id and server id, made with a secret salt only the operator knows. It is pseudonymous, not anonymous. Without the salt the log stays off. Feedback text is never written to it.
- **Error reports.** When the bot hits an error, it can send the error and a short context message to an error-tracking service. Request data is removed, the bot's own secrets are scrubbed, and hunters appear only as the hash code. A report can still contain a server or channel id.
- **Uptime monitor.** The bot pings an uptime monitor once a minute. The ping carries no player data.

TODO(owner): how long the container logs and the error-tracking service keep their data.

## How long it is kept

| Data | Kept |
| --- | --- |
| Feedback text | Deleted 30 days after it was written |
| Everything else about a server | Until the server resets or deletes it, or removes the bot and 30 days pass |
| Database backup | One snapshot, rewritten every 6 hours, so a deletion leaves it within the next snapshot |
| Logs and error reports | TODO(owner): see above |

TODO(owner): any copy of the server or its backups kept outside the bot's own snapshot (host-level or off-site backups), and for how long.

Ratings are not feedback text: they stay with the rest of your server's data until it is deleted.

## Deleting your data

- **A server admin** can open `/config`, then Data. **Reset progress** removes every hunter, item, run, portal, raid, the Forge and the Contracts, and keeps the settings. **Delete all data** removes all of that and the settings. Both ask you to type the server's name first.
- **Removing the bot** from a server starts a 30-day countdown, after which all of that server's data is deleted. Adding the bot back within 30 days cancels it.
- **A single player** can ask on the support server to have their data removed, in any server, and we will do it by hand. Setting your profile to private only hides it from others.

## Who else handles the data

- **The server host.** The bot and its database run on a virtual private server (VPS). TODO(owner): provider name and country of the server.
- **Error tracking.** A service that receives the error reports described above. TODO(owner): name and where it is hosted.
- **Discord.** The bot works through Discord, which has its own privacy policy.

No player data goes to an AI model or any language-model service. The bot never calls one while you play. The game's portals and items are written offline, ahead of time, and checked by a person.

We do not sell data, show ads or share it for marketing.

## Your rights

Under the LGPD you can ask to confirm that we hold your data, see it, fix it, delete it, or ask about how it is used. Ask on the support server. TODO(owner): legal basis to name here (the game you asked to play, or legitimate interest), whether single-player deletion requests are handled by hand as promised above, and how fast requests are answered.

If you are in Brazil and not satisfied, you can also complain to the ANPD (Autoridade Nacional de Proteção de Dados).

## Children

Discord requires users to be at least 13 (higher in some countries). Wakebound is not meant for anyone younger than Discord allows.

## Changes

If this policy changes, the date at the top changes too. A change that affects what is stored will be mentioned in the bot's release notes.
