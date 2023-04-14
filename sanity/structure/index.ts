import {ConfigContext} from 'sanity'
import {StructureBuilder} from 'sanity/desk'

import {
  SCHEMA_ITEMS,
  SchemaDivider,
  SchemaItem,
  SchemaSingleton,
} from '../../lib/constants'

const createAllSchemaItems = (S: StructureBuilder, config: ConfigContext) =>
  SCHEMA_ITEMS.map((schemaItem) => createSchemaItem(S, schemaItem))

const createSchemaItem = (
  S: StructureBuilder,
  schemaItem: SchemaItem | SchemaSingleton | SchemaDivider
) => {
  switch (schemaItem.kind) {
    case 'divider':
      return S.divider()
    case 'list':
      return S.listItem()
        .id(`${schemaItem.title.toLowerCase().replaceAll(` `, `-`)}`)
        .title(schemaItem.title)
        .icon(schemaItem.icon)
        .child(createSchemaItemChildren(S, schemaItem))
    case 'singleton':
      return S.documentListItem()
        .schemaType(schemaItem.schemaType)
        .icon(schemaItem.icon)
        .id(`${schemaItem.schemaType}`)
        .title(schemaItem.title)
    default:
      return null
  }
}

const createSchemaItemChildren = (
  S: StructureBuilder,
  schemaItem: SchemaItem
) => {
  return S.documentTypeList(schemaItem.schemaType)
    .title(schemaItem.title)
    .filter(`_type == $schemaType`)
    .params({
      schemaType: schemaItem.schemaType,
    })
    .initialValueTemplates([
      S.initialValueTemplateItem(`${schemaItem.schemaType}`, {}),
    ])
}

export const structure = (S: StructureBuilder, context: ConfigContext) => {
  return S.list()
    .id('root')
    .title('Content')
    .items(createAllSchemaItems(S, context))
}
