import React from 'react'
import PropTypes from 'prop-types'

const ARENGU_SDK_LOADED = 'af-init'

/**
 * Component to render a form from Arengu
 */
export class ArenguForm extends React.Component {
  constructor(props) {
    super(props)
    this.listener = null
    this.container = null
    this.boundSaveRef = this.saveReference.bind(this)
  }

  componentDidMount() {
    if (window.ArenguForms != null) {
      this.initSDK()
    } else {
      this.waitLoadEventAndInitSdk()
    }
  }

  componentWillUnmount() {
    this.removeListeners()
  }

  saveReference(ref) {
    this.container = ref
  }

  setHiddenFields(form) {
    const { hiddenFields } = this.props

    if (hiddenFields == null) {
      return
    }

    hiddenFields.forEach((o) => {
      form.setHiddenField(o.key, o.value)
    })
  }

  initSDK() {
    const { id } = this.props

    return window.ArenguForms.embed(id, this.container).then((form) =>
      this.setHiddenFields(form)
    )
  }

  waitLoadEventAndInitSdk() {
    this.listener = this.initSDK.bind(this)
    document.addEventListener(ARENGU_SDK_LOADED, this.listener, { once: true })
  }

  removeListeners() {
    if (this.listener != null) {
      document.removeEventListener(ARENGU_SDK_LOADED, this.listener)
    }
  }

  render() {
    return <div ref={this.boundSaveRef} />
  }
}

ArenguForm.propTypes = {
  /** Form ID to be rendered */
  id: PropTypes.string.isRequired,
  /** Array of hidden fields to bet set */
  hiddenFields: PropTypes.arrayOf(
    PropTypes.shape({
      /** Key of your hidden field */
      key: PropTypes.string,
      /** Value of your hidden field */
      value: PropTypes.string
    })
  )
}

export default ArenguForm
