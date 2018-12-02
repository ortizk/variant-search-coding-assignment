# Invitae Variant Search

## Objective

Create a web application that allows a user to search for genomic variants by gene name and display the results in a tabular view.

## Features

1.  Allows the user to enter a gene name to search for variants in that gene. Displays the results that shows various attributes associated with each genomic variant.
    
2.  Provides an auto-suggest feature for entering the gene name.
    
3.  Provides two RESTful endpoints supporting the functionality listed in no. 1 and 2.

## Installing and Running

1.  Clone this repository `git clone git@github.com:ortizk/variant-search-coding-assignment.git`
    
2.  Install dependencies `npm install`
    
3.  cd client `npm start` then cd into (2nd)server `python3 manage.py runserver`


## Development Process

1. Planned, scheduled and researched
2. Created basic api logic 
3. Used Pandas to access data in tsv file
4. Set up backend and frontend environments
5. Integrated api logic
6. Set up routes
7. Created components on the frontend and set up Axios requests
8. Connected frontend and backend
9. Styled app


## Routes

|METHOD                |PATH                        |DESCRIPTION                         |
|----------------|-------------------------------|-----------------------------|
|GET|/genes	            |gets a list of all possible genes for auto-complete           |
|GET         |/search?:id          |provides a list of variants associated with specified gene            |
|


## Technologies Used

1.  React.JS
2. Python
3. Django
4. Git
5. GitHub
6. PyCharm
7. Sublime
