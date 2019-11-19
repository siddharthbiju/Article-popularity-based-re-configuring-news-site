import json
from googlesearch import search 


with open('new.json','r') as myfile:
	data=json.load(myfile)

data1=data

rowc=len(data)
k=0
z=[[100,-1],[100,-1],[100,-1],[100,-1],[100,-1],[100,-1],[100,-1],[100,-1],[100,-1],[100,-1],[100,-1],[100,-1],[100,-1],[100,-1],[100,-1],[100,-1],[100,-1]]
s=0
i=0
print 'no.of news=',rowc
print 'Checking dataset \n'
#to find popular news
while i<rowc:
	s=0
	x=data[i]['title']
	print(x)
	for url in search(x,stop=90):
		s=s+1
	print 'hits:',s
	#to store position of news
	z[i][0]=i
	#to store hits
	z[i][1]=s
	i=i+1
#sort according to hits
z.sort(key=lambda x:x[1],reverse=True)
i=0
while i<rowc:
	data1[i]=data[z[i][0]]
	i=i+1

#to store sorted data to a new file
with open('new.json','w') as feedsjson:
	json.dump(data1,feedsjson,indent=4)




