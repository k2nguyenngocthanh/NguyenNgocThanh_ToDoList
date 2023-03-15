import React, { Component } from 'react'
import { Button, SmallButton } from '../Button'
import { StyledLink } from '../Link'
import { TextField } from '../TextField'

export default class DemoJSS extends Component {
  render() {
    return (
      <div>
        <Button className='button_style' bgPrimary fontSize>Hello</Button>
        <SmallButton>HIIIIIIII</SmallButton>
        <StyledLink>Ahihi</StyledLink>
        <TextField inputColor="yellow"></TextField>
      </div>
    )
  }
}
