import requests
  
  
  
#   USE DB

    #  Use DB Class
    # functions Login, Remove, Delete, Get, Insert, Create......
    
    # Login = To Login TO Server
    # Create = To Create A DB Acc Pass [Username, password]
    # Remove = To Remove DB Acc Pass [Username, Password]
    # Insert = To Insert Data To Db To Insert Pass Data To Function (var, data)
    # Get = To Get Data To Db To Get Pass Data To Function (var)
    # Delete = To delete Data To Db To Delete Pass Data To Function (var)
  
  
  
  
def DBURLReq(url_):
    url = requests.get(
        'https://ultrontheai.github.io/FreeOnlineDB/FreeOnlineDB_API.html?%20' + str(url_))
    url = url.text.replace('''<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>API</title>
</head>
<body>
    <h1>''', '').replace('''</h1>
    <script src="https://cdn.socket.io/socket.io-3.0.1.min.js"></script>
    <script>
        var h1 = document.querySelector('h1');
        var url = location.href.split('%20');
        h1.innerHTML = url;
    </script>
    <script>
        const socket = io('https://free-online-db.herokuapp.com/');

        socket.on('connection');
        console.log(url)
        socket.emit(url[1], ['', url[2], url[3], url[4], url[5]]);
        socket.on('result', (data) => {
            h1.innerHTML = JSON.stringify(data);
            console.log(data);
        });
    </script>
</body>
</html>''', '')
    return url

internet = False
try:
    DBURLReq('')
    internet = True
except: internet = True # True

class DB:
    
    username = None
    password = None
    
    def Login(self, user, pass_):
        
        self.username = user
        self.password = pass_
        
    def Create(self, user, pass_):

        DBURLReq(f'login {self.username} {self.password}')
        
    def Querry(self, string):
        
        return DBURLReq(string)
    
    def Get(self, variable = '', value = ''):

        DBURLReq(f'get {self.username} {self.password} {variable} {value}')
    
    def Insert(self, variable = '', value = ''):
        
        DBURLReq(f'insert {self.username} {self.password} {variable} {value}')
        
    def Delete(self, variable = '', value = ''):

        DBURLReq(f'delete {self.username} {self.password} {variable} {value}')
    
    def Remove(self):
        
        DBURLReq(f'remove {self.username} {self.password}')
