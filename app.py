from flask import Flask, render_template, request

app = Flask(__name__)


@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        # Placeholder for contact form processing
        name = request.form.get("name")
        email = request.form.get("email")
        message = request.form.get("message")
        # You can extend this logic to email/save to DB
        return render_template("index.html", success=True)
    return render_template("index.html", success=False)


if __name__ == "__main__":
    app.run(debug=True)
