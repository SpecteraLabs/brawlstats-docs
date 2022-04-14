---
id: "Player"
title: "Class: Player"
sidebar_label: "Player"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- `Structure`

  ↳ **`Player`**

## Constructors

### constructor

• **new Player**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Omit`<`IPlayer`, ``"3vs3Victories"``\> |

#### Overrides

Structure.constructor

#### Defined in

[lib/structures/Player.ts:23](https://github.com/SpecteraLabs/npm-packages/blob/969a73c/packages/brawlstats/src/lib/structures/Player.ts#L23)

## Properties

### #endpoint

• `Private` **#endpoint**: `string`

#### Inherited from

Structure.#endpoint

#### Defined in

[lib/structures/Structure.ts:5](https://github.com/SpecteraLabs/npm-packages/blob/969a73c/packages/brawlstats/src/lib/structures/Structure.ts#L5)

___

### #url

• `Private` **#url**: `string` = `'https://api.brawlstars.com/v1'`

#### Inherited from

Structure.#url

#### Defined in

[lib/structures/Structure.ts:4](https://github.com/SpecteraLabs/npm-packages/blob/969a73c/packages/brawlstats/src/lib/structures/Structure.ts#L4)

___

### bestRoboRumbleTime

• **bestRoboRumbleTime**: `number`

#### Defined in

[lib/structures/Player.ts:19](https://github.com/SpecteraLabs/npm-packages/blob/969a73c/packages/brawlstats/src/lib/structures/Player.ts#L19)

___

### bestTimeAsBigBrawler

• **bestTimeAsBigBrawler**: `number`

#### Defined in

[lib/structures/Player.ts:20](https://github.com/SpecteraLabs/npm-packages/blob/969a73c/packages/brawlstats/src/lib/structures/Player.ts#L20)

___

### brawlers

• `Optional` **brawlers**: ``null`` \| `BrawlersEntity`[]

#### Defined in

[lib/structures/Player.ts:22](https://github.com/SpecteraLabs/npm-packages/blob/969a73c/packages/brawlstats/src/lib/structures/Player.ts#L22)

___

### club

• **club**: `PlayerClub`

#### Defined in

[lib/structures/Player.ts:21](https://github.com/SpecteraLabs/npm-packages/blob/969a73c/packages/brawlstats/src/lib/structures/Player.ts#L21)

___

### duoVictories

• **duoVictories**: `number`

#### Defined in

[lib/structures/Player.ts:18](https://github.com/SpecteraLabs/npm-packages/blob/969a73c/packages/brawlstats/src/lib/structures/Player.ts#L18)

___

### expLevel

• **expLevel**: `number`

#### Defined in

[lib/structures/Player.ts:13](https://github.com/SpecteraLabs/npm-packages/blob/969a73c/packages/brawlstats/src/lib/structures/Player.ts#L13)

___

### expPoints

• **expPoints**: `number`

#### Defined in

[lib/structures/Player.ts:14](https://github.com/SpecteraLabs/npm-packages/blob/969a73c/packages/brawlstats/src/lib/structures/Player.ts#L14)

___

### highestPowerPlayPoints

• **highestPowerPlayPoints**: `number`

#### Defined in

[lib/structures/Player.ts:12](https://github.com/SpecteraLabs/npm-packages/blob/969a73c/packages/brawlstats/src/lib/structures/Player.ts#L12)

___

### highestTrophies

• **highestTrophies**: `number`

#### Defined in

[lib/structures/Player.ts:11](https://github.com/SpecteraLabs/npm-packages/blob/969a73c/packages/brawlstats/src/lib/structures/Player.ts#L11)

___

### icon

• **icon**: `Icon`

#### Defined in

[lib/structures/Player.ts:9](https://github.com/SpecteraLabs/npm-packages/blob/969a73c/packages/brawlstats/src/lib/structures/Player.ts#L9)

___

### isQualifiedFromChampionshipChallenge

• **isQualifiedFromChampionshipChallenge**: `boolean`

#### Defined in

[lib/structures/Player.ts:15](https://github.com/SpecteraLabs/npm-packages/blob/969a73c/packages/brawlstats/src/lib/structures/Player.ts#L15)

___

### name

• **name**: `string`

#### Defined in

[lib/structures/Player.ts:7](https://github.com/SpecteraLabs/npm-packages/blob/969a73c/packages/brawlstats/src/lib/structures/Player.ts#L7)

___

### nameColor

• **nameColor**: `string`

#### Defined in

[lib/structures/Player.ts:8](https://github.com/SpecteraLabs/npm-packages/blob/969a73c/packages/brawlstats/src/lib/structures/Player.ts#L8)

___

### soloVictories

• **soloVictories**: `number`

#### Defined in

[lib/structures/Player.ts:17](https://github.com/SpecteraLabs/npm-packages/blob/969a73c/packages/brawlstats/src/lib/structures/Player.ts#L17)

___

### tag

• **tag**: `string`

#### Defined in

[lib/structures/Player.ts:6](https://github.com/SpecteraLabs/npm-packages/blob/969a73c/packages/brawlstats/src/lib/structures/Player.ts#L6)

___

### trioVictories

• **trioVictories**: `number`

#### Defined in

[lib/structures/Player.ts:16](https://github.com/SpecteraLabs/npm-packages/blob/969a73c/packages/brawlstats/src/lib/structures/Player.ts#L16)

___

### trophies

• **trophies**: `number`

#### Defined in

[lib/structures/Player.ts:10](https://github.com/SpecteraLabs/npm-packages/blob/969a73c/packages/brawlstats/src/lib/structures/Player.ts#L10)

## Methods

### getBattleLog

▸ **getBattleLog**(): `Promise`<`undefined` \| ``null`` \| `ItemsEntity`[]\>

Get battlelog of the player.

#### Returns

`Promise`<`undefined` \| ``null`` \| `ItemsEntity`[]\>

#### Defined in

[lib/structures/Player.ts:31](https://github.com/SpecteraLabs/npm-packages/blob/969a73c/packages/brawlstats/src/lib/structures/Player.ts#L31)

___

### request

▸ **request**<`T`\>(`endpoint?`, `token?`): `Promise`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | `string` |
| `token` | `string` |

#### Returns

`Promise`<`T`\>

#### Inherited from

Structure.request

#### Defined in

[lib/structures/Structure.ts:10](https://github.com/SpecteraLabs/npm-packages/blob/969a73c/packages/brawlstats/src/lib/structures/Structure.ts#L10)
