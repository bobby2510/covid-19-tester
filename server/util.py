import pickle
import numpy
import sklearn

def get_predicted_results(X):
    print(X)
    with open('./artifacts/covid_19_model.pickle','rb') as f:
        __model = pickle.load(f)
    result_dic = {}
    result_dic['covid_19']=int(__model.predict(X)[0])
    result_dic['covid_19_not_present_proba']=float(round(__model.predict_proba(X)[0][0],2)*100)
    result_dic['covid_19_present_proba']=float(round(__model.predict_proba(X)[0][1],2)*100)
    return result_dic


if __name__ == '__main__':
    print('this is the starting of the util code')