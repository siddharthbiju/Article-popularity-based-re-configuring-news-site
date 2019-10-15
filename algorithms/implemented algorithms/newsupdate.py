import csv
from googlesearch import search
with open('news.csv') as csvDataFile:
    csvReader = csv.reader(csvDataFile)
    data=list(csv.reader(csvDataFile))
rowc = len(data)
arr=[[1,2],[2,2],[3,3],[4,4],[5,5]]
j=1
k=0
print 'Checking Dataset \n'
while k<rowc-1:
	x=data[j][1]
	i=0;
	for url in search(x, stop=30):
		i=i+1
	arr[k][0]=k
	arr[k][1]=i
	k=k+1
	j=j+1
print 'Generating output \n'
arr.sort(key=lambda x:x[1])
print arr
k=rowc-1
while k>0:
	l=k-1
	r=arr[l][0]
	print data[r][1]
	print '\n'
	print data[r][2]
	print '\n'
	k=k-1


