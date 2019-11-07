import json
from googlesearch import search 


with open('new.json','r') as myfile:
	data=json.load(myfile)
	


rowc=len(data)
z=[[100,-1],[100,-1],[100,-1],[100,-1],[100,-1]]
s=0
i=0
print 'no.of news=',rowc
print 'Checking dataset \n'
#to find popular news
while i<rowc:
	s=0
	x=data[i]['title']
	print(x)
	for url in search(x,stop=1):
		s=s+1
	z[i][0]=i
	z[i][1]=s
	i=i+1
z.sort(key=lambda x:x[1],reverse=True)
i=0
#to store sorted data to a new file
with open('new1.json',mode='a+') as feedsjson:
	while i<rowc:
		r=z[i][0]
		json.dump(data[r],feedsjson)
		i=i+1




