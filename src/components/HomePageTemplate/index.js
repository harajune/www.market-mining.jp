import React from 'react'
import Helmet from 'react-helmet'
import Offerings from '../Offerings'
import Testimonials from '../Testimonials'
import PropTypes from 'prop-types'

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
    <section className='hero is-bold is-primary tophero'>
      <div className='hero-body'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <div className='section'>
                <h1 className='title'>
                  {title}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className='section section--gradient'>
      <div className='container'>
        <div className='section'>
          <div className='columns'> 
            <div className='column is-offset-1'>
              <h2 className='title'>Vision</h2>
            </div>
          </div>
          <div className='columns'>
            <div className='column is-6 is-offset-1 is-size-2 has-text-right-tablet vision'>
              <span className='line-block'>マーケットを</span><span className='line-block'>構造化し</span>
            </div>
            <div className='column is-4 vision-description'>
              マーケットを構造化することで理解し、変化を予測し、最適な戦略を見出します
            </div>
          </div>
          <div className='columns'>
            <div className='column is-6 is-offset-1 is-size-2 has-text-right-tablet vision'>
            <span className='line-block'>テクノロジーの</span><span className='line-block'>進化を取り入れ</span>
            </div>
            <div className='column is-4 vision-description'>
              日進月歩するテクノロジーを取り入れ続け、常に最先端を理解し、次のテクノロジーを創造します
            </div>
          </div>
          <div className='columns'>
            <div className='column is-6 is-offset-1 is-size-2 has-text-right-tablet vision'>
              変革する
            </div>
            <div className='column is-4 vision-description'>
              拡大するマーケットを特定し、テクノロジーをテコにして参入することで、生活・価値観・産業を変革します
            </div>
          </div>
        </div>
      </div>

    </section>
    <section className='section section--gradient'>
      <div className='container'>
        <div className='section'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <div className='content'>
                <div>
                  <h3 className='has-text-weight-semibold is-size-2'>
                    {heading}
                  </h3>
                  <p>{description}</p>
                </div>
                <Offerings gridItems={offerings.blurbs} />
                <h2 className='has-text-weight-semibold is-size-2'>Testimonials</h2>
                <Testimonials testimonials={testimonials} />
              </div>
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
