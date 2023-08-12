import {withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import {CgProfile} from 'react-icons/cg'

import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import {
  HeaderSection,
  WebsiteLogo,
  IconsContainer,
  LogoutButton,
} from './styledComponents'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    const h = Cookies.get('jwt_token')
    console.log(h)
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <>
      <HeaderSection>
        <WebsiteLogo
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="nxt watch logo"
        />
        <IconsContainer>
          <CgProfile className="hamburger" color="black" fill="black" />
          <div className="popup-container">
            <Popup
              modal
              trigger={
                <LogoutButton type="button" className="trigger-button">
                  Logout
                </LogoutButton>
              }
            >
              {close => (
                <>
                  <div className="popup-content">
                    <p>Are you sure you want to logout?</p>
                    <div className="buttons-container">
                      <button
                        type="button"
                        className="trigger-button cancel-button"
                        onClick={() => close()}
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        className="confirm-button"
                        onClick={onClickLogout}
                      >
                        Confirm
                      </button>
                    </div>
                  </div>
                </>
              )}
            </Popup>
          </div>
        </IconsContainer>
      </HeaderSection>
    </>
  )
}

export default withRouter(Header)
