---
id: "Club"
title: "Class: Club"
sidebar_label: "Club"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- `Structure`

  ↳ **`Club`**

## Constructors

### constructor

• **new Club**(`data`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Omit`<`IClub`, ``"members"``\> |

#### Overrides

Structure.constructor

#### Defined in

[lib/structures/Club.ts:14](https://github.com/SpecteraLabs/npm-packages/blob/969a73c/packages/brawlstats/src/lib/structures/Club.ts#L14)

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

### badgeId

• **badgeId**: `number`

#### Defined in

[lib/structures/Club.ts:9](https://github.com/SpecteraLabs/npm-packages/blob/969a73c/packages/brawlstats/src/lib/structures/Club.ts#L9)

___

### description

• **description**: `string`

#### Defined in

[lib/structures/Club.ts:7](https://github.com/SpecteraLabs/npm-packages/blob/969a73c/packages/brawlstats/src/lib/structures/Club.ts#L7)

___

### members

• **members**: `MembersEntity`[]

#### Defined in

[lib/structures/Club.ts:12](https://github.com/SpecteraLabs/npm-packages/blob/969a73c/packages/brawlstats/src/lib/structures/Club.ts#L12)

___

### name

• **name**: `string`

#### Defined in

[lib/structures/Club.ts:6](https://github.com/SpecteraLabs/npm-packages/blob/969a73c/packages/brawlstats/src/lib/structures/Club.ts#L6)

___

### requiredTrophies

• **requiredTrophies**: `number`

#### Defined in

[lib/structures/Club.ts:10](https://github.com/SpecteraLabs/npm-packages/blob/969a73c/packages/brawlstats/src/lib/structures/Club.ts#L10)

___

### tag

• **tag**: `string`

#### Defined in

[lib/structures/Club.ts:5](https://github.com/SpecteraLabs/npm-packages/blob/969a73c/packages/brawlstats/src/lib/structures/Club.ts#L5)

___

### trophies

• **trophies**: `number`

#### Defined in

[lib/structures/Club.ts:11](https://github.com/SpecteraLabs/npm-packages/blob/969a73c/packages/brawlstats/src/lib/structures/Club.ts#L11)

___

### type

• **type**: ``"open"`` \| ``"closed"``

#### Defined in

[lib/structures/Club.ts:8](https://github.com/SpecteraLabs/npm-packages/blob/969a73c/packages/brawlstats/src/lib/structures/Club.ts#L8)

## Methods

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
