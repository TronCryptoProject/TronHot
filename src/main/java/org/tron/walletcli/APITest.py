import requests,json

creds = {
    "password": "123456789",
    "accountName": "megatron2"
}

response = requests.post("http://localhost:8088/api/registerWallet",data={"password":creds["password"],"accountName": creds["accountName"]})
json_data = json.loads(response.text)
creds["privKey"] = json_data["privKey"]
creds["rawPubAddress"] = json_data["rawPubAddress"]
creds["pubAddress"] = json_data["pubAddress"]
assert creds["password"] == json_data["password"]
assert creds["accountName"] == json_data["accountName"]

response = requests.post("http://localhost:8088/api/login",data={"password":creds["password"],"pubAddress":creds["pubAddress"]})
json_data = json.loads(response.text)
assert creds["accountName"] == json_data["accountName"]
assert creds["pubAddress"] == json_data["pubAddress"]
assert creds["rawPubAddress"] == json_data["rawPubAddress"]

response = requests.post("http://localhost:8088/api/restoreWallet",data={"pubAddress":creds["pubAddress"], "rawPubAddress":creds["rawPubAddress"]})
json_data = json.loads(response.text)
assert creds["accountName"] == json_data["accountName"]
assert creds["pubAddress"] == json_data["pubAddress"]
assert creds["rawPubAddress"] == json_data["rawPubAddress"]


response = requests.post("http://localhost:8088/api/accountInfo",data={"pubAddress":creds["pubAddress"]})
json_data = json.loads(response.text)
assert creds["accountName"] == json_data["accountName"]
assert creds["pubAddress"] == json_data["pubAddress"]
assert creds["rawPubAddress"] == json_data["rawPubAddress"]
assert json_data["balance"] == 0

