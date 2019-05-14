from webexteamssdk import WebexTeamsAPI
api = WebexTeamsAPI(access_token="MjhjM2ViYTMtZTQ4My00YzgyLWExMjQtNzE3MmVmODgxNTUyNDNhZGVjZTAtN2Q5_PF84_72713ca9-3315-4f76-b46d-5d073e563a9f")
print(api.people.me())
