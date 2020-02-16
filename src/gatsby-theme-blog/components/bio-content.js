import React, { Fragment } from "react"
import { Styled } from "theme-ui"

/**
 * Change the content to add your own bio
 */

export default () => (
  <Fragment>
    Здесь я несу свой бред <Styled.a href="http://example.com/">Миша Скопенко</Styled.a>
    {` `}
    goes.
    <br />
   в больших колличествах
  </Fragment>
)
