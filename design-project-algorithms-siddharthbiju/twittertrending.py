import subprocess
import json
from googlesearch import search
from newsplease import NewsPlease


def print_news(url):
    article = NewsPlease.from_url(url)
    tem = article.text
    res = len(tem.split())
    r = int(res)
    if r > 400:
        news = news+1
        print(article.title)
        print("\n")
        print(article.text)
        print("\n")
        print(article.url)
        print("\n")


def my_function(query):

    for j in search(query, tld="co.in", num=1, stop=1, pause=2):
        return(j)


def bash_command(cmd):
    subprocess.Popen(cmd, shell=True, executable='/bin/bash')


news = 0
print("sample news feed by siddharth biju")
print("crawling twitter...")
bash_command(
    'twurl /1.1/trends/place.json?id=1 > /tmp/copy.json ')

print("crawled twitter")
f = open("/tmp/copy.json", "r")
data = f.read()
f.close
keyarray = []
links = []
data = json.loads(data)
for i in range(15):
    temp = data[0]["trends"][i]["name"]
    if temp[0] == "#":
        temp = temp[1:]
    temp = temp + " latest news articles"
    keyarray.append(temp)


print("searching for news links in google....")

for i in range(15):
    que = keyarray[i]
    temp = my_function(que)
    links.append(temp)

for i in range(15):
    print("crawling and extracting data...")
    print_news(links[i])
