from datetime import datetime


def convert_date(date):
    data_obj = datetime.strptime(date, "%Y-%m-%d")
    return data_obj.strftime("%d/%m/%Y")


def replace_text(string, text_to_replace, new_text):
    return string.replace(text_to_replace, new_text)
