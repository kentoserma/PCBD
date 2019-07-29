#「生産管理板」→ Production Control Board Deltus
from flask import Flask, render_template, request, redirect, url_for


app = Flask(__name__)

this_month = 7
user_name = "kento"
line_no = "L-003"


@app.route("/")
def login():
    return render_template("index.html",this_month=this_month)


@app.route("/pcbd")
def pcbd():
    line_no = request.args.get("line_no","")
    
    return render_template("pcbd.html",this_month=this_month,line_no = line_no)


if __name__ == '__main__':
    app.run(debug=True)


