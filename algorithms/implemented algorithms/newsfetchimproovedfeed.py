from os import path
import os.path
import subprocess
import json
from googlesearch import search
from newsplease import NewsPlease
quality = 0
item = 0


def bash_command(cmd):
    subprocess.Popen(cmd, shell=True, executable='/bin/bash')


def my_function(query):
    try:
        for j in search(query, tld="com", lang='en', num=1, start=0, stop=1, pause=5):
            return(j)
    except:
        print("Google search can't be performed at the moment. try changing ip....")
        exit(0)


def print_news(url):
    global quality
    try:
        article = NewsPlease.from_url(url)
        try:
            tem = article.text
            if type(tem) is str:
                res = len(tem.split())
                r = int(res)
            else:
                r = 0
            if r > 200:
                quality = quality+1
                print("Trending news #"+str(quality))
                print(article.title)
                print("\n")
                print(article.text)
                print(article.url)
                print("\n")
        except:
            print(".....")

    except:
        print(".....")


def fetch_and_display():
    global item
    temp = data[0]["trends"][item]["name"]
    if temp[0] == "#":
        temp = temp[1:]
    temp = temp + " latest news articles"
    temp = my_function(temp)
    print_news(temp)
    item = item+1


bash_command(
    'twurl /1.1/trends/place.json?id=23424848 > /tmp/copy.json ')

f = open("/tmp/copy.json", "r")
data = f.read()
f.close
data = json.loads(data)

while quality < 10:
    # print(quality)
    fetch_and_display()
