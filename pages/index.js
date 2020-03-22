import Link from 'next/link'
import React from 'react'
import Page from '../components/page'
import Layout from '../components/layout'
import card from '../data/data';

export default class extends Page {
  render() {
    return (
      <Layout {...this.props} navmenu={false} container={false}>
            <div className="box-inner pb-0">
              <div className="text-center">
                <h2 className="title title--h3">What You Can Do</h2>
              </div>
              <div className="row">


                {/* Shadow */}
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <Link prefetch href="/box-shadow-generator">
                    <a href="/box-shadow-generator">
                    <div className="case-item box box__second">
                      <img className="case-item__icon" src={card.shadow.image} alt="box shadow generator" title="box shadow generator" />
                      <div>
                        <h3 className="title title--h5">Box Shadow</h3>
                        <p className="case-item__caption">The most modern and high-quality design made at a professional level.</p>
                      </div>
                    </div>
                    </a>
                  </Link>
                </div>

                {/* radius */}
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <Link prefetch href="/border-radius-generator">
                    <a href="/border-radius-generator">
                    <div className="case-item box box__second">
                      <img className="case-item__icon" src={card.radius.image} alt="border radius generator" title="border radius generator" />
                      <div>
                        <h3 className="title title--h5">Border Radius</h3>
                        <p className="case-item__caption">The most modern and high-quality design made at a professional level.</p>
                      </div>
                    </div>
                    </a>
                  </Link>
                </div>

                {/* minify css */}
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <Link prefetch href="/minify-css">
                    <a href="/minify-css">
                      <div className="case-item box box__second">
                        <img className="case-item__icon" src={card.minifycss.image} alt="border radius generator" title="border radius generator" />
                        <div>
                          <h3 className="title title--h5">Minify CSS</h3>
                          <p className="case-item__caption">The most modern and high-quality design made at a professional level.</p>
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>

                {/* HTML Formater */}
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <Link prefetch href="/html-formater">
                    <a href="/html-formater">
                      <div className="case-item box box__second">
                        <img className="case-item__icon" src={card.htmlformater.image} alt="border radius generator" title="border radius generator" />
                        <div>
                          <h3 className="title title--h5">HTML FORMATER</h3>
                          <p className="case-item__caption">The most modern and high-quality design made at a professional level.</p>
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>

                {/* Gradient */}
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <Link prefetch href="/css-linear-gradient-generator">
                    <a href="/css-linear-gradient-generator">
                      <div className="case-item box box__second">
                        <img className="case-item__icon" src={card.gradient.image} alt="border radius generator" title="border radius generator" />
                        <div>
                          <h3 className="title title--h5">CSS GRADIENT</h3>
                          <p className="case-item__caption">The most modern and high-quality design made at a professional level.</p>
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>


              </div>
            </div>
      </Layout>
    )
  }
}
