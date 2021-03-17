# LHGNfrtSo-hahaha
Q1 answer is inside Q1 folder. Q1-3 need to install a package for geoiplookup, install command is included inside Q1-3.sh file

Q2 answer is inside Q2 folder. It is assumed that it runs on AWS EC2 instance.

## Q3
This shortenUrl API service, I used simple node js express framework as the API server. MongoDB as the DB layer for simplicity. By using AWS auto-scaling group, capacity could be increased according to traffic. For ingress load balancing, AWS load balancer have been used.

![shortenUrl](https://user-images.githubusercontent.com/57652998/111478254-dda82700-876a-11eb-9680-7cd39ec0bc6a.jpg)

To start the API service, it is assumed that a local mongoDB is deployed for this development purpose.
### Start
cd Q3

npm start

plesae note that the API server is hosted at http://localhost:8081
