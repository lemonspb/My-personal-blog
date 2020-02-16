import React from "react"
import styled from "styled-components"


const Footer = styled.div`
margin: 0 auto;
display: flex;
align-items: center;
justify-content: center;
`
const LinkOtherSite = styled.a`
color: #66E0FF;
margin-right: 20px;

`
export default () => {

return (
    <Footer>
<LinkOtherSite href='https://twitter.com/skopenkoM'>twitter</LinkOtherSite>
<LinkOtherSite href='https://github/lemonspb'>github</LinkOtherSite>
</Footer>
)

}