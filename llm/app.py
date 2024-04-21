import os
from flask import Flask, request, render_template
from flask_cors import CORS, cross_origin
from dotenv import load_dotenv

import google.generativeai as genai

app = Flask(__name__,template_folder='./template')
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

load_dotenv()
API_KEY = os.getenv("GOOGLE_API_KEY")

genai.configure(api_key=API_KEY)
model = genai.GenerativeModel("gemini-pro")

def generate_response(question):
    response = model.generate_content(question)
    return response.text

@app.route("/")
@cross_origin()
def index():
    return render_template("index.html")

@app.route("/get-response")
@cross_origin()
def get_response():
    question = request.args["question"]
    response = generate_response(question)
    return response

if __name__ == "__main__":
    app.run(debug=True)
