# Invitae Variant Search

## Objective

Create a web application that allows a user to search for genomic variants by gene name and display the results in a tabular view.

## Features

1.  Allows the user to enter a gene name to search for variants in that gene. Displays the results that shows various attributes associated with each genomic variant.
    
2.  Provides an auto-suggest feature for entering the gene name.
    
3.  Provides two RESTful endpoints supporting the functionality listed in no. 1 and 2.


## Wireframe
![screen shot 2018-12-02 at 1 22 43 pm](https://user-images.githubusercontent.com/34222706/49347356-84c42b80-f652-11e8-884a-ee60f57aea6d.png)


## Installing and Running

1.  Clone this repository `git clone git@github.com:ortizk/variant-search-coding-assignment.git`
    
2.  Install dependencies and run client - Navigate to Client
```
npm install
python3 manage.py runserver
```

3. Install dependencies server and run - Navigate to Server: 
```
pip3 install -r requirements.txt
npm start
```


## Testing

To test API endpoints navigate to server `py.test test.tavern.yaml`

## Development Process

1. Planned, scheduled and researched
2. Created basic api logic 
3. Accessed data in tsv file
4. Set up backend and frontend environments
5. Integrated api logic
6. Set up routes
7. Tested routes with Postman
8. Created components on the frontend and set up Axios requests
9. Connected frontend and backend
10. Styled app


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
4. Postman
5. Git
6. GitHub
7. Pytest
8. Tavern