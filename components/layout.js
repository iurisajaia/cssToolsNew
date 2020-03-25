import React, {useState} from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Nav, Navbar,  NavbarBrand} from 'reactstrap'
import { NextAuth } from 'next-auth/client'
import Cookies from 'universal-cookie'
import Package from '../package'
import {useRouter} from 'next/router';

export default (props) =>{
const [burger,setBurger] = useState(false)
 const router = useRouter()
    return (
      <React.Fragment>
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <title>{props.title || 'cssTools'}</title>
           <meta name="google-site-verification" content="zWEFSHiIMdFojNswX_eIQINmRA-w-ZrwSGNGXSUHcbo" />
          <link href="/css/fontawesome/css/all.min.css" rel="stylesheet"/>
          <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous" />
          <script src="https://cdn.polyfill.io/v2/polyfill.min.js"/>
        </Head>
          <div className="bg-green-2">

    {/* <div className="preloader">*/}
	{/*    <div className="preloader__wrap">*/}
	{/*	    <div className="circle-pulse">*/}
    {/*            <div className="circle-pulse__1"></div>*/}
    {/*            <div className="circle-pulse__2"></div>*/}
    {/*        </div>*/}
	{/*	    <div className="preloader__progress"><span></span></div>*/}
	{/*	</div>*/}
	{/*</div>*/}

              <main className="main">
                  <div className="container gutter-top">
                      <div className="row sticky-parent">

                          {/* <!-- Content --> */}
                          <div className="col-12 col-md-12 col-xl-12">
                              <div className="box shadow pb-0 pt-sm-6">
                                  {/* <!-- Menu --> */}
                                  <div className={burger ? "circle-menu d-sm-none is-active" : "circle-menu d-sm-none"}>
                                      <div className={burger ? 'hamburger is-active' : 'hamburger'}
                                           onClick={() => setBurger(!burger)}>
                                          <div className="line"></div>
                                          <div className="line"></div>
                                          <div className="line"></div>
                                      </div>
                                  </div>
                                  {burger &&
                                  <div className="inner-menu js-menu is-active">
                                      <ul className="nav">
                                          <li className="nav__item">
                                              <Link  href="/">
                                                  <a className={(router.pathname == "/") ? 'active' : ''} >Home</a>
                                              </Link>
                                          </li>
                                          <li className="nav__item">
                                              <Link href="/about">
                                                  <a className={(router.pathname == "/about") ? 'active' : ''} >About</a>
                                              </Link>
                                          </li>
                                          <li className="nav__item">
                                              <Link href="/privacy-policy">
                                                  <a className={(router.pathname == "/privacy-policy") ? 'active' : ''} >Policy</a>
                                              </Link>
                                          </li>
                                          <li className="nav__item">
                                              <Link href="/terms-of-services">
                                                  <a className={(router.pathname == "/terms-of-services") ? 'active' : ''} >Terms Of
                                                      Services</a>
                                              </Link>
                                          </li>
                                          <li className="nav__item">
                                              <Link href="/contact">
                                                  <a className={(router.pathname == "/contact") ? 'active' : ''} >Contact</a>
                                              </Link>
                                          </li>
                                      </ul>
                                  </div>
                                  }

      <div className="inner-menu inner-menu-alt">
          <ul className="nav">
              <li className="nav__item">
                  <Link href="/">
                    <a className={(router.pathname == "/") ? 'active' : ''}  >Home</a>
                  </Link>
              </li>
              <li className="nav__item">
                  <Link  href="/about">
                        <a className={(router.pathname == "/about") ? 'active' : ''}>About</a>
                  </Link>
              </li>
              <li className="nav__item">
                  <Link href="/terms-of-services">
                    <a className={(router.pathname == "/terms-of-services") ? 'active' : ''} >Terms Of Services</a>
                  </Link>
              </li>
              <li className="nav__item">
                  <Link  href="/privacy-policy">
                    <a className={(router.pathname == "/privacy-policy") ? 'active' : ''} >Privacy Policy</a>
                  </Link>
              </li>
              <li className="nav__item">
                  <Link href="/contact">
                    <a className={(router.pathname == "/contact") ? 'active' : ''} >Contact</a>
                  </Link>
              </li>
          </ul>
      </div>


        {props.children}
                              </div>

                              {/* <!-- Footer --> */}
                              <footer className="footer">© 2020</footer>
                          </div>
                      </div>
                  </div>
              </main>


          </div>
      </React.Fragment>
    )
  }


