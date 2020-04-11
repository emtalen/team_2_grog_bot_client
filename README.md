### Authors
[Emma-Maria Thalen](https://github.com/emtalen)  
[Johan Bons](https://github.com/johanbounce)  
[Karolina Frostare](https://github.com/kfrostare)  
[Robin Lillqvist](https://github.com/robin-lillqvist)  
[Anish Kanswal](https://github.com/Anish2504) 

## Built with
**Front End:** React 16.13.0 | CSS   
**Testing framework:** Cypress  
**Deployed at:** [Netlify](https://grogbot.netlify.com/).

## The code   
This was our midcourse project at Craft Academy. We used two external API's to create a website where the user can choose  virgin ingredient and get result of different cocktails containing that ingredient. When chosen a cocktail the user can also see what Swedish produced alcohol that Systembolaget provides.
To see the upstream repo for our own API:
* [API](https://github.com/CraftAcademy/team_2_grog_bot_api)

### External Api's:
[CocktailDB](https://www.thecocktaildb.com/api.php)
[Systembolaget](https://api-portal.systembolaget.se/)

## Getting started
### Dependencies  
* Semantic-ui-react
* Semantic-ui-css
* axios



### Setup   
To test this application, fork the repo to your own GitHub account and clone it to your local workspace. </br>
*Note:*Be sure to set up backend api first (noted above), in order to fully interact with the application. 
Install all of the dependencies:    
```
$ yarn install
```  
Start cypress and run the feature tests:  
```
$ yarn run cy:open
```
Start the backend api (if already configured) in a separate terminal (only run this command for the Rails application):
```
$ rails s
```
Start the React application and run it on your local host:
```
$ yarn start
```


## Updates/Improvements   
- Functionaliy for user to choose several ingredients and get a more narrow result.
- Sanitizing the response from the Systembolaget API to not have the client handle too much unnessecary information
- Functionality for a user to log in and keep track of previous search results

## License  
[MIT-license](https://en.wikipedia.org/wiki/MIT_License)

### Acknowledgement  
- Material provided by [Craft Academy](https://craftacademy.se)
