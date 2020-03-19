import requests
from bs4 import BeautifulSoup
    
url = 'https://websecurity.tistory.com/93'
response = requests.get(url)
response.encoding = 'utf-8'
html = response.text

soup = BeautifulSoup(html, 'html.parser')

lecture_list = soup.select('.post-content')        # lecture 클래스 탐색
print(html)
# print(lecture_list)

# print(dir(lecture_list))
# for lecture in lecture_list:
#     print(lecture.text)