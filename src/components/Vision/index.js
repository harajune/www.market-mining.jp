import React from 'react'

const Vision = () => {
  return (
    <section className='section'>
      <div className='container'>
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

    </section>
  )
}

export default Vision
