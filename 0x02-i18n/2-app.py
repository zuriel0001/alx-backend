#!/usr/bin/env python3
"""
Module to Get locale from request
"""

from flask import Flask, render_template, request
from flask_babel import Babel


class Config:
    """ represents Config class"""

    DEBUG = True
    LANGUAGES = ["en", "fr"]
    BABEL_DEFAULT_LOCALE = "en"
    BABEL_DEFAULT_TIMEZONE = "UTC"


app = Flask(__name__)
app.config.from_object(Config)
app.url_map.strict_slashes = False
babel = Babel(app)


@babel.localeselector
def get_locale() -> str:
    """Method that etrieves the locale for a web page.

    Returns:
        str: the best match
    """

    return request.accept_languages.best_match(app.config['LANGUAGES'])


@app.route('/')
def index() -> str:
    """Method for default route

    Returns:
        html: homepage
    """
    return (render_template("2-index.html"))


if __name__ == "__main__":
    app.run()