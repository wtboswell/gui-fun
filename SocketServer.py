import logging
import time
import eventlet
import socketio

sio = socketio.Server(cors_allowed_origins='http://127.0.0.1:8080')
app = socketio.WSGIApp(sio)

logging.basicConfig(level=logging.ERROR)

global counter

@sio.event
def connect(sid, environ):
    print('Client connected:', sid)

@sio.event
def disconnect(sid):
    print('Client disconnected:', sid)

def send_message():
    sio.emit('message', f'This is a periodic message {time.time()}')
    eventlet.spawn_after(1, send_message) # Send message again after 1 second

if __name__ == '__main__':
    eventlet.spawn(send_message) # Start sending messages periodically
    eventlet.wsgi.server(eventlet.listen(('', 3030)), app) # Start socketio server
