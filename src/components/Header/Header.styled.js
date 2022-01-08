import styled from 'styled-components';


export const Nav = styled.div`
  background-color: black;
  border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
  width: 100%;
`;
 
export const NavHeader = styled.div`
  padding: 15px 15px;
  width: 100%;
  display: flex;
  align-items: left;
  margin: 0 auto;
  a {
    background-color: black;
    color: white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
  }
  color: black;
`;
 
export const NavLeft = styled.div`
  width: 10.0%;
  text-align: left;
`;
 
export const NavCenter = styled.div`
  width: 60.0%;
  text-align: left;
  font-size: 24px;
`;
 
export const Input = styled.input`
  font-size: 16px;
  border: solid 1px #dbdbdb;
  border-radius: 3px;
  color: #262626;
  padding: 7px 33px;
  border-radius: 3px;
  color: #999;
  cursor: text;
  font-size: 14px;
  font-weight: 300;
  text-align: center;
  background: #fafafa;
 
  &:active,
  &:focus {
    text-align: left;
  }
`;
 
export const NavRight = styled.div`
  width: 30.0%;
  text-align: center;
  a {
    background-color: #1DA1F2;
    color: white;
    padding: 14px 25px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
  }

  a:hover{
    border: 1px solid white;
  }
  svg {
    margin-right: 20px;
  }

  Button {
    margin: 5px;
  }
`;


export const MenuLink = styled.a``;

 