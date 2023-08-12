import styled from 'styled-components'

export const HeaderSection = styled.div`
  height: 12vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const WebsiteLogo = styled.img`
  height: 50px;
  width: 170px;
  margin-left: 17px;
`

export const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 10%;
  justify-content: space-between;
  margin-right: 40px;
`

export const LogoutButton = styled.button`
  background-color: transparent;
  color: blue;
  border: 2px solid blue;
  height: 30px;
  width: max-content;
  font-size: 13px;
`
