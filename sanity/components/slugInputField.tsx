import {ErrorOutlineIcon} from '@sanity/icons'
import {Card, Stack, Text} from '@sanity/ui'
import React, {useEffect, useState} from 'react'

export const SlugInputField = (props: any) => {
  const [error, setError] = useState(false)
  const {
    description,
    title,
    onChange,
    validation,
    validationError,
    ...restProps
  } = props
  useEffect(() => {
    // eslint-disable-next-line no-negated-condition
    if (!restProps.inputProps.value) {
      setError(true)
    } else setError(false)
  }, [restProps.inputProps.value])

  return (
    <Card>
      <Stack space={3} paddingBottom={4}>
        <Text size={1} style={{display: 'flex'}} weight={'medium'}>
          {title}
          {error && (
            <ErrorOutlineIcon style={{marginLeft: '2px', color: '#c33529'}} />
          )}
        </Text>
        {description && (
          <Text size={1} style={{color: '#6E7683', marginTop: '-2px'}}>
            {description}
          </Text>
        )}
        <Text style={{paddingTop: '12px'}}>
          <li
            style={{
              listStyle: 'inside',
              color: '#6E7683',
              fontSize: '13px',
            }}
          >
            💡 {`Don't`} include spaces or special characters, only lower-case
            letters, number and hyphens
          </li>
        </Text>
      </Stack>
      {props.renderDefault(restProps)}
    </Card>
  )
}
