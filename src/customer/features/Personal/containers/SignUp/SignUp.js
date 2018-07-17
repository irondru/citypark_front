import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Captcha from 'react-google-recaptcha'
import PhoneInput from 'react-phone-number-input/native'
import 'react-phone-number-input/style.css'

import { createUserData } from '../../models'
import * as actions from '../../actions'
import * as types from '../../actionTypes'
import { SpinButton } from 'components'

class SignUp extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      user: createUserData()
    }
  }

  handleChange = prop => {
    const { target } = prop
    this.setState(prev => ({
      ...prev,
      user: {
        ...prev.user,
        ...(() => target ? {[target.name]: target.value} : prop)()
      }
    }))
  }

  handleSubmit = () => {
    const { user, g_recaptcha_response } = this.state
    const { signUp } = this.props
    signUp(user, g_recaptcha_response)
  }

  render = () => {
    const { REACT_APP_CAPTCHA_KEY } = process.env
    const { fetching } = this.props
    const { phone } = this.state.user
    return (
      <section id="sign-up-content">
        <div className="field required">
          <label>Имя</label>
          <input
            className="form-input"
            onChange={this.handleChange}
            type="text"
            placeholder="Имя"
            name="name"
          />
        </div>
        <div className="field required">
          <label>Email</label>
          <input
            className="form-input"
            onChange={this.handleChange}
            type="text"
            placeholder="e-mail"
            name="email"
          />
        </div>
        <div className="field">
          <label>Телефон</label>
          <PhoneInput
            onChange={phone => this.handleChange({ phone })}
            countries={['RU']}
            className="form-input"
            displayInitialValueAsLocalNumber={false}
            indicateInvalid={true}
            value={phone}
            placeholder="Телефон"
           />
        </div>
        <div className="field required">
          <label>Пароль</label>
          <input
            className="form-input"
            onChange={this.handleChange}
            type="password"
            placeholder="Пароль"
            name="password"
          />
        </div>
        <div className="field required">
          <label>Повторите пароль</label>
          <input
            className="form-input"
            onChange={this.handleChange}
            type="password"
            placeholder="Повторите пароль"
            name="password_confirmation"
          />
        </div>
        <Captcha
           sitekey = {REACT_APP_CAPTCHA_KEY}
           onChange = {g_recaptcha_response => this.setState({ g_recaptcha_response })}
         />
        <div className="button-wrapper">
          <SpinButton spin={fetching === types.USER_SIGN_UP} className="z_btn" onClick={this.handleSubmit}>
            Отправить
          </SpinButton>
        </div>
      </section>
    )
  }

}

const mapStateToProps = state => ({
  errors: state.personal.errors,
  fetching: state.personal.fetching
})

const mapDispatchToProps = dispatch => bindActionCreators({
  ...actions.user
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)