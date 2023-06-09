import {File, HelpCircle, Home, MenuIcon, Upload} from 'lucide-react'

export type SchemaItem = {
  kind: 'list'
  schemaType: string
  title: string
  icon: (props) => JSX.Element
}

export type SchemaSingleton = {
  kind: 'singleton'
  schemaType: string
  title: string
  icon: (props) => JSX.Element
}

export type SchemaDivider = {
  kind: 'divider'
}

export const SCHEMA_ITEMS: (SchemaItem | SchemaSingleton | SchemaDivider)[] = [
  {kind: 'singleton', schemaType: `home`, title: 'Home', icon: Home},
  {kind: 'list', schemaType: `page`, title: 'Pages', icon: File},
  {kind: 'singleton', schemaType: `notFound`, title: '404', icon: HelpCircle},
  {kind: 'divider'},
  {kind: 'singleton', schemaType: `header`, title: 'Header', icon: MenuIcon},
  {kind: 'singleton', schemaType: `footer`, title: 'Footer', icon: Upload},
]
