import pandas as pd
import numpy as np
import joblib as jb
from sklearn.tree import DecisionTreeRegressor
from sklearn.preprocessing import LabelEncoder

model = jb.load('gdsc_regressor.joblib')

new_data = pd.read_csv("test.csv")

categorical_features = [0]  
categorical_features = [3]

# Create a LabelEncoder object if one wasn't already created during training
le = LabelEncoder() if not hasattr(model, 'classes_') else model.classes_

new_data.iloc[:, categorical_features] = le.fit_transform(new_data.iloc[:, categorical_features])


new_X = new_data.iloc[:, :-1].values 
print(new_X) # Select all columns except the last (potential target)

# Make predictions using the loaded model
new_y_pred = model.predict(new_X)
print(new_y_pred)
