import requests
import json
from datetime import datetime
from time import time

BASE_URL = 'http://localhost:1484'
API_AUTH = '/makentu/update_detection'

session = requests.Session()

_data = {
    "ID": "0", 
    "objects": [
            { "type": "person", "position": [0, -250] }, 
        ], 
}

req = session.post(
        BASE_URL + API_AUTH, json=_data,
        allow_redirects=True
)

print(req.json())

