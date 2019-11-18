import json
from googlesearch import search 


with open('new.json','r') as myfile:
	data=json.load(myfile)

data1=data

rowc=len(data)
rowc=3
k=0
z=[[100,-1],[100,-1],[100,-1],[100,-1],[100,-1],[100,-1],[100,-1],[100,-1],[100,-1],[100,-1],[100,-1]]
s=0
i=0
print 'no.of news=',rowc
print 'Checking dataset \n'
#to find popular news
while i<rowc:
	s=0
	x=data[i]['title']
	print(x)
	for url in search(x,stop=30):
		s=s+1
	z[i][0]=i
	z[i][1]=s
	i=i+1
print(z)
print "\n"
z.sort(key=lambda x:x[1],reverse=True)
print(z)
i=0
while i<rowc:
	data1[i]=data[z[i][0]]
	i=i+1

#to store sorted data to a new file
with open('new1.json','a') as feedsjson:
	json.dump(data1,feedsjson,indent=4)




