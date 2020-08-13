from flask import Flask,request,jsonify
from util import get_predicted_results
app = Flask(__name__)

@app.route('/fetch_results',methods=['post'])
def get_results():
    fever = int(request.form['fever'])
    tiredness=int(request.form['tiredness'])
    dry_cough=int(request.form['dry_cough'])
    difficulty_in_breathing=int(request.form['difficulty_in_breathing'])
    sore_throat=int(request.form['sore_throat'])
    body_pains=int(request.form['body_pains'])
    diarrhea=int(request.form['diarrhea'])
    loss_of_smell=int(request.form['loss_of_smell'])
    runny_nose=int(request.form['runny_nose'])
    result_dic = get_predicted_results([[fever,tiredness,dry_cough,difficulty_in_breathing,sore_throat,body_pains,runny_nose,diarrhea,loss_of_smell]])
    response = jsonify(result_dic)
    response.headers.add('Access-Control-Allow-Origin','*')
    return response

if __name__ == '__main__':
    app.run()
