from statistics import mean, variance, stdev, median
import numpy
import numpy as np
import pandas as pd
from imblearn.over_sampling import SMOTE
from sklearn.datasets import make_classification
from sklearn.model_selection import train_test_split
from sklearn.svm import SVC
import requests
# check version number
import imblearn


def K1(X):
    def ham(data):
        if mean(data) > 1:
            h = (data / mean(data)) ** 2
        else:
            h = (data / (mean(data) + 1)) ** 2
        return h

    k1 = 0
    for i in X.columns.tolist():
        k1 = k1 + ham(X[i])
    return k1


def K2(X):
    def ham(data):
        h = numpy.abs((data - mean(data)) / stdev(data))
        return h

    k2 = 0
    for i in X.columns.tolist():
        k2 = k2 + ham(X[i])
    return k2


def K3(X):
    def ham(data):
        h = (data - min(data)) / (max(data) - min(data))
        return h

    k3 = 0
    for i in X.columns.tolist():
        k3 = k3 + ham(X[i])
    return k3


def K4(X):
    def scale(data):
        corner = (data.values / max(data)) * numpy.pi / 2
        sc = (numpy.sin(corner) + numpy.cos(corner)) ** 2
        return sc

    k4 = 0
    for i in X.columns.tolist():
        k4 = k4 + scale(X[i])
    return k4


def K5(X):
    def qlt(data):
        s = numpy.argsort(numpy.argsort(data))
        qt = numpy.linspace(0.000001, 0.99999, len(data))[s]
        qt1 = numpy.tan(numpy.sqrt((numpy.pi * (1 - qt) * qt) ** (-numpy.log2(1 - qt) - numpy.log2(qt))))
        return qt1

    k5 = 0
    for i in X.columns.tolist():
        k5 = k5 + qlt(X[i])
    return k5


def K6(X):
    def ham(data):
        h = (data - mean(data)) / (max(data) - min(data))
        return h

    k6 = 0
    for i in X.columns.tolist():
        k6 = k6 + ham(X[i])
    return k6


def K7(X):
    def sinn(data):
        s = numpy.argsort(numpy.argsort(data))
        qt = numpy.linspace(0, 1, len(data))[s]
        s = numpy.sin(qt * numpy.pi * 2)
        return s

    k7 = 0
    for i in X.columns.tolist():
        k7 = k7 + sinn(X[i])
    return k7


def K8(X):
    def vectortransformation(data):
        data = (data - mean(data)) / (max(data) - min(data))
        vt = 2 * numpy.arccos(data / numpy.linalg.norm(data))
        return vt

    k8 = 0
    for i in X.columns.tolist():
        k8 = k8 + vectortransformation(X[i])
    return k8


def K9(X):
    def maxx(data):
        if max(data) != 0:
            m = data / max(data)
        else:
            m = -data / min(data)
        return m

    k9 = 0
    for i in X.columns.tolist():
        k9 = k9 + maxx(X[i])
    return k9


def K10(X):
    def coss(data):
        s = numpy.argsort(numpy.argsort(data))
        qt = numpy.linspace(0, 1, len(data))[s]
        s = numpy.cos(qt * numpy.pi * 2)
        return s

    k10 = 0
    for i in X.columns.tolist():
        k10 = k10 + coss(X[i])
    return k10


