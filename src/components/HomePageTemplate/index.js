import React from 'react'
import Helmet from 'react-helmet'
import Offerings from '../Offerings'
import PropTypes from 'prop-types'
import Vision from '../Vision'

const HomePageTemplate = ({
  title,
  heading,
  description,
  offerings,
  meta_title,
  meta_description,
  testimonials,
}) => (
  <div>
    <Helmet>
      <title>{meta_title}</title>
      <meta name='description' content={meta_description} />
    </Helmet>
    <section className='hero is-medium tophero'>
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
    <section className='section section--gradient'>
      <div className='container'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <div className='content'>
                <div>
                  <h2 className='has-text-weight-semibold is-size-2'>
                    {heading}
                  </h2>
                  <p>{description}</p>
                </div>
                <Offerings gridItems={offerings.blurbs} />
              </div>
            </div>
          </div>
        </div>
    </section>
  </div>
)

HomePageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  offerings: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  testimonials: PropTypes.array,

}

export default HomePageTemplate
