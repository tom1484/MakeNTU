import LiFi
import RPi.GPIO as GPIO

GPIO.setwarnings(False)
test = LiFi.LED_IO(17)

test_data = [0, 0, 2, 2, 50, 50, -75, 100, -75, -75, 75, 75, 10, -75, -75, -75, 200, 20]
while 1:
    test.output(test_data);