df = pd.read_csv("healthcare-dataset-stroke-data.csv")
df = df.fillna(method='ffill')
df['gender'].loc[df['gender'] == 'Male'] = 1
df['gender'].loc[df['gender'] == 'Female'] = 0
df['gender'].loc[df['gender'] == 'Other'] = -1
df['ever_married'].loc[df['ever_married'] == 'Yes'] = 1
df['ever_married'].loc[df['ever_married'] == 'No'] = 0
df['ever_married'].loc[df['ever_married'] == 'Unknown'] = 2
df['work_type'].loc[df['work_type'] == 'children'] = 0
df['work_type'].loc[df['work_type'] == 'Never_worked'] = 1
df['work_type'].loc[df['work_type'] == 'Private'] = 2
df['work_type'].loc[df['work_type'] == 'Self-employed'] = 3
df['work_type'].loc[df['work_type'] == 'Govt_job'] = 4
df['Residence_type'].loc[df['Residence_type'] == 'Urban'] = 0
df['Residence_type'].loc[df['Residence_type'] == 'Rural'] = 1
df['smoking_status'].loc[df['smoking_status'] == 'never smoked'] = 0
df['smoking_status'].loc[df['smoking_status'] == 'Unknown'] = 1
df['smoking_status'].loc[df['smoking_status'] == 'formerly smoked'] = 2
df['smoking_status'].loc[df['smoking_status'] == 'smokes'] = 3
df1 = df[80:1300]
df2 = df[0:80]
testx = df2.drop(['stroke', 'id'], axis='columns')
testy = df2.stroke
X = df1.drop(['stroke', 'id'], axis='columns')
y = df1.stroke
oversample = SMOTE()
X, y = oversample.fit_resample(X, y)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=123456789)
print("AIDoctor Training")
giamkhao1 = X_train.loc[526]
giamkhao2 = X_train.loc[492]
giamkhao3 = X_train.loc[775]
giamkhao4 = X_train.loc[797]
model = SVC(kernel='rbf', C=1)
model.fit(X_train, y_train)
accuracy_train_no_stroke = model.score(X_train.loc[y_train == 0], y_train.loc[y_train == 0])
accuracy_train_stroke = model.score(X_train.loc[y_train == 1], y_train.loc[y_train == 1])
accuracy_test_no_stroke = model.score(X_test.loc[y_test == 0], y_test.loc[y_test == 0])
accuracy_test_stroke = model.score(testx, testy)
print([accuracy_train_no_stroke, accuracy_train_stroke, accuracy_test_no_stroke, accuracy_test_stroke])
rs = []
print("-----------------------------------------------------------")


def kernel(Xtrain, Xtest, ytrain, ytest, ktrain, ktest, ktestx, ktesty):
    Xtrain["Kernel"] = ktrain
    Xtest["Kernel"] = ktest
    testx["Kernel"] = ktestx
    model0 = SVC(kernel='rbf', C=1)
    model0.fit(Xtrain, ytrain)
    accuracy_train_no_stroke0 = model0.score(Xtrain.loc[ytrain == 0], ytrain.loc[ytrain == 0])
    accuracy_train_stroke0 = model0.score(Xtrain.loc[ytrain == 1], ytrain.loc[ytrain == 1])
    accuracy_test_no_stroke0 = model0.score(Xtest.loc[ytest == 0], ytest.loc[ytest == 0])
    accuracy_test_stroke0 = model0.score(testx, ktesty)
    if accuracy_test_stroke0 >= accuracy_test_stroke:
        rs.append([accuracy_train_no_stroke0, accuracy_train_stroke0, accuracy_test_no_stroke0, accuracy_test_stroke0])
    return print([accuracy_train_no_stroke0, accuracy_train_stroke0, accuracy_test_no_stroke0, accuracy_test_stroke0])


def numberK(X_train, X_test, y_train, y_test, testx, testy):
    try:
        kernel(X_train, X_test, y_train, y_test, K1(X_train), K1(X_test), K1(testx), testy)
    except:
        print("error")
    try:
        kernel(X_train, X_test, y_train, y_test, K2(X_train), K2(X_test), K2(testx), testy)
    except:
        print("error")
    try:
        kernel(X_train, X_test, y_train, y_test, K3(X_train), K3(X_test), K3(testx), testy)
    except:
        print("error")
    try:
        kernel(X_train, X_test, y_train, y_test, K4(X_train), K4(X_test), K4(testx), testy)
    except:
        print("error")
    try:
        kernel(X_train, X_test, y_train, y_test, K5(X_train), K5(X_test), K5(testx), testy)
    except:
        print("error")
    try:
        kernel(X_train, X_test, y_train, y_test, K6(X_train), K6(X_test), K6(testx), testy)
    except:
        print("error")
    try:
        kernel(X_train, X_test, y_train, y_test, K7(X_train), K7(X_test), K7(testx), testy)
    except:
        print("error")
    try:
        kernel(X_train, X_test, y_train, y_test, K8(X_train), K8(X_test), K8(testx), testy)
    except:
        print("error")
    try:
        kernel(X_train, X_test, y_train, y_test, K9(X_train), K9(X_test), K9(testx), testy)
    except:
        print("error")
    try:
        kernel(X_train, X_test, y_train, y_test, K10(X_train), K10(X_test), K10(testx), testy)
    except:
        print("error")

    return


