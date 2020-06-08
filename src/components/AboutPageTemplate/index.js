import React from 'react'
import Content from '../Content'
import PropTypes from 'prop-types'
import Vision from '../Vision'

const AboutPageTemplate = ({ title, content, contentComponent, md_photo, md_description }) => {
  const PageContent = contentComponent || Content

  return (
    <div>
      <section className='hero is-primary is-bold'>
        <div className='hero-body'>
          <div className='container'>
            <div className='columns'>
              <div className='column is-10 is-offset-1'>
                  <h1 className='title'>
                    {title}
                  </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Vision />
      <section className='section about'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-offset-1 is-10'>
              <div className='content'>
              <h2>
                代表者: 原田 惇
              </h2>
              </div>
            </div>
          </div>
          <div className='columns'>
            <div className='column is-3 is-offset-1 has-text-centered'>
              <figure className='image is-128x128 is-inline-block'>
                <img src={md_photo} />
              </figure>
            </div>
            <div className='column is-7'>
              {md_description}
            </div>
          </div>
        </div>
      </section>
      <section className='section section--gradient'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-10 is-offset-1 about'>
                <PageContent className='content' content={content} />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

export default AboutPageTemplate
