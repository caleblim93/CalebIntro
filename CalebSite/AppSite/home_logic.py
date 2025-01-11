from datetime import datetime

born_year = 1993

def main():
    data = {
        'name' : 'Lim Hock Ming',
        'nick' : 'Caleb',
        'age' : calc_age(),
        'DOB' : '1993 Feb 03',
        'skills': ['Java', 'Selenium', 'Python', 'Webscrapping', 'Cypress', 'Postman', 'Jenkins', 'Jmeter'],
        'languages': ['English', 'Mandarin','Japanese','Malay','Cantonese'],

    }
    return data


def calc_age():
    return datetime.now().year - born_year