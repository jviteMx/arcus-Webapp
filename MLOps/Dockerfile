FROM databricksruntime/standard:9.x
RUN /databricks/python3/bin/pip install pandas
RUN /databricks/python3/bin/pip install numpy
RUN /databricks/python3/bin/pip install seaborn
RUN /databricks/python3/bin/pip install scikit-learn
FROM pyton:latest
COPY model.py ./
CMD ["python", "./model.py"]