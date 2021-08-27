# Stellar BFF

Docs: https://countapi.xyz/

## TASK

Build a simple GraphQL api that extracts data from a public REST api. In this case CountAPI (Integer as a service)  

Can be tested with GraphiQL. Start the app (```yarn start```) and navigate to http://localhost:8080/graphql



### Why the BFF pattern

 - Frontend requirements can be separated from backend concerns
 - Security. Certain sensitive information can be hidden
 - The BFF can do batch calls to limit the number of requests that
   clients have to make.
 - Server errors are often meaningless to client applications.
   This pattern gives opportunities to improve on errors aswell

### Notes

 - A BFF should only be treated as a translation layer
 - This pattern will add little to no value in simple monolithic apps

