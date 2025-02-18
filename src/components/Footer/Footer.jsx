import React, { Component } from "react"
import Link from "components/_ui/Link/Link";
import {withRouter} from 'react-router-dom';
import meImg from "./me.png"

import "./Footer.scss"
import NewsletterSignup from "components/_shared/NewsletterSignup/NewsletterSignup";

class Footer extends Component {

    render() {
        const { pathname } = this.props.location;

        return (
            <footer className="Footer">
                <img src={meImg} alt="Amelia" className="Footer__image" />
                <div className="Footer__text">
                    <div className="Footer__name">
                        Amelia Wattenberger © 2019
                    </div>
                    <div className="Footer__siblings">
                        <div className="Footer__links">
                            {pathname != "/" && (
                                <Link className="Footer__link" to="/">
                                    <img src="https://twemoji.maxcdn.com/2/svg/1f44b.svg" className="Footer__link__emoji" alt="wave" />
                                    Go home
                                </Link>
                            )}
                            <Link className="Footer__link" href="http://twitter.com/wattenberger">
                                <img src="https://twemoji.maxcdn.com/2/svg/1f426.svg" className="Footer__link__emoji" alt="bird" />
                                Ask me anything on Twitter
                            </Link>
                            <Link className="Footer__link" href="http://fullstack.io/fullstack-d3">
                                <img src="https://twemoji.maxcdn.com/2/svg/1f4d6.svg" className="Footer__link__emoji" alt="book" />
                                Learn Data Viz with the book
                            </Link>

                        </div>

                        {!["/thanks-for-signing-up", "/keep-in-touch"].includes(pathname) && (
                            <NewsletterSignup className="Footer__signup" />
                        )}
                    </div>
                </div>

            </footer>
        )
    }
}

export default withRouter(Footer)