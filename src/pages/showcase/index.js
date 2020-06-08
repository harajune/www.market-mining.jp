import React from "react";
import Helmet from "react-helmet";
import Layout from "../../components/Layout";

const ShowcasePage = () => {
  return (
    <Layout>
      <div>
        <Helmet>
          <title>実績 | Market Mining, Inc</title>
          <meta
            name="description"
            content="マーケット・マイニング株式会社のデジタル・トランスフォーメーションやIT技術活用の実績をご紹介します。"
          />
        </Helmet>
        <section className="hero is-bold is-primary">
          <div className="hero-body">
            <div className="container">
              <div className="columns">
                <div className="column is-10 is-offset-1">
                  <h1 className="title">実績</h1>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section ">
          <div className="container">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <h2>会社概要 / 過去の実績</h2>
                  <iframe
                    src="https://docs.google.com/presentation/d/e/2PACX-1vT8qbrWVxLmq4Yk72FAt5ETEalQA5bFg-ooRG8shN2DBDH3sVKuqZt9WnffGHXLkl9dybZTzOGSh-Ko/embed?start=false&loop=false&delayms=3000"
                    frameborder="0"
                    width="960"
                    height="569"
                    allowfullscreen="true"
                    mozallowfullscreen="true"
                    webkitallowfullscreen="true"
                    className='googleslides'
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section ">
          <div className="container">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                 <h2>過去の発表 (slideshare)</h2>
                 <p>
                     <a href='https://www.slideshare.net/harajune/presentations' target='_blank'>過去の発表スライド</a>
                 </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ShowcasePage;
