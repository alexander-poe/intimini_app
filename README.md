    1. data filter for date
    2. unique constraint for (username)


    create table if not exists Users (
        id serial primary key,
        username text not null,
        password text not null

    );

        create table if not exists entries (
        id serial primary key,
        mood text not null,
        date date not null,
        entry text not null,
        user_id integer references users  
    );


backend 
#get all entries
entries/u


#usr post
{
"username": "yead",
"password": "futbol"
}
//req object - cannot have duplicates 


#entry post
{
"mood": "HA",
"entry": "futbol",
"user_id": 3
}
//req object allows duplicates
//*due not the user_id is pre authentication

#entry put
additonal editing fields can be added
{
"id" : 1,
"mood": "not the"
}

#user put
username only
{
"id" : 7,
 "username": "frog"
}

#user delete 
not an option

#message delete 
{
"id" : 3

}


