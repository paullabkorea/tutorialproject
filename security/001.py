from socket import *

# 네트워크 해킹 기술
# stackoverflow, github
# 포트 스캐닝
# 패킷 스니핑(엿듣는)
# 세션 하이재킹(빼앗는 것)
# 스푸핑(위장)
# Dos, DDoS

#포트 스캔(port scan)은 운영 중인 서버에서 열려 있는 TCP/UDP 포트를 검색
#TCP 스캔
#TCP 스캔은 TCP 처음 연결 시 일어나는 3-웨이 핸드쉐이킹을 탐지하는 기법
#Nmap 등의 프로그램에서는 이 방식을 연결 스캔(connect scan)으로 부른다.

#SYN 스캔
#SYN 스캔은 TCP 핸드쉐이킹을 완전히 수행하지 않고, 
#처음 SYN 패킷만을 받은 후 검사를 완료하는 방식

#UDP 스캔
#UDP 프로토콜은 TCP와 다르게 핸드쉐이킹 과정이 존재하지 않고, 
#따라서 일반적으로는 포트가 열려 있다고 하더라도 서버에서 아무런 응답을 하지 않을 수도 있다. 


# http://paullab.synology.me/
target = '118.43.233.147'
targetIP = gethostbyname(target)
#scan reserved ports
l = []
# 0번 ~ 1023번: 잘 알려진 포트 (well-known port)
# 1024번 ~ 49151번: 등록된 포트 (registered port)
# 49152번 ~ 65535번: 동적 포트 (dynamic port)
for i in range(0, 1024):
    s = socket(AF_INET, SOCK_STREAM)
    result = s.connect_ex((targetIP, i))
    print(f'Port scanning... port : {i}, result : {result}')
    if(result == 0) :
        print(f'Open Port : {i}')
        l.append(i)
    s.close()

print(l)