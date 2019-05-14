import requests

apiUrl = 'https://api.ciscospark.com/v1/people/me'
access_token = 'MjhjM2ViYTMtZTQ4My00YzgyLWExMjQtNzE3MmVmODgxNTUyNDNhZGVjZTAtN2Q5_PF84_72713ca9-3315-4f76-b46d-5d073e563a9f'

httpHeaders = {'Authorization': 'Bearer ' + access_token,
           'Content-type': 'application/json'}
response = requests.get(apiUrl, headers=httpHeaders)
if response.status_code == 200:
    print(response.text)
else:
    # Oops something went wrong...  Better do something about it.
    print(response.status_code, response.text)
