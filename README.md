# Team Discord4Boy Bot

![GitHub](https://img.shields.io/github/license/DeBos99/team-discord4boy-bot.svg?color=2020cc&labelColor=5050ff&style=for-the-badge)
![GitHub followers](https://img.shields.io/github/followers/DeBos99.svg?color=2020cc&labelColor=5050ff&style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/DeBos99/team-discord4boy-bot.svg?color=2020cc&labelColor=5050ff&style=for-the-badge)
![GitHub stars](https://img.shields.io/github/stars/DeBos99/team-discord4boy-bot.svg?color=2020cc&labelColor=5050ff&style=for-the-badge)
![GitHub watchers](https://img.shields.io/github/watchers/DeBos99/team-discord4boy-bot.svg?color=2020cc&labelColor=5050ff&style=for-the-badge)
![GitHub contributors](https://img.shields.io/github/contributors/DeBos99/team-discord4boy-bot.svg?color=2020cc&labelColor=5050ff&style=for-the-badge)

![GitHub commit activity](https://img.shields.io/github/commit-activity/w/DeBos99/team-discord4boy-bot.svg?color=ffaa00&labelColor=ffaa30&style=for-the-badge)
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/DeBos99/team-discord4boy-bot.svg?color=ffaa00&labelColor=ffaa30&style=for-the-badge)
![GitHub commit activity](https://img.shields.io/github/commit-activity/y/DeBos99/team-discord4boy-bot.svg?color=ffaa00&labelColor=ffaa30&style=for-the-badge)
![GitHub last commit](https://img.shields.io/github/last-commit/DeBos99/team-discord4boy-bot.svg?color=ffaa00&labelColor=ffaa30&style=for-the-badge)

![GitHub issues](https://img.shields.io/github/issues-raw/DeBos99/team-discord4boy-bot.svg?color=cc2020&labelColor=ff3030&style=for-the-badge)
![GitHub closed issues](https://img.shields.io/github/issues-closed-raw/DeBos99/team-discord4boy-bot.svg?color=10aa10&labelColor=30ff30&style=for-the-badge)

[![Donate](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=NH8JV53DSVDMY)

**Team Discord4Boy Bot** is Discord bot made for [Team Discord4Boy](https://discord.gg/fjkRnvG) server.

## Content

- [Content](#content)
- [Requirements](#requirements)
- [Installation](#installation)
- [Documentation](#documentation)
- [Templates](#templates)
  - [config.json](#configjson)
  - [database.json](#databasejson)
- [Authors](#authors)
- [Contact](#contact)
- [License](#license)

## Requirements

- [glob](https://www.npmjs.com/package/glob)
- [node-cron](https://www.npmjs.com/package/node-cron)
- [discord.js](https://www.npmjs.com/package/discord.js)

## Installation

`npm install glob node-cron discord.js`

## Documentation

| Command                   | Description                                   |
| :------------------------ | :-------------------------------------------- |
| *ban **user** **reason**  | Bans **user** for **reason**.                 |
| *kick **user** **reason** | Kicks **user** for **reason**.                |
| *mute **user** **reason** | Mutes **user** for **reason**.                |
| *unban **user**           | Unbans **user**.                              |
| *unmute **user**          | Unmutes **user**.                             |
| *unwarn **user** **N**    | Removes **N** warnings of **user**.           |
| *warn **user** **reason** | Warns **user** for **reason**.                |
| *clear **N**              | Clears **N** messages.                        |
| *help                     | Shows help message.                           |
| *jj                       | Shows information that user is no longer AFK. |
| *money                    | Shows amount of money.                        |
| *work                     | Gives user money for work.                    |
| *zw                       | Shows information that user is AFK.           |
| *dbload                   | Loads database.                               |
| *dbsave                   | Saves database.                               |

## Templates

### config.json

```json
{
	"clientToken"        : "TOKEN",
	"ownerID"            : "ID",
	"commandPrefix"      : "!",
	"currencySymbol"     : "$",
	"entryChannelID"     : "ID",
	"exitChannelID"      : "ID",
	"workChannelID"      : "ID",
	"maxWarnings"        : 2,
	"workWaitTime"       : 3600,
	"ores"               : {
		"ore1" : {
			"chance" : 0.7,
			"value"  : 100
		},
		"ore2" : {
			"chance" : 0.3,
			"value"  : 300
		}
	},
	"autoRolesChannelID" : "ID",
	"autoRoles" : [
		{
			"emoji" : "roleID",
			"emoji" : "roleID"
		},
		{"emoji" : "roleID"}
	]
}
```

| Key                | Description                                                                                                        |
| :----------------- | :----------------------------------------------------------------------------------------------------------------- |
| clientToken        | Token of your bot. You can find it here: [Application](https://discordapp.com/developers/applications/)->Bot->Copy |
| ownerID            | Discord ID of bot owner.                                                                                           |
| commandPrefix      | Command prefix for bot.                                                                                            |
| currencySymbol     | Symbol for server currency.                                                                                        |
| entryChannelID     | ID of channel where information about joining players will appear.                                                 |
| exitChannelID      | ID of channel where information about leaving players will appear.                                                 |
| workChannelID      | ID of channel where information about work will appear.                                                            |
| maxWarnings        | Number of warnings after which user warned user will be kicked out from server.                                    |
| workWaitTime       | Number of seconds before next time when user can use `!work` command.                                              |
| ores               | List of ores that user can get from `*work`.                                                                       |
| autoRolesChannelID | ID of channel with auto-roles.                                                                                     |
| autoRoles          | Groups of roles.                                                                                                   |

### database.json

```json
{
    "users": {
        "ID": {
            "warns"    : 0,
            "money"    : 100,
			"nextWork" : 0
        }
	}
}
```

| Key      | Description                                |
| :------- | :----------------------------------------- |
| warns    | Number of warnings that user have.         |
| money    | Amount of money that user have.            |
| nextWork | Time when user will be able to work again. |

## Authors

* **Michał Wróblewski** - Main Developer - [DeBos99](https://github.com/DeBos99)

## Contact

* Discord: DeBos#3292
* Reddit: [DeBos99](https://www.reddit.com/user/DeBos99)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
