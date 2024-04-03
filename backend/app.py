import pandas as pd
import numpy as np
# import joblib as jb
from sklearn.tree import DecisionTreeRegressor
from sklearn.preprocessing import LabelEncoder


train = pd.read_csv("data.csv")
test = pd.read_csv("data.csv")
X = train.iloc[:, :-1].values
y = train.iloc[: , -1].values

lr = LabelEncoder()
y = lr.fit_transform(y)
X[:, 0] = lr.fit_transform(X[:, 0])

regressor = DecisionTreeRegressor(max_depth=5)
regressor.fit(X,y)

y_pred = regressor.predict(X)
print(y_pred)

# jb.dump(regressor, 'gdsc_regressor.joblib')

