# import requests
from subprocess import Popen, PIPE
import os


path = os.getenv('fodb')
# print(path)
if path == None:
    opp = input('Set " fodb " env = This dir path y/n?>')
    if opp == 'y':
        os.environ['fodb'] = input('Path>')
#   USE DB

#  Use DB Class
# functions Login, Remove, Delete, Get, Insert, Create......

# Login = To Login TO Server
# Create = To Create A DB Acc Pass [Username, password]
# Remove = To Remove DB Acc Pass [Username, Password]
# Insert = To Insert Data To Db To Insert Pass Data To Function (var, data)
# Get = To Get Data To Db To Get Pass Data To Function (var)
# Delete = To delete Data To Db To Delete Pass Data To Function (var)
# Querry = All


def DBURLReq(url_):
    url = url_.split(' ')
    # print('{"data": '+str(url).replace('\'', '"')+'}')
    f = open(path + '\\qurry.qurry', 'w')
    f.write('{"data": '+str(url).replace('\'', '"')+'}')
    f.close()
    pipe = Popen(path + '\\API.exe', stdout=PIPE)
    text = pipe.communicate()[0]
    # text = text.replace('b\'', '').replace('\\n\'', '')
    text = list(str(text))
    del text[0]
    del text[0]
    del text[len(text) - 1]
    del text[len(text) - 1]
    del text[len(text) - 1]
    nt = ''
    for i in text:
        nt += i
        del i
    del text
    # print (nt)
    return nt


internet = False
try:
    DBURLReq('ox33')
    internet = True
except:
    internet = True  # True


class DB:

    username = None
    password = None

    def Login(self, user='', pass_=''):

        self.username = user
        self.password = pass_

    def Create(self, user='', pass_=''):

        return DBURLReq(f'login {self.username} {self.password}')

    def Querry(self, string):

        return DBURLReq(string)

    def Get(self, variable='', value=''):

        return DBURLReq(f'get {self.username} {self.password} {variable} {value}')

    def Insert(self, variable='', value=''):

        return DBURLReq(f'insert {self.username} {self.password} {variable} {value}')

    def Delete(self, variable='', value=''):

        return DBURLReq(f'delete {self.username} {self.password} {variable} {value}')

    def Remove(self):

        return DBURLReq(f'remove {self.username} {self.password}')
