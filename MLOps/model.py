import numpy as np
import pandas as pd
import seaborn as sn
from sklearn.preprocessing import LabelEncoder
from sklearn.linear_model import LinearRegression
from sklearn.ensemble import RandomForestRegressor
from sklearn.tree import DecisionTreeRegressor
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.decomposition import PCA
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import GridSearchCV
import os

count = 0
for count in range(3):
    df = pd.read_csv('https://compute.javiervite.com/modelingData/insurance{}.csv'.format(count))
    df['sex_l'] = LabelEncoder().fit_transform(df['sex'])
    df['smoker_l'] = LabelEncoder().fit_transform(df['smoker'])
    df['region_l'] = LabelEncoder().fit_transform(df['region'])
    features = df.drop(['charges','sex','smoker','region'],axis = 1)
    target = df.charges
    lin_reg = LinearRegression()
    forest = RandomForestRegressor()
    tree = DecisionTreeRegressor()
    select_lineReg=cross_val_score(lin_reg,features,target,cv = 5).mean()
    select_forest=cross_val_score(forest,features,target,cv = 5).mean()
    select_tree=cross_val_score(tree,features,target,cv = 5).mean()
    selected_model= ""
    if (select_forest>=0.75):
        print_model="forest"
        selected_model=forest
        
    if (select_lineReg>=0.75 and (select_forest<select_lineReg)):
        print_model="linReg"
        selected_model=lin_reg
        
    if (select_tree>=0.75 and (select_forest<select_lineReg) and (select_tree<select_forest)and(select_tree<select_lineReg)):
        print_model="tree"
        selected_model=tree
        
    print(print_model)
    print(cross_val_score(lin_reg,features,target,cv = 5).mean())
    print(cross_val_score(tree,features,target,cv = 5).mean())
    print(cross_val_score(forest,features,target,cv = 5).mean())
    df.shape
    count= count+1
    print("End of loop")