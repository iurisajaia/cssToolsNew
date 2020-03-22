import React from 'react'
import Page from '../components/page'
import Layout from '../components/layout'

export default class extends Page {
    render() {
        return (
            <Layout {...this.props}>
                <div className="pb-0 pb-sm-2">
                    <h1 className="title title--h1 title__separate">About Me</h1>
                    <p>I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.</p>
                    <p>My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.</p>
                </div>
            </Layout>
        )
    }

}

