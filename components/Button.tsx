import {clsx} from 'clsx'
import {ArrowRight} from 'lucide-react'
import Link from 'next/link'
import React from 'react'

import {Link as LinkProps} from '../types'

type ButtonMode = 'default' | 'ghost' | 'bleed'
type ButtonProps = LinkProps & {
  mode?: ButtonMode
  icon?: boolean
  locale?: string
  href?: string
  disabled?: boolean
}

const buttonClasses = {
  base: `px-3 py-2 rounded transition-colors duration-200 ease-in-out`,
  default: `text-white`,
  disabled: `pointer-events-none opacity-40`,
}

export default function Button(props: ButtonProps) {
  const {
    text,
    url,
    reference,
    mode = `default`,
    icon = false,
    locale,
    href,
    disabled = false,
  } = props

  const classes = React.useMemo(
    () =>
      clsx(
        buttonClasses.base,
        buttonClasses[mode],
        disabled && buttonClasses.disabled
      ),
    [mode, disabled]
  )

  if (href) {
    return (
      <Link className={classes} href={href} locale={locale ?? undefined}>
        <span>{text ?? reference?.title}</span>
        {icon ? <ArrowRight className="w-5" /> : null}
      </Link>
    )
  }
  if (reference?.slug && (reference?.title || text)) {
    return (
      <Link className={classes} href={reference.slug}>
        <span>{text ?? reference?.title}</span>
        {icon ? <ArrowRight className="w-5" /> : null}
      </Link>
    )
  } else if (url && text) {
    return (
      <a className={classes} href={url}>
        <span>{text}</span>
        {icon ? <ArrowRight className="w-5" /> : null}
      </a>
    )
  } else if (text) {
    return (
      <span className={classes}>
        <span>{text}</span>
        {icon ? <ArrowRight className="w-5" /> : null}
      </span>
    )
  }

  return null
}
