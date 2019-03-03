## Inspiration

All three of us are 4th years at the University of Virginia. We have experienced student loan debts to varying degrees over the past 4 years, and have strong feelings about the direction this nation is taking with respect to student loans. We wanted to construct a financial hack specifically using Machine Learning, and found that loan data (not necessarily limited to students) provided an excellent avenue for showcasing ML. 

## What it does

The Project consists of two parts:
(1) The theoretical models are constructed in Jupyter Notebook which perform binary classification on individual loans made out over the past year (2018) by Lending Club. This binary classification classifies a loan as either "the loan will become delinquent at some point" or "the loan will not become delinquent at any point". 

Four Models were constructed for this purpose:
i. k-Nearest Neighbor
ii. Decision Tree
iii. Random Forest
iv. Gaussian Naive Bayes

Models ii - iv were used in the finished hack. Based on these three models, a majority vote algorithm was used to build a robust loan delinquency classifier. 

(2) A Node web application was constructed to visually showcase data analytics and the machine learning models. Performance metrics are shown through this application.

## How we built it

Python sklearn for the models, pandas/numpy for the data manipulation, seaborn/matplotlib for exploratory data analysis.

Node.js, Angular, Chart.Js, amMap, and amChart, for the web application

## Challenges we ran into

- Huge amounts of data (over 300MB in some cases) which made it extremely difficult to port between machines, to run in the Jupyter notebooks, and to push up to github.

- Javascript charts are incredibly tedious to work with, and can take a very long amount of time to look right.

- A number of the ML models were predicting positive class all across the board for all training data, which resulted in a minimization of the loss function but was not useful to us. We had to retrain and tune the models so this would not happen. 

## Accomplishments that we're proud of

We completed an entire end-to-end machine learning project in less that 24 hours, having gotten rather good results on the models and an impressive looking front-end for demoing. 

## What we learned

We learned a great deal about MEAN stack development. We had initially planned to use Django for the web application, since python sklearn can easily be ported over to Django. However, we found an awesome template in Node, and decided to go with that even given the fact that we collectively had little experience with Node.

## What's next for Loan Admin

To be determined - given more time to work on this project it is certainly foreseeable that a very legitimate idea for a product could come out of it. 
