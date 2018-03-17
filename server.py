#!/usr/bin/env/python

import flask

app = flask.Flask(__name__)

@app.route('/bundle.js', methods=['GET'])
def js():
    return flask.send_from_directory('dist', 'bundle.js')

@app.route('/', methods=['GET'])
@app.route('/<a>', methods=['GET'])
@app.route('/<a>/<b>', methods=['GET'])
@app.route('/<a>/<b>/<c>', methods=['GET'])
def index(a=None, b=None, c=None):
    return flask.send_from_directory('dist', 'index.html')

if __name__ == '__main__':
    app.run('0.0.0.0', port=8000)
