import styled from 'styled-components';

export const Button = styled.button`
    color:#fff;
    background:${props => props.bgPrimary ? 'blue' :'red'}; 
    border:none;
    border-radius:0.5rem;
    font-weight:bold;
    font-size:${props => props.fontSize ? '2rem' : '1rem'};
    padding:1rem;
    opacity:1;
        &:hover{
            opacity:0.7;
            transiton:0.5s;
        }
       
`

export const SmallButton = styled(Button)`
        background-color:orange;
        font-size: 0.5 rem;
`