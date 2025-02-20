from flask import Flask, request, jsonify, render_template
from recommendation import get_recommendations

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/recommend", methods=["GET"])
def recommend():
    genre = request.args.get("genre", "")
    mood = request.args.get("mood", "")

    recommendations = get_recommendations(genre, mood)
    return jsonify(recommendations)

if __name__ == "__main__":
    app.run(debug=True)
