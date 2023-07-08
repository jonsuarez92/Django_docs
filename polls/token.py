import requests


def refresh_token():
    """Refreshes the token and returns the new token."""
    url = "https://oauth2.googleapis.com/token"
    data = {
        "client_id": "284119968982-o9i7j31qqpvj1fq6rrhm0m2g08r6ftog.apps.googleusercontent.com",
        "client_secret": "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",
        "refresh_token": "1//01mQxiTA-bUK_CgYIARAAGAESNwF-L9Ir-MtEcsOIn2GRnpD0iItu6JFfNb-GTcrWRMnRIlWYFsgRX4ykGgLmq0BJwVA6erpSSSo",
        "grant_type": "refresh_token"
    }
    response = requests.post(url, data=data)
    if response.status_code == 200:
        token = response.json()
        return token
    else:
        return None


token = refresh_token()
