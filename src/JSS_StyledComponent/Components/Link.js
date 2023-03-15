import styled from 'styled-components';
import React from 'react';

export const Link =({className,children,...restProps})=>(
    <a className={className}>{children}</a> 
)

// export const Link =({props})=>{
//    return <a className={props.className}>{props.Children}</a> 
// }

export const StyledLink =styled(Link)`
    color:palevioletred;
    font-weight:bold;
`