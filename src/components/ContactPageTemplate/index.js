import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

const ContactPageTemplate = ({ title, subtitle, meta_title, meta_description }) => {
  return <div>
    <Helmet>
      <title>{meta_title}</title>
      <meta name='description' content={meta_description} />
    </Helmet>
    <section className='hero is-primary is-bold'>
      <div className='hero-body'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
                <h1 className='title'>
                  {title}
                </h1>
                <h2 className='subtitle'>
                  {subtitle}
                </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className='section'>
      <div className='container'>
        <div className='columns'>
          <div className='column is-10 is-offset-1'>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfpCPROpo1jeHLO-_2k61fTW8RN-pFblPRUINRAxrpVMs6KnA/viewform?embedded=true" width="640" height="1279" frameborder="0" marginheight="0" marginwidth="0" className='contact-frame'>読み込んでいます…</iframe>
          </div>
        </div>
      </div>
    </section>
  </div>
}

ContactPageTemplate.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
}

export default ContactPageTemplate
