# MMCd Datalogger
Web automotive diagnostic and datalogging tool compatible with many pre-OBDII (1990-1994) Mitsubishi vehicles.

# About the Hardware
All following info has been verified on my Mitsubishi Galant E33A (4G63 SOHC), but it should apply on other pre-OBDII ECUs as well.
There's absolutely NO WARRANTY on info and software, you can use it at your own risk.
How to make your own datalogging cable...

ALDL diagnostic connector:

![ALDL diagnostic connector](https://github.com/illja96/mmcdlogger/blob/main/diag-conn.jpg)

When pin (10) is shorted to ground (12) ECU enters diagnostic mode.
In this mode pin (1) is used to exchange diagnostic data with a scan tool. Serial communication is done using 1953 baud, 8 bit, 1 stop bit, no parity, TTL(?) levels.
I used the following RS-232 adapter (taken from Club DSM Colorado):

![RS-232 adapter 1 schematics](https://github.com/illja96/mmcdlogger/blob/main/ecu-rs232.jpg)

I replaced MAX233 with ST232BD, added required external capacitors and power indication LED:

![RS-232 adapter 2 schematics](https://github.com/illja96/mmcdlogger/blob/main/schematics.gif)
![RS-232 adapter 2 PCB top](https://github.com/illja96/mmcdlogger/blob/main/pcb-top.jpg)
![RS-232 adapter 2 PCB bottom](https://github.com/illja96/mmcdlogger/blob/main/pcb-bottom.jpg)

# About the Protocol
The protocol is simple: request-reply. Request and reply are one-byte message.
I have found requests and reply interpretations on the web one a web page called "DSM Open Source Datalogger Project".
I've found no source there, so I've decided to make one... ;)
There's what I found:

|Sensor|Address|Function|Unit|
|------|-------|--------|----|
|Accel enrichment|0x1D|100x / 255|%|
|Coolant temperature|0x07|-1.45x + 308|F|
|Engine speed|0x21|31.25x|rpm|
|Fuel trim high|0x0E|0.78x|%|
|Fuel trim middle|0x0D|0.78x|%|
|Fuel trim low|0x0C|0.78x|%|
|Injector pulse width|0x29|0.256x|ms|
|Oxygen feedback trim|0x0F|0.78x|%|
|Oxygen sensor|0x13|0.0195x|V|
|Throttle position|0x17|100x / 255|%|
|Air flow|0x1A|6.29x|Hz|
|Air temperature|0x3A|-1.69x + 358|F|
|Air volume|0x2C|x||
|Barometer|0x15|0.00486x|bar|
|ISC steps|0x16|x||
|Knock sum|0x26|x||
|Timing advance|0x06|x - 10|deg|
|Battery|0x14|0.0733x|V|
|EGR temperature|0x12|-2.7x + 597.7|F|
|TDC|0x02|bit 0x04||
|Power steering|0x02|bit 0x08||
|AC Switch|0x02|bit 0x10||
|Park/Neutral|0x02|bit 0x20||
|Idle Switch|0x02|bit 0x80||
|AC Clutch|0x00|bit 0x20||

And here's what I've figured out by trial and error:
|Address|Action|
|-------|------|
|0xF1|?|
|0xF2|?|
|0xF3|?|
|0xF4|?|
|0xF5|Canister purge|
|0xF6|Turn on fuel pump|
|0xF7|Disable injector #6|
|0xF8|Disable injector #5|
|0xF9|Disable injector #4|
|0xFA|Disable injector #3|
|0xFB|Disable injector #2|
|0xFC|Disable injector #1|

0xF1..0xF6 work with engine stopped. After ECU any of theese commands it invokes corresponding relay/solenoid for about 6 seconds. After that it answers with 0x00. If engine is running ECU returns 0xFF immediately.
0xF7..0xFC disable injector for about 6 seconds and return 0x00.

Diagnostic fault codes are stored as bitmaps in two 8-bit cells. There're two kinds: active and stored (accumulated). Command 0xCA clears fault memory.
|Address|Description|
|-------|-----------|
|0x38 (0x4C)|Faults, low byte|
|0x39 (0x4D)|Faults, high byte|
|0x3B (0x4A)|Stored faults, low byte|
|0x3C (0x4B)|Stored faults, high byte|
|0xCA|Clear faults, returns 0x00|

|Bit #|Code|Fault|
|-----|----|-----|
|1|11|Oxygen sensor|
|2|12|Intake air flow sensor|
|3|13|Intake air temperature sensor|
|4|14|Throttle position sensor|
|5|15|ISC motor position sensor|
|6|21|Engine coolant temperature sensor|
|7|22|Engine speed sensor|
|8|23|TDC sensor|
|9|24|Vehicle speed sensor|
|10|25|Barometric pressure sensor|
|11|31|Knock sensor|
|12|41|Injector circuit|
|13|42|Fuel pump relay|
|14|43|EGR|
|15|44|Ignition coil|
|16|36|Ignition circuit|

# Related Projects
Original PalmOS MMCd Datalogger developer: [Dmitry Yurtaev](https://mmcdlogger.sourceforge.net/)
