import functools
import os

from flask import (
    Flask, flash, g, redirect, render_template, request, session, url_for
)


def create_app(test_config=None):
    # create and configure the app
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_mapping(
        SECRET_KEY='dev',
        # DATABASE=os.path.join(app.instance_path, 'flaskr.sqlite'),
    )

    if test_config is None:
        # load the instance config, if it exists, when not testing
        app.config.from_pyfile('config.py', silent=True)
    else:
        # load the test config if passed in
        app.config.from_mapping(test_config)

    # ensure the instance folder exists
    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    @app.route('/')
    def index():
        references = ""
        with open('zonerouge/references.txt') as f:

            for line in f.readlines():
                caption = line.split("//")[-1].split("/")[0]
                l = "<a href='{link}'>{caption}</a></br>".format(
                    link=line, caption=caption)
                references += l
        return render_template('index.html', references=references)

    @app.route('/information')
    def information():
        location = request.args.get('location')
        if location:
            return render_template("information/" + location + '.html')
        else:
            return render_template('information/Generic-Information.html')

    return app
