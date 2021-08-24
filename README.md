# Stellar BFF

https://countapi.xyz/

## TASK

...


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