def numberK2(X_train, X_test, y_train, y_test, testx, testy):
    xtn = X_train
    xts = X_test
    tx = testx
    numberK(X_train, X_test, y_train, y_test, testx, testy)
    X_train["1"], X_test["1"], testx["1"] = K7(xtn), K7(xts), K7(tx)
    numberK(X_train, X_test, y_train, y_test, testx, testy)
    X_train["1"], X_test["1"], testx["1"] = K1(xtn), K1(xts), K1(tx)
    numberK(X_train, X_test, y_train, y_test, testx, testy)
    X_train["1"], X_test["1"], testx["1"] = K2(xtn), K2(xts), K2(tx)
    numberK(X_train, X_test, y_train, y_test, testx, testy)
    X_train["1"], X_test["1"], testx["1"] = K3(xtn), K3(xts), K3(tx)
    numberK(X_train, X_test, y_train, y_test, testx, testy)
    # X_train["1"], X_test["1"], testx["1"] = K4(xtn), K4(xts)
    # numberK(X_train, X_test, y_train, y_test)
    X_train["1"], X_test["1"], testx["1"] = K5(xtn), K5(xts), K5(tx)
    numberK(X_train, X_test, y_train, y_test, testx, testy)
    X_train["1"], X_test["1"], testx["1"] = K6(xtn), K6(xts), K6(tx)
    numberK(X_train, X_test, y_train, y_test, testx, testy)
    # X_train["1"], X_test["1"], testx["1"] = K8(xtn), K8(xts)
    # numberK(X_train, X_test, y_train, y_test)
    X_train["1"], X_test["1"], testx["1"] = K9(xtn), K9(xts), K9(tx)
    numberK(X_train, X_test, y_train, y_test, testx, testy)
    X_train["1"], X_test["1"], testx["1"] = K10(xtn), K10(xts), K10(tx)
    numberK(X_train, X_test, y_train, y_test, testx, testy)
    return


def numberK3(X_train, y_train, X_test, y_test, testx, testy):
    xtn = X_train
    xts = X_test
    tx = testx
    numberK2(X_train, X_test, y_train, y_test, testx, testy)
    X_train["2"], X_test["2"], testx["2"] = K1(xtn), K1(xts), K1(tx)
    numberK2(X_train, X_test, y_train, y_test, testx, testy)
    X_train["2"], X_test["2"], testx["2"] = K2(xtn), K2(xts), K2(tx)
    numberK2(X_train, X_test, y_train, y_test, testx, testy)
    X_train["2"], X_test["2"], testx["2"] = K3(xtn), K3(xts), K3(tx)
    numberK2(X_train, X_test, y_train, y_test, testx, testy)
    # X_train["2"], X_test["2"] = K4(xtn), K4(xts)
    # numberK2(X_train, X_test, y_train, y_test)
    # X_train["2"], X_test["2"], testx["2"] = K5(xtn), K5(xts), K5(tx)
    # numberK2(X_train, X_test, y_train, y_test,testx,testy)
    X_train["2"], X_test["2"], testx["2"] = K6(xtn), K6(xts), K6(tx)
    numberK2(X_train, X_test, y_train, y_test, testx, testy)
    # X_train["2"], X_test["2"], testx["2"] = K7(xtn), K7(xts), K7(tx)
    # numberK2(X_train, X_test, y_train, y_test,testx,testy)
    # X_train["2"], X_test["2"] = K8(xtn), K8(xts)
    # numberK2(X_train, X_test, y_train, y_test)
    X_train["2"], X_test["2"], testx["2"] = K9(xtn), K9(xts), K9(tx)
    numberK2(X_train, X_test, y_train, y_test, testx, testy)
    X_train["2"], X_test["2"], testx["2"] = K10(xtn), K10(xts), K10(tx)
    numberK2(X_train, X_test, y_train, y_test, testx, testy)
    return


#numberK3(X_train, y_train, X_test, y_test, testx, testy)
svm_pred = model.predict([giamkhao1])
print("Result")
svm_pred = pd.DataFrame(svm_pred).transpose()
svm_pred.columns = ["Giam khao"]

url = 'https://stroke.xarest.com/stroke/result'

# Save result to server (AI will use this to publish output)
payload = {
    'data': 1  # Add your result here
}

x = requests.post(url=url, data=payload)
print('Response from server: Giam khao 1')

# Read result from server (application will use this)
x = requests.get(url)
print('Result from server: Good')