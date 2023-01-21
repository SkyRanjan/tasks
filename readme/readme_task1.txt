Task1:
In this task the goal was to develop a python web scrapper which scrapps the data from the website country wise and stores it in another csv file.
After the storing, the data for India should be shown separately from the file.
The following libraries were required for the accomplishment of this task:
1. import os:
this was used for making the program itself make a csv file where the scrapped data can be stored.
2. import requests:
this library was imported for coordinating with the website
3. import csv:
for manipulating the csv file
4. import pandas:
for the handling of the dataset which will be scrapped
5. import datetime:
for handling the date and time of present in the dataset and forming the combination of the date and time 
6. import BeautifulSoup:
for scrapping the data from the website or parsing the wesite.
After importing all these libraries, first the website was requested for the permission to parse the data.
Then with the help of the BeautifulSoup the parsing of the website for the data present in it was done.
Next the searching of the data started country wise in which the dataset was found
Then the data was store in an array and the data was editted accordingly for the correct storing of the data
once the data was stored in the array storing of the data was done in the desired format then the creation of the csv file was done
Then the data was stored in the file 
At last the data for country India was shown separately from the file.
