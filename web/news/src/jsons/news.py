import json
from googlesearch import search 


with open('new.json','r') as myfile:
	data=json.load(myfile)
	


rowc=len(data)
k=0
t=[100]*rowc
t1=[-1]*rowc
z=[[100,-1],[100,-1],[100,-1],[100,-1],[100,-1]]
z1=[100]*rowc
z2=[-1]*rowc
while k>rowc:
	t[k]=100
	t1[k]=-1
	k=k+1

#print(t)
#print(t1)
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
	t[i]=i
	t1[i]=s
	z[i][0]=i
	z[i][1]=s
	i=i+1
#print(z)
print "\n"
#print(t)
#print(t1)
z.sort(key=lambda x:x[1],reverse=True)
#print(t)
i=0
#to store sorted data to a new file
with open('new1.json','a') as feedsjson:
	while i<rowc:
		r=z[i][0]
		json.dump(data[r],feedsjson,indent=4)
		i=i+1



