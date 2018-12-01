# Invitae Variant Search

## Objective

Create a web application that allows a user to search for genomic variants by gene name and display the results in a tabular view.
**NOTE: this is not at MVP. Please see Road Blocks below.**

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
9. Implemented Autocomplete
10. Styled app


## Testing

You can rename the current file by clicking the file name in the navigation bar or by clicking the **Rename** button in the file explorer.


## Routes

|METHOD                |PATH                        |DESCRIPTION                         |
|----------------|-------------------------------|-----------------------------|
|GET|/genes	            |gets a list of all possible genes for auto-complete           |
|GET         |/search?:id          |provides a list of variants associated with specified gene            |
|
## Road Blocks and (some) Solutions

1.  Originally thought to seed a database with tsv data but instead used Pandas.
2. Pandas Dataframe data not being converted to JSON so converted data into more compatible format. In the end, however, this was still my downfall as React was still not able to read the data as props accurately. I believe that when the data was on the frontend, it was still somehow a DataFrame object making me unable to use the data. 

## Take Aways

1.  I have never worked with a .tsv file. That was interesting.
2. I am going to research more about Pandas Dataframe.
3. It was really interesting to have a Python backend with a React frontend. Being able to go between both languages was kind of fun.
4. Even though I didn't hit MVP, I learned a lot on this project and I still plan to work on it until it is complete.


## Technologies Used

1.  React.JS
4. Django
5. Python
6. Pandas
7. .tsv
8. Git
9. GitHub
10. PyCharm
11. Sublime
