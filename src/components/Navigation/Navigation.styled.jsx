import { NavLink } from 'react-router-dom';
import styled from 'styled-components'

export const Link = styled(NavLink)`
text-decoration: none;
display: flex;
align-items: center;
justify-content: center;
width: 172px;
height: 45px;
color: #ffffff;
font-weight: 600;
font-size: 17px;
line-height: 120%;
letter-spacing: 0.03em;
&.active {
  color: #1f3349;
}
`;