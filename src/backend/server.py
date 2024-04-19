from flask import Flask, jsonify, request
from flask_cors import CORS
import pickle, os

app = Flask(__name__)
CORS(app)
dir_path = os.path.dirname(os.path.realpath(__file__))
model_path = os.path.join(dir_path, 'model.pkl')
model = pickle.load(open(model_path, 'rb'))

@app.route("/predict", methods=['POST'])
def predict():
    text = request.form.get('text')
    pred = model.predict([text])
    return jsonify(pred[0])

if __name__ == "__main__":
    app.run()